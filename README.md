# Bryonna's Crochet Nook

Full-stack **Django** app: static-style pages, **Custom Orders** (saved to the database and emailed to **bcn.shop24@gmail.com**), and **Django admin** to view and manage orders.

## Get Django running (first time)

In Terminal, from the project folder:

```bash
cd /Users/laney/Desktop/BryonnasCrochetNook
python3 -m venv venv
source venv/bin/activate
./install
```

If `./install` fails with an **SSL certificate error**, run this instead:

```bash
python3 -m pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org -r requirements.txt
```

Then set up the database and admin user:

```bash
python manage.py migrate
python manage.py createsuperuser
```

Then start the server:

```bash
./serve
```

Open **http://127.0.0.1:8000** for the site and **http://127.0.0.1:8000/admin/** to log in and view orders.

## Run locally (after setup)

1. **Activate the virtual environment** (if not already active):
   ```bash
   source venv/bin/activate   # Windows: venv\Scripts\activate
   ```

3. **Configure** (copy `.env.example` to `.env`):
   - **Email**: set `BCN_EMAIL_APP_PASSWORD` (Gmail [App Password](https://myaccount.google.com/apppasswords); 2-Step Verification must be on). Orders are always saved to the database; email is sent only when this is set.
   - Optionally set `SECRET_KEY`, `DEBUG=1`, `DATABASE_PATH`, `BCN_EMAIL_FROM`. Do not commit `.env`.

4. **Apply migrations and create an admin user**:
   ```bash
   python manage.py migrate
   python manage.py createsuperuser
   ```
   Use the superuser to log in at **http://127.0.0.1:8000/admin/** and view Custom Orders.

5. **Start the server**:
   ```bash
   ./serve
   ```
   Or: `python manage.py runserver 8000`

6. Open **http://127.0.0.1:8000** in your browser. Use **Custom Order** in the nav to submit a request; it is stored in the database and, if email is configured, sent to bcn.shop24@gmail.com.

## Run as a production-style server

```bash
gunicorn config.wsgi:application -w 2 -b 0.0.0.0:8000
```

Set `ALLOWED_HOSTS` and `SECRET_KEY` in the environment or in settings; do not use `DEBUG=1` in production.

## If the site isn’t opening / Connection failed

1. **Start the server first** (leave the terminal open):
   - Open **Terminal**, then:
     ```bash
     cd /Users/laney/Desktop/BryonnasCrochetNook
     ./serve
     ```
   - You should see: `Starting Bryonna's Crochet Nook (Django) at http://127.0.0.1:8000`. Do not close this window.
   - If you see **"Django is not installed"**, the script will try Flask on port **5000** instead. Install Django with `pip install -r requirements.txt`, then run `./serve` again for port 8000.

2. **Then** open your browser and go to:
   - **Site:** http://127.0.0.1:8000 or http://localhost:8000  
   - **Admin:** http://127.0.0.1:8000/admin/  
   - If you’re using the Flask fallback (port 5000): http://127.0.0.1:5000 (no Django admin).

3. **If you still get "connection failed" or "refused":**
   - Make sure the terminal where you ran `./serve` is still open and shows no error.
   - Try http://localhost:8000 instead of 127.0.0.1 (or the other way around).
   - Try a different browser or a private/incognito window.
   - If port 8000 is in use: `python manage.py runserver 8001` then open http://127.0.0.1:8001

2. **Check the terminal**
   - You should see: `Starting development server at http://127.0.0.1:8000/`.
   - If you see **“Django is not installed”**: run `pip install -r requirements.txt` (with venv activated).
   - If port 8000 is in use: `python manage.py runserver 8001` and open http://127.0.0.1:8001.

3. **Use the right URL**
   - In the browser go to **http://127.0.0.1:8000** or **http://localhost:8000** (not `file:///...`).

## Project layout (Django)

- **Backend**: Django project `config/` and app `shop/`. Serves pages from `templates/`, static files from `static/`, and `POST /api/custom-order` (saves to DB + optional email). Database: SQLite by default (`db.sqlite3`).
- **Admin**: **http://127.0.0.1:8000/admin/** — log in with the superuser to view and manage Custom Orders.
- **Templates**: `templates/index.html`, `Shop.html`, `customorders.html`, `aboutme.html`.
- **Static**: `static/style.css`, `static/crochet.js`, `static/img/`, `static/js/`.
- **Config**: `.env` (from `.env.example`) for `BCN_EMAIL_APP_PASSWORD`, `SECRET_KEY`, optional `DEBUG`, `DATABASE_PATH`, `BCN_EMAIL_FROM`.

## Custom order flow

1. User fills the form on the Custom Orders page.
2. JavaScript sends the data to `/api/custom-order`.
3. The server validates input, **saves the order to the database**, and, if email is configured, sends an email to bcn.shop24@gmail.com (Reply-To set to the customer’s email).
4. View and manage orders in **Django admin** at `/admin/` (Custom Orders).

---

The previous Flask app is saved as `app.py` for reference; the site now runs on Django.
