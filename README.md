# Ting Xiao — Academic Website

A complete, dependency-free academic website designed for GitHub Pages. It is
responsive, accessible, and works without a build step or external framework.

## Files

```text
.
├── index.html                 # All page content
├── styles.css                # Layout, colors, typography, responsive design
├── script.js                 # Theme switch, mobile menu, subtle animations
├── assets/
│   ├── Ting_Xiao_CV.pdf      # Downloadable CV
│   ├── Ting_Xiao_Publication_List.pdf
│   └── Ting_Xiao_Portrait.jpg # Replaceable portrait photograph
├── .nojekyll                 # Tells GitHub Pages to serve files directly
└── README.md                 # This guide
```

## Publish on GitHub Pages

### Option A — Personal homepage (recommended)

1. Sign in to GitHub and create a **public** repository named exactly:
   `YOUR-GITHUB-USERNAME.github.io`.
2. Upload **the contents of this folder** to the root of that repository. The
   file `index.html` must be at the repository root, not inside another folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main**, folder **/(root)**, and click **Save**.
6. After GitHub finishes deploying, visit:
   `https://YOUR-GITHUB-USERNAME.github.io/`.

### Option B — Project site

You can use any repository name. Follow steps 2–5 above. The address will be:
`https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/`.

All paths in this package are relative, so both options work.

## Edit the website

- **Text and sections:** edit `index.html`. Large comments mark the beginning of
  each section (Hero, Research, Publications, Background, Teaching, Contact).
- **Colors:** edit the variables at the top of `styles.css`. Changing
  `--accent` and `--accent-bright` updates most of the color system.
- **CV:** replace `assets/Ting_Xiao_CV.pdf` with a new PDF using the same file
  name. No HTML change is then required.
- **Publication list:** replace `assets/Ting_Xiao_Publication_List.pdf` the same
  way whenever that document is updated.
- **Portrait:** replace `assets/Ting_Xiao_Portrait.jpg` with your own vertical
  photograph using the same file name. A 4:5 image is ideal; the website crops
  other aspect ratios automatically. Keep the face near the upper center.
- **Add a publication:** copy one `<article class="publication">…</article>`
  block in `index.html`, paste it into the publication list, and edit its text.
- **Add Scholar, ORCID, or GitHub:** add links in the Contact section only after
  inserting the correct profile URLs.

## Preview before publishing

You can double-click `index.html` for a quick preview. For the most accurate
local preview, open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Custom domain (optional)

After buying a domain, enter it under **Settings → Pages → Custom domain**.
GitHub provides the DNS records you need. Do not add a `CNAME` file until the
domain is known.

## Notes

- No analytics or tracking are installed.
- No third-party fonts, scripts, or images are loaded.
- Light and dark themes are included.
- The layout supports phones, tablets, and desktops.
