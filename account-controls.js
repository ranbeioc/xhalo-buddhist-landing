(() => {
  const script = document.currentScript;
  const httpsOrigin = (configured, fallback) => {
    try {
      const parsed = new URL(configured || fallback);
      return parsed.protocol === "https:" ? parsed.origin : fallback;
    } catch {
      return fallback;
    }
  };
  const AUTH = httpsOrigin(script?.dataset.authOrigin, "https://auth.xhalo.co");
  const CHAT_API = httpsOrigin(script?.dataset.chatApiOrigin, "https://chat-api.xhalo.co");
  const CHAT_WEB = httpsOrigin(script?.dataset.chatWebOrigin, "https://chat.xhalo.co");
  const ACCOUNT = httpsOrigin(script?.dataset.accountOrigin, "https://app.xhalo.co");
  const cache = (value) => {
    if (value === undefined) return Math.min(100, Math.max(0, Number(document.cookie.match(/(?:^|;\s*)xhalo_chat_unread=(\d+)/)?.[1] || 0)));
    const count = Math.min(100, Math.max(0, Math.trunc(value)));
    document.cookie = `xhalo_chat_unread=${count}; Path=/; Domain=.xhalo.co; Max-Age=2592000; Secure; SameSite=Lax`;
    return count;
  };
  let unread = cache();
  let account = null;
  let unreadRequestInFlight = false;
  const host = document.createElement("div");
  host.className = "xhalo-account-controls";
  const render = () => {
    if (!account) { host.replaceChildren(); return; }
    const locale = document.documentElement.lang || "en";
    const profile = (section) => `${ACCOUNT}/profile?locale=${encodeURIComponent(locale)}&section=${section}`;
    const safeImage = typeof account.image === "string" && account.image.startsWith("https://") ? account.image.replace(/[&<>"']/g, "") : "";
    host.innerHTML = `<a class="xhalo-chat-control" href="${CHAT_WEB}" target="_blank" rel="noopener noreferrer">Chat${unread ? `<span>${unread >= 100 ? "99+" : unread}</span>` : ""}</a><details><summary aria-label="Account">${safeImage ? `<img src="${safeImage}" alt="">` : `<b>${account.name.slice(0, 1).toUpperCase()}</b>`}</summary><div class="xhalo-account-menu"><strong></strong><small></small>${["profile","settings","language","developers"].map((section) => `<a href="${profile(section)}">${section[0].toUpperCase() + section.slice(1)}</a>`).join("")}<a href="${ACCOUNT}/help">Help</a><button type="button">Sign out</button></div></details>`;
    host.querySelector("strong").textContent = account.name;
    host.querySelector("small").textContent = account.email;
    host.querySelector("button").addEventListener("click", () => { void fetch(`${AUTH}/api/auth/sign-out`, { method: "POST", credentials: "include" }).finally(() => { cache(0); account = null; render(); }); });
  };
  const refresh = async () => {
    if (!account || document.visibilityState !== "visible" || unreadRequestInFlight) return;
    unreadRequestInFlight = true;
    try {
      const response = await fetch(`${CHAT_API}/v1/chat/unread`, { credentials: "include", cache: "no-store" }).catch(() => null);
      if (!response?.ok) return;
      const body = await response.json().catch(() => null);
      if (typeof body?.unreadCount === "number") { unread = cache(body.unreadCount); render(); }
    } finally {
      unreadRequestInFlight = false;
    }
  };
  const startUnreadRefresh = () => {
    void refresh();
    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") void refresh(); });
    window.setInterval(refresh, 45000);
  };
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".header-right")?.prepend(host);
    void fetch(`${AUTH}/api/me`, { credentials: "include", cache: "no-store" }).then(async (response) => {
      if (!response.ok) return;
      const body = await response.json();
      if (body.user?.email) { account = { name: body.profile?.displayName || body.user.name || body.user.email, email: body.user.email, image: body.profile?.avatarUrl || body.user.image || null }; render(); startUnreadRefresh(); }
    }).catch(() => undefined);
  }, { once: true });
})();
