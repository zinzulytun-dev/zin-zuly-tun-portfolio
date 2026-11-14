# Zin Zuly Tun — Personal Portfolio

A responsive personal portfolio built with **HTML, CSS, and vanilla JavaScript**. No build tools or framework installation are required.

## Run locally in VS Code

1. Extract the ZIP file.
2. Open the `zin-zuly-tun-portfolio` folder in Visual Studio Code.
3. Open `index.html` in your browser.

Recommended: install the **Live Server** extension in VS Code, right-click `index.html`, and choose **Open with Live Server**.

## Personalize before publishing

Open `script.js` and update the following values inside `portfolioConfig`:

```js
const portfolioConfig = {
  email: "your.email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile",
  facebook: "https://www.facebook.com/your-profile"
};
```

Also review `index.html`:
- Add your actual email and social profile URLs.
- Add project GitHub repository links when you have them.
- Add screenshots of your real projects if you want to replace the decorative project banners.
- Update the instructor description with your actual subjects and responsibilities.
- Confirm the education wording and language-level labels are accurate.

The age is intentionally not displayed because it is usually unnecessary on a professional public portfolio.

## Publish using GitHub Pages

### 1. Create a GitHub repository
1. Sign in to GitHub.
2. Click **New repository**.
3. Name it `zin-zuly-tun-portfolio` (or another name you prefer).
4. Choose **Public**.
5. Create the repository.

### 2. Upload the website
You can upload through the GitHub website:
1. Open the new repository.
2. Choose **Add file → Upload files**.
3. Upload `index.html`, `style.css`, `script.js`, and `README.md` from this folder.
4. Click **Commit changes**.

Or use Git in the VS Code terminal from inside this folder:

```bash
git init
git add .
git commit -m "Create personal portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/zin-zuly-tun-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If Git asks you to sign in, complete the GitHub authentication prompt.

### 3. Enable GitHub Pages
1. Open your repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`.
5. Click **Save**.
6. Wait a few minutes. GitHub will show your public website address in the Pages section.

Your URL will look like:

`https://YOUR-USERNAME.github.io/zin-zuly-tun-portfolio/`

## Project files

- `index.html` — website structure and portfolio content
- `style.css` — layout, responsive styling, colors, and animations
- `script.js` — mobile navigation, theme switch, project filters, reveal animations, and contact links

## Notes

- This is a static website. It does not require a backend or database.
- The Google Fonts import requires an internet connection; the site still works with fallback fonts if unavailable.
- Do not publish passwords, private API keys, or personal information you do not want public.
