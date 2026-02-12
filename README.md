# Bryonna's Crochet Nook

A small-business website for **Bryonna's Crochet Nook** — handmade crochet plushies, headbands, beanies, bracelets, keychains, and more.

## What this project is

- **Shop** — Browse plushies, wearables, and accessories with links to the Etsy shop.
- **About** — Story and photos for Bryonna’s Crochet Nook.
- **Custom orders** — A form so customers can request custom pieces; submissions are saved and (when configured) emailed to the shop.

**Live site:** [laney3503.github.io/BryonnasCrochetNook](https://laney3503.github.io/BryonnasCrochetNook/)

## Tech

- **Django** — Serves the pages, handles the custom-order form (saves to SQLite, optional email to Gmail), and provides an admin to view orders.
- **Static export** — The same site can be exported to plain HTML/CSS/JS in the `docs/` folder for GitHub Pages (no server required).

## Running locally

```bash
python3 -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env      # Edit .env: add BCN_EMAIL_APP_PASSWORD for order emails
python manage.py migrate
python manage.py createsuperuser
./serve
```

Open **http://127.0.0.1:8000** for the site and **http://127.0.0.1:8000/admin/** to view custom orders.

## Updating the live (GitHub Pages) site

After changing templates or static files, regenerate the static export and push:

```bash
source venv/bin/activate
python manage.py export_static
git add docs/
git commit -m "Update static site"
git push
```

GitHub Pages should be set to **Source: Deploy from a branch** → **main** → **/docs**.
