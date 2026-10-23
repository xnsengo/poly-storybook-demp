# 在 Ploy 项目中使用 @xnsengo/investia-ui（POC）

## 1. 安装

在 Ploy 项目的 `package.json` 的 `dependencies` 里加：

```json
"@xnsengo/investia-ui": "github:xnsengo/poly-storybook-demp#v0.1.0"
```

然后用 bun 重新安装，更新 `bun.lock`（Ploy 项目用 bun 锁定依赖版本；如果项目里也有
`package-lock.json`，按 Ploy 的 AGENTS.md 要求再运行一次 `npm install` 同步它）：

```bash
bun install
```

> 不要只用 `npm install`：没有 npm lockfile 时它会装到比 `bun.lock` 更新的 Astro / Cloudflare 版本，
> 实测原站点会在 SSR 构建阶段报 `rollupOptions.input should not be an html file`，这和组件包无关。

> 包的 `dist/` 已经提交在仓库里，安装时不需要构建。`react` / `react-dom` 是 peer 依赖，Ploy 项目已有；
> 其余运行时依赖（Radix、swiper、motion、lucide-react 等）和 Ploy 项目里的版本一致。

## 2. 样式

Ploy 项目已经用同一套 Investia Tailwind 主题编译 `src/styles/globals.css`，所以只需要：

```css
/* src/styles/globals.css，放在 @import "./theme.css"; 之后 */
@import "@xnsengo/investia-ui/components.css";
@source "../../node_modules/@xnsengo/investia-ui/dist";
```

- `components.css`：组件自带的 CSS（各 section 样式、Swiper、Marquee）。
- `@source`：Tailwind v4 默认不扫描 `node_modules`，这一行让它生成包内组件用到的 utility class。

不使用 Tailwind 的项目则引入 `@xnsengo/investia-ui/styles.css` + `components.css`。

## 3. 静态资源

组件按根路径引用 `/fonts/*`、`/images/*`。Ploy 项目的 `public/` 里已经有同一批文件，不用额外处理。

## 4. 贴进 Ploy `AGENTS.md` 的说明

把下面整段加到 Ploy 项目 `AGENTS.md` 的末尾：

```markdown
## Shared component library (@xnsengo/investia-ui)

The Investia components are published as the package `@xnsengo/investia-ui`.
Before building any atom, molecule, section or page, check whether the package
already has it, and import it from the package instead of creating or copying
a component:

    import { Button, Card, SiteShell, Body2Products } from "@xnsengo/investia-ui";

- Catalog of every export, with what it is for and its Storybook link:
  `node_modules/@xnsengo/investia-ui/COMPONENTS.md`.
- Props, variants and EN/FR examples: https://xnsengo.github.io/poly-storybook-demp/
- Copy dictionaries are exported too (`homeContent`, `productsContent`,
  `experienceContent`, `advisorContent`, `ROUTES`); pass them as props the
  same way the package's page components do.
- Only build a new component when nothing in the package fits. Build it in
  this project following the usual rules, and note it so it can be moved into
  the package later.
- Do not edit files under `node_modules/@xnsengo/investia-ui`.
```

## 5. 验证 POC

1. 在 Ploy 里新建一个测试页，比如让它"用现有组件做一个关于我们页面"。
2. 检查生成的代码是不是从 `@xnsengo/investia-ui` import，而不是在 `src/components/` 里新建文件。
3. 构建并预览，确认样式、字体和图片正常。

## 6. 升级版本

本仓库改完组件后：

```bash
npm run verify                         # 重新生成 dist/、COMPONENTS.md 并检查
git add -A && git commit -m "..."      # 提交改动和新的 dist/
npm version patch                      # 0.1.0 -> 0.1.1，生成版本提交和 git tag v0.1.1
git push --follow-tags
```

Ploy 项目把依赖里的 `#v0.1.0` 改成新的 tag，然后重新 install。

## 7. 以后转私有包

包名已经是带作用域的 `@xnsengo/investia-ui`，`publishConfig` 也指向 GitHub Packages。
转私有时：把仓库设为私有，运行 `npm publish`（需要有 `write:packages` 权限的 token），
然后 Ploy 项目里把依赖改成 `"^0.1.0"`，并加一个 `.npmrc`：

```
@xnsengo:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

所有 `import` 语句都不用改。
