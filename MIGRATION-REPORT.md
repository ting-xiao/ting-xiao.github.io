# Migration report

Source: `ting-xiao.github.io-main.zip` (revision f10d9f11, snapshot September 30, 2026)

- Hero introduction: copied from original site; research advisor links and university affiliation retained.
- Portrait: converted and cropped to optimized WebP; original image remains available in your separately uploaded source ZIP.
- News: 3 entries copied from original site's HTML (dates, italic paper titles and links retained).
- Research: 3 original descriptions and 3 animated SVG designs. Light and dark UCPH-red themed illustrations included.
- Research toolkit: 10 topics retained.
- Publications: 5 entries, links preserved.
- Working papers: 4 entries moved to separate Work in progress page.
- Conferences: 5 original entries moved to separate Conferences page.
- CV: original repository has *no CV PDF* and no publication-list PDF. CV page shows a verified academic overview and mailto request instead.
- Teaching and Collaborators: removed, including their styling/assets and navigation links.
- New navigation: Ting Xiao | Research interests | Publications | Work in progress | Conferences | CV
- Palette: warm white, charcoal and UCPH red for content links (neutral navigation in both themes). Dark-mode stylesheet supports manual toggle and persisted preference.
- Deployment: original GitHub Actions static.yml workflow retained, `.nojekyll` included.

For editing and deployment, see `README.md`.


2026-10-13: UCPH red redesign (#901A1E), dark-mode red accents, removal of introductory heading blocks from research, publications, working papers, and conferences; homepage title/portrait caption cleanup.

## Latest layout changes

- Removed the red navigation bar. The header now uses the page background and neutral text in both light and dark themes; navigation and brand use one uniform font size and the header is approximately 58px tall.
- The homepage uses two desktop columns: biography and the three original News items on the left; portrait, Copenhagen location, and six icon/text rows on the right.
- The five existing links from the original source were restored in a single vertical column: Personal website, Email, Google Scholar, ORCID, GitHub.
- Narrow screens stack the columns responsively; dark mode and the UCPH-red links within page content remain available.
