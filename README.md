# investia-storybook

Investia 站点（`ploy-web`，Astro 6 + React 19 + Tailwind v4）组件库的 Storybook 项目。

`src/components`、`src/content`、`src/styles`、`src/hooks`、`src/lib/utils.ts` 和 `public/`
都是从站点原样复制过来的；本项目新增的只有 `*.stories.tsx`、`.storybook/` 配置、
`public/mock/` 测试数据和 `src/types/svg-export.d.ts`。

## 使用

```bash
npm install
npm run storybook        # http://localhost:6006
npm run build-storybook  # 输出到 storybook-static/
npm run build            # 构建组件包：dist/ + COMPONENTS.md
npm run verify           # lint + typecheck + 组件包构建 + Storybook 构建
```

在线 Storybook：https://xnsengo.github.io/poly-storybook-demp/ （push 到 `main` 后由 GitHub Actions 自动部署）

## 作为组件包使用

这个仓库同时是 npm 包 `@xnsengo/investia-ui`：

```bash
npm i "@xnsengo/investia-ui@github:xnsengo/poly-storybook-demp#v0.1.0"
```

```tsx
import { Button, SiteShell, Body2Products, homeContent } from "@xnsengo/investia-ui";
```

| 产物 | 内容 |
| --- | --- |
| `dist/index.js` + `*.d.ts` | 全部组件、页面、EN/FR 文案字典和 `cn` 等工具函数（ESM，含类型） |
| `dist/components.css` | 组件自带的 CSS（section 样式、Swiper、Marquee） |
| `dist/styles.css` | 独立使用时的完整 Tailwind 主题 + utility |
| `COMPONENTS.md` | 自动生成的组件目录（用途说明 + Storybook 链接），给 AI 和开发者查阅 |

`dist/` 和 `COMPONENTS.md` 会提交进仓库，这样从 GitHub 安装时不需要构建。改了组件后记得运行 `npm run build` 再提交。

在 Ploy 项目中接入的步骤（含可直接贴进 `AGENTS.md` 的说明）见 [docs/ploy-integration.md](docs/ploy-integration.md)。

## 目录结构（Atomic Design）

| Storybook 分组 | 内容 |
| --- | --- |
| Introduction | 总览说明（`src/introduction.mdx`） |
| Foundations | 站点自带的 design-system 页（logo、颜色、字体、基础组件） |
| Atoms | Button、Heading、DisplayHeading、Text、Link、Tag、Avatar、Image、Logo、Icons、Layout（Section/Container/Separator）、Form controls、Reveal 等 |
| Molecules | Card、Faq、Tabs、Table、Carousel、Marquee、Overlay（Dialog/Popover/Tooltip）、Navbar、SiteFooterLinks |
| Organisms | Global / Home / Products / Experience / Advisor 各区块，每个都有 EN、FR、Tablet、Phone 版本 |
| Templates | SiteShell |
| Pages | Home、体验页、产品页、找顾问页、404（可切换 `locale`） |

story 文件就放在组件旁边，例如 `src/components/atoms/button.stories.tsx`。

## 说明

- **文案**：organism 的 story 直接用 `src/content/<page>/` 里的 EN/FR 字典，和页面传的数据完全一致。
- **AdvisorSearch**：站点里请求的是 Astro SSR 接口 `/api/advisors`，Storybook 里改为指向
  `public/mock/advisors.json` / `advisors-empty.json`（虚构的顾问数据）。`WithResults`、`NoResults`、
  `EmptyInputError` 用 play 函数自动完成搜索。Pages 下的「Find an advisor」整页没有这个接口，搜索会显示无结果状态。
- **工具栏**：Viewport 预设 375 / 768 / 1140 / 1440；背景 light / light blue / dark；a11y 面板会对每个 story 跑 axe。
- **未纳入**：`templates/seo.tsx`、`seo-json.tsx` 只输出 `<head>` 标签，没有可视内容，所以没有复制。
- **`src/types/svg-export.d.ts`**：`logo.tsx` 的 `<title>` 带着 SVG 导出残留的属性，React 的类型不认，
  这里做了类型补充，组件源码保持不变。
- **lint 范围**：`npm run lint` 只检查本项目自己的文件（stories、`.storybook`、`src/types`）。
  复制来的组件源码里有几处 `react-hooks/set-state-in-effect` 报错，属于原站点代码，应在原项目修改。

## 与站点同步

站点组件更新后，运行：

```bash
node scripts/sync-from-site.mjs "../site-4ca098c2-2930-4f97-8fab-665532689ff9-main"
npm run verify
```

脚本会覆盖复制来的源码和资源，保留所有 `*.stories.tsx` 和 `public/mock/`。新增组件需要手动补 story。
