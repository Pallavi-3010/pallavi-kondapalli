<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules
- Portfolio content lives in `src/data/portfolio.ts`; sections in `src/components/portfolio/` read from it — edit content there, not in components.
- Each nav section is its own route (`src/routes/<section>.tsx`, user wants separate pages); `/` shows only the hero. Navbar/Footer live in `__root.tsx`, and each route sets head() via `src/lib/seo.ts`.
- Contact form composes a mailto link via `src/lib/contact.ts` (no backend); it stays disabled when no email is configured so it never pretends to send.
- Keep the full navigation at widths of at least 1100px and use the collapsible menu below that; the brand and all section links need room without clipping. Use minmax(0,1fr) tracks and wrapping for long contact details to prevent mobile overflow.
