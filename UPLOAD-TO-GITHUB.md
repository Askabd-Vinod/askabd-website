# Upload Complete Website to GitHub

## Your files are READY at:
`C:\Users\Vinod\OneDrive\.kiro\askabd-website\`

## Files to Upload (in order):

### Step 1: Upload HTML files (root level)
Go to: https://github.com/Askabd-Vinod/askabd-website/tree/develop

Click "Add file" → "Upload files" and drag these files:
- `index.html`
- `about.html`
- `services.html`
- `contact.html`
- `privacy.html`
- `terms.html`

Commit message: "Add all HTML pages"

### Step 2: Upload CSS files
Go to: https://github.com/Askabd-Vinod/askabd-website/tree/develop

Click "Add file" → "Create new file"
Type: `css/style.css` (this creates the css folder)
Paste the content from your local `css/style.css` file
Commit message: "Add style.css"

Repeat for:
- `css/home.css` 
- `css/pages.css`

### Step 3: Upload JS file
Click "Add file" → "Create new file"
Type: `js/main.js` (this creates the js folder)
Paste content from your local `js/main.js` file
Commit message: "Add main.js"

### Step 4: Upload Logo
Click "Add file" → "Create new file"
Type: `assets/logo.png` → BUT for images, use "Upload files" instead:
- First create folder by making a dummy file: `assets/.gitkeep`
- Then navigate to assets/ folder and upload your actual `logo.png`

## IMPORTANT NOTES:
- All uploads MUST go to the `develop` branch
- Make sure the branch dropdown says "develop" before uploading
- The logo file MUST be named exactly `logo.png` (lowercase)
- After uploading, your site will auto-deploy to:
  https://develop.askabd-website.pages.dev

## Alternative: Faster Method (Drag & Drop)
1. Go to https://github.com/Askabd-Vinod/askabd-website/tree/develop
2. Delete ALL existing files first (if any old ones exist)
3. Click "Add file" → "Upload files"
4. Open File Explorer to: C:\Users\Vinod\OneDrive\.kiro\askabd-website\
5. Select ALL files and folders (index.html, about.html, css/, js/, assets/)
6. Drag them into the GitHub upload area
7. Note: GitHub upload handles folders! Just drag everything at once.
8. Commit to `develop` branch

## File Structure (what should be on GitHub):
```
/
├── index.html
├── about.html
├── services.html
├── contact.html
├── privacy.html
├── terms.html
├── css/
│   ├── style.css
│   ├── home.css
│   └── pages.css
├── js/
│   └── main.js
└── assets/
    └── logo.png
```
