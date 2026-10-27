<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Scroll reveals must be visible by default and only hidden while an active IntersectionObserver awaits entry; this prevents inaccessible content when animation setup is unavailable.
- In case studies, `hero` is optional in the CaseStudy type and is omitted whenever the full case-study board already opens with that same artwork, so a page never shows the same mockup twice.
- Case-study board images must come from their original full-resolution source (uploaded original, or the project's Behance gallery at its `source`/`fs` module); chat uploads are treated as previews until their resolution is checked, because a thumbnail rendered full-width is unreadable.
