# Portfolio maintenance

## Publishing rules

- Treat ChatGPT and Codex memories only as candidate context.
- Never publish a fact based solely on memory.
- Publish only information supported by `PORTFOLIO_SOURCE.md`, an explicitly
  approved message in the portfolio task, or a verifiable public source.
- Never invent dates, metrics, job titles, qualifications, outcomes, clients,
  project status, publications, or technologies.
- Never expose private repository URLs, internal files, client information,
  credentials, personal addresses, or unpublished research.
- Preserve the public/private boundaries recorded in `PORTFOLIO_SOURCE.md`.
- Ask for clarification when sources conflict.
- If no verified update exists, make no changes.

## Editable portfolio areas

- Personal information: `src/lib/about.ts`
- Repository summaries: `src/lib/githubMaterials.ts`
- Project pages: `google-sites/content/projects/*.md`
- Images: `public/google-sites/images/`

Do not edit unrelated files merely to refresh portfolio content.

## Verification and publishing

- Read `PORTFOLIO_SOURCE.md` before proposing or applying a public update.
- Review changed text for unsupported claims and private information.
- Run `npm run build` before committing.
- Never commit directly to `main`.
- Use a `codex/portfolio-refresh-*` branch.
- Push the branch and open a draft pull request.
- In the pull request, list every public-facing change and its supporting
  source.
- Never merge a pull request without the user's approval.
- Do not modify deployment workflows unless explicitly requested.
