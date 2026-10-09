# Pick Our Sunday

A one-page date picker: picnic & board games, or paint & sip with a shared playlist. Answers go to a Jotform form, so anyone can fill it out without an account.

## Put it online (GitHub Pages)
1. Upload `index.html` and `config.js` to a GitHub repository.
2. In the repo, go to **Settings → Pages**, set **Source** to "Deploy from a branch", pick `main` and `/ (root)`, and save.
3. The site appears at `https://<your-username>.github.io/<repo-name>/` after a minute or two.

## Connect Jotform
1. Make a Jotform form with four questions:
   - **Which date?** (single choice): `Picnic & board games`, `Paint & sip`
   - **Best time** (single choice): `Afternoon`, `Evening`
   - **Snack, game, or song** (short text)
   - **Anything else?** (long text)
2. Open `config.js` and paste in the form ID and each question's unique name (the comments there show where to find them).
3. Fill out the page once yourself and check that the answer shows up in Jotform's Submissions.

Choice text in Jotform must match the page exactly, or that answer arrives blank.
