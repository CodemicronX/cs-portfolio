# Kasymov Aidar · Computer Science Portfolio

An English-language single-page portfolio for academic applications and technical collaboration. It covers competitions and coursework, the Avantgarde NASA Space Apps case study, independent projects, skills, academic plans, languages, and a certificate gallery.

## Local setup

Use Node.js 22.12 or newer on the Node 22 line and npm. GitHub Actions uses Node 22.

```sh
npm ci
npm run dev
```

Open the address printed by Vite, normally `http://localhost:5173/cs-portfolio/`.

| Command | Purpose |
| --- | --- |
| `npm run typecheck` | Check TypeScript |
| `npm run build` | Check TypeScript and build the static site into `dist/` |
| `npm run preview` | Serve the last production build, normally at `http://localhost:4173/cs-portfolio/` |

## Features and stack

- React, TypeScript, Vite, Tailwind CSS, Motion, and Lucide icons. Geist and Geist Mono are served from the build.
- Sticky section navigation, a keyboard-operable mobile menu, and a reduced-motion experience.
- Achievement filters and a featured case study. Local NASA Space Apps results and Global Nominee status are described separately.
- Certificate image fallbacks and a fullscreen viewer for uploaded images. The viewer supports Previous, Next, arrow keys, Escape, and zoom.
- GitHub Pages deployment through GitHub Actions, with static metadata, sitemap, and a social preview. The site runs in the browser.

## Project files

| Path | What to edit |
| --- | --- |
| `src/data/profile.ts` | Identity, navigation, highlights, academic journey, languages, and SJTU references |
| `src/data/achievements.ts` | Achievement details, categories, filters, and confirmed verification links |
| `src/data/projects.ts` | Avantgarde case study, screenshot, and independent projects |
| `src/data/skills.ts` | Tools, technologies, and experience labels |
| `src/data/certificates.ts` | Certificate records and gallery order |
| `src/components/` | Sections, header, and certificate viewer |
| `src/styles/site.css` | Palette, typography, layout, and motion |
| `public/certificates/` | Owner-supplied certificate photos |
| `public/projects/` | Future project screenshots |
| `public/images/` | Original orbital artwork and the social preview |
| `index.html` and `vite.config.ts` | Metadata, GitHub Pages base path, and sitemap generation |
| `.github/workflows/deploy.yml` | GitHub Pages build and deployment |

## Add certificate photos

Put the file in `public/certificates/` and add its path to the matching record in `src/data/certificates.ts`. For example, `image: 'certificates/owlypia-local-gold.webp'`. Missing files and records without an image display “Image coming soon.” The Global Nominee gallery entry can be added when its supporting document is available.

See [CERTIFICATES_GUIDE.md](CERTIFICATES_GUIDE.md) for examples and deployment steps.

## Deploy to GitHub Pages

1. Create a new empty public repository, [CodemicronX/cs-portfolio](https://github.com/new?name=cs-portfolio), with no generated README, license, or `.gitignore`.
2. From this project folder, make the initial commit and push it to the new repository.

   ```sh
   git add .
   git commit -m "Build computer science portfolio"
   git branch -M main
   git remote add origin https://github.com/CodemicronX/cs-portfolio.git
   git push -u origin main
   ```

3. In the new repository open **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions** as the source. If the initial push ran before you selected the source, open **Actions → Deploy portfolio to GitHub Pages → Run workflow** and select `main`.
4. Open the deployment URL shown by the successful workflow. The intended address is `https://codemicronx.github.io/cs-portfolio/`. Each subsequent push to `main` runs the workflow. GitHub supplies the workflow token automatically.

The workflow uses the Pages site URL to set the canonical URL, absolute preview image URLs, and the sitemap. A local build leaves the canonical and URL-dependent preview tags unset. GitHub Pages serves this project under `/cs-portfolio/`. If you use a different repository name, update `base` in `vite.config.ts` to match the published path.

## Customization and troubleshooting

- **Project screenshot** — Place a real screenshot in `public/projects/` and set `spaceApps.screenshot` to a value such as `projects/avantgarde.webp`. The preview shows a labeled placeholder until then.
- **Blank page or broken assets** — Use the `/cs-portfolio/` URL. Run `npm run build` again before previewing changed files. For items in `public/`, write file paths without the `public/` prefix.
- **Certificate still shows a placeholder** — Check the filename, extension, and capitalization. Confirm both the photo and TypeScript change were included in the last successful deployment.
- **Deployment fails** — Check the failed step in Actions. Ensure Pages is enabled with GitHub Actions as its source and that the deploy job can run from `main`.
- **Admissions wording** — The [official SJTU 2027 announcement](https://en.sjtu.edu.cn/study-sjtu/prospective/degree-programs/278) lists Computer Science and Technology in the English-taught Engineering Cluster. Update the portfolio when SJTU publishes the 2028 program and requirements.
