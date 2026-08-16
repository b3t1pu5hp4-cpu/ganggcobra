# Gang Cobra — how to put this live

You do NOT need to run any code yourself. Follow these steps exactly.

## Step 1 — Put this folder on GitHub (no coding needed)

1. Go to github.com and sign up free (if you don't have an account).
2. Click the **+** in the top right → **New repository**.
3. Name it `gang-cobra`, leave everything else default, click **Create repository**.
4. On the next page, click **uploading an existing file**.
5. Drag this ENTIRE folder's contents into the upload box (all files, including hidden ones if your file manager shows them — `.gitignore` and `netlify.toml` included).
6. Scroll down, click **Commit changes**.

## Step 2 — Connect it to Netlify

1. Go to netlify.com and log in.
2. Click **Add new site** → **Import an existing project**.
3. Choose **GitHub**, authorize it if asked, then pick the `gang-cobra` repo you just made.
4. Netlify will auto-detect the build settings (from the `netlify.toml` file already in the folder) — you don't need to change anything. Click **Deploy**.
5. Wait 1–2 minutes. Netlify will give you a live link like `https://random-name-123.netlify.app` — that's your working website.

## Step 3 (optional) — Rename the link

In the Netlify dashboard for your site: **Site configuration → Change site name** → pick something like `gangcobra` → your link becomes `https://gangcobra.netlify.app`.

## That's it

Share that link with the group. Everyone who opens it on their phone gets the same lobby, chat, photobooth, and games, kept in sync automatically — no accounts, no extra setup on their end.

If anything fails during deploy, copy the error text from Netlify's "Deploys" tab and send it back for help fixing it.
