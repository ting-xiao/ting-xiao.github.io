# Ting Xiao — personal academic website

这是根据你上传的原始 `ting-xiao.github.io-main.zip` **完成内容迁移**的 GitHub Pages 网站。布局风格参考 [Timothy Gebhard 的网站](https://timothygebhard.de/) 和 [Barks](https://github.com/timothygebhard/barks)（MIT 许可），并增加了深色模式。本项目为不需要 Hugo / Node 构建的静态 HTML、CSS、JavaScript 实现。

## 页面和迁移内容

| 导航 | 内容 |
| --- | --- |
| **Ting Xiao** (`index.html`) | 首页左栏为自我介绍和 3 条 News，右栏为头像、地点以及原网站的 5 个入口（Personal website、Email、Google Scholar、ORCID、GitHub）；图标加文字纵向排列。 |
| **Research interests** (`research.html`) | 保留原来的三栏研究流设计、三幅 SVG 动画、原文、Research toolkit；SVG 已配合新主题颜色制作亮色/暗色版本。 |
| **Publications** (`publications.html`) | 5 篇期刊论文、作者、期刊、原 DOI 或文章链接。 |
| **Work in progress** (`work-in-progress.html`) | 从原站 Working papers 抽出的 4 篇研究稿。 |
| **Conferences** (`conferences.html`) | 原站 5 项会议记录。 |
| **CV** (`cv.html`) | 根据原站公开信息整理的学术概览及联系入口。 |

已经删除原站的 Teaching、Collaborators、Posts、Home 导航项；未保留有关它们的无关图片。

### CV 的说明

你上传的原仓库中 **没有 PDF 简历**：原站 HTML 虽然引用了 `assets/Ting_Xiao_CV.pdf`，但 ZIP 内并不存在这个文件。新版 CV 页目前展示经过原站核实的学历/职位相关信息、研究领域、部分论文和联系信息，并提供 **Request full CV** 邮件按钮，而不会链接到不存在的文件。

**添加你自己的 CV PDF：**

1. 将 PDF 放在网站的 `assets/Ting_Xiao_CV.pdf`。
2. 打开 `content/site-data.js`，把 `profile.cv` 从空字符串改成 `"assets/Ting_Xiao_CV.pdf"`。
3. 提交 GitHub 后，CV 页面会自动显示 **Download CV (PDF)**。

如果需要额外的 publication list PDF，也可以自行添加并链接；原仓库引用了一个未随 ZIP 提供的 `assets/Ting_Xiao_Publication_List.pdf`，因此没有虚构它。

## 发布到 GitHub Pages

网站源码已放在 ZIP 的**根目录**：有 `index.html`、`research.html`、`assets/`、`content/`、`.github/` 等文件。**务必解压 ZIP，并把里面的文件放到 GitHub 仓库根目录；不要直接把 ZIP 或外层文件夹上传到仓库**。

建议先备份原仓库，再将本项目文件复制到仓库，替换原有网站：

```bash
git clone https://github.com/ting-xiao/ting-xiao.github.io.git
cd ting-xiao.github.io

# 备份你的原有文件，然后把本 ZIP 解压后的所有内容覆盖至此目录，
# 包含隐藏的 .github 文件夹，且不要覆盖 .git 文件夹。

git add -A
git commit -m "Migrate website to Barks-inspired design with dark mode"
git push origin main
```

**GitHub Settings → Pages → Build and deployment → Source：选择 `GitHub Actions`。** 你原有仓库已经包含 `.github/workflows/static.yml`，本项目保留了该工作流，它在推送 `main` 分支时自动部署整个仓库。如果你使用的默认分支不是 `main`，需相应修改工作流中的 `branches: ["main"]` 或推送到 main 分支。

部署完成后访问：**https://ting-xiao.github.io/**。发布可能需要等待几分钟。

> 此 ZIP 只包含新网站文件；它**并未自动修改**你的 GitHub 仓库。更新线上网站需要你提交这些文件，或在具备仓库写入权限的环境中提交。

## 本地预览

解压 ZIP 后，在网站目录中运行：

```bash
python3 -m http.server 8000
```

浏览器打开 `http://localhost:8000/`。不需要安装包或进行构建。若 Google Fonts 无法访问，会自动使用系统字体。

## 后续更新

- **改个人简介、News、论文、在研论文、会议**：修改 `content/site-data.js`。
- **改研究方向与配图**：同一文件的 `research` 数组；图片在 `assets/`。主题内已经保留对应的浅色/深色动态 SVG。
- **改全站配色**：修改 `theme.css` 顶部 `:root`（浅色）和 `:root[data-theme=dark]`（深色）的变量。当前采用暖白 `#fcfaf9`、深灰 `#302c2c`、哥本哈根大学官方红 `#901A1E`（[UCPH 配色标准](https://www.ku.dk/designguide/en/colours)）。深色模式使用适配暗背景的浅玫瑰红。
- **导航栏**：已取消红色背景，缩小到约 58 px，高度更紧凑；所有导航文字统一正文字号及颜色。
- **首页布局**：宽屏左右两栏，左栏自我介绍和 News，右栏照片与 6 行位置/联系方式；窄屏自动调整布局。
- **深色模式**：点击导航最右侧月亮/太阳图标；选择保存在 `localStorage` 中，首次访问时跟随系统主题。
- **改导航和页面布局**：在 `site.js` 编辑 `nav` 数组、对应页面渲染函数。

**资料来源：** 你上传的 2026-09-30 原始仓库快照。原稿中的联系邮箱 `maiIto:txo@soc.ku.dk` 为拼写错误，已纠正为 `mailto:txo@soc.ku.dk`。论文元数据与来源网站一致，未自行添加任何发表或职位信息。

**版权/致谢：** 保留原仓库 MIT LICENSE；主题设计灵感来自 Timothy Gebhard 的 Barks（MIT）。当前项目样式代码为独立实现，并非 Barks Hugo 主题的直接分发。

## 2026-10-13 样式调整

- 全站由绿色改为哥本哈根大学 UCPH 官方红色 `#901A1E`，包含导航、链接、按钮、favicon、SVG 研究动画。夜间模式延续红色系并增加对比度。
- 首页标题简化为 **Ting Xiao**，移除原标题上方的小字、职位副标题，以及肖像下方的姓名标签／长方形。保留个人简介和 News 正文。
- Research interests、Publications、Work in progress、Conferences 四页，按要求移除顶部的辅助说明、小标题、页面大标题和介绍段落，页面直接从对应资料开始；原研究设计和数据全部保留。
- CV 页面移除顶部辅助小字，保留 CV 标题和学术资料。
