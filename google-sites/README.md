# Google Sites Migration Folder

This folder is now the central place for content migrated from the old Google Sites portfolio.

## Structure

- `content/projects/`
  - Live Markdown entries used by the Astro site.
- `original-export/`
  - Archived files exported or copied from the old Google Sites version, including HTML pages, images, and loose assets.

## How to update the live site

1. Edit or add project and research entries in `google-sites/content/projects/`.
2. Add image files to `public/google-sites/images/`.
3. Run `npm run build`.
4. Commit and push to GitHub.

## Migration workflow

When you bring over old Google Sites material:

- Put raw source files, screenshots, copied text, and HTML into `google-sites/original-export/`.
- Convert the parts you want live into clean Markdown files in `google-sites/content/projects/`.
- Keep image filenames stable where possible so existing references do not break.
