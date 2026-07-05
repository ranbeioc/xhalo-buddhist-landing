# xHalo Buddhist Landing — Rotating Halo v8

Cloudflare Pages 静态部署包。v8 在 v7 分层架构基础上修复佛像背后曼荼罗/银河素材的矩形边界。

## 核心特性
- 暗色像素使用 `screen` 光效混合，不再形成矩形色块；
- 椭圆形宽羽化遮罩使金色光环、蓝色星云和页面底色渐变融合；
- 佛像、衣纹、莲花座和底部水面细节保持清晰，不参与羽化；
- 保留双层旋转光环、河流波光、萤火虫、飘落花瓣和移动端降级；
- 第二、三屏内容最大宽度仍为 1440px；
- ZIP 根目录可直接部署到 Cloudflare Pages，无需构建。

## 近期更新纪录 (v8.1)

### 1. 多语言国际化 (i18n)
- 引入了轻量级、零依赖的客户端 i18n 翻译引擎 `i18n.js`；
- 支持 17 种语言：
  - 简体中文 (zh-Hans)、繁体中文 (zh-Hant)、日本語 (ja)、한국어 (ko)、English (en)、Deutsch (de)、Español (es)、Français (fr)、Italiano (it)、Português (pt)
  - ไทย (th)、မြန်မာ (my)、Tiếng Việt (vi)、ភាសាខ្មែរ (km)、ພາສາລາວ (lo)
  - Bahasa Indonesia (id)、Bahasa Melayu (ms)
- 在右上角实现了一个透明磨砂玻璃效果的语言选择器下拉菜单，包含地球与箭头 SVG 图标，完美适配桌面与移动端视图；
- 全键盘无障碍访问支持 (ESC 键关闭菜单、Tab/Arrow 键选择选项等)。

### 2. 语种自动识别与匹配
- 支持根据用户浏览器语言偏好 (`navigator.languages` 与 `navigator.language` 列表) 自动匹配对应语言；
- 智能匹配地区中文变体：若浏览器偏好语种为 `zh-TW`、`zh-HK`、`zh-MO` 或含有 `hant` 时，自动映射为繁体中文 (`zh-Hant`)，其余中文偏好则展示简体中文 (`zh-Hans`)；
- **优先级关系**：用户手动选择的语种优先（支持 URL 搜索参数 `?lang=...` 及 `localStorage` 缓存），其次才是浏览器语种偏好，最后 fallback 至默认的简体中文 (`zh-Hans`)。

### 3. SEO 与数据统计优化
- 在 `<head>` 中补全了 17 种语言所对应的 `<link rel="alternate" hreflang="...">` 关联标签，辅助搜索引擎爬虫检索；
- 新增 JSON-LD (WebSite) 结构化数据，增强搜索表现；
- 集成了 Microsoft Clarity 页面行为统计跟踪代码。

### 4. 样式冲突与资源缓存失效防护 (防抖动/防错乱)
- **静态资源防缓存**：在 `index.html` 加载 `styles-v8.css`、`i18n.js` 与 `app.js` 的链入链接上添加了 cache-buster 版本查询参数 `?v=8.1.1`，确保部署更新即时生效；
- **排版防抖动**：将核心的绝对定位与隐藏规则以 `<style>` 方式内联写入 head，防止外部 CSS 加载延迟时菜单呈竖排列表展现；
- **标签包裹防冲突**：修复了因翻译 eyebrow 文字而引入包裹 span 导致 `.eyebrow span` 全局规则将文本挤压变形的 bug。将翻译核心更新算法重构为自适应孩子节点探测，当翻译目标具有 HTML 子节点时，仅替换其纯文本节点（如 eyebrow text），完美保护原有的排版节点（如金色横线 span、按钮 SVG 图标）。
