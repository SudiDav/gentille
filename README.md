# Gentille UMUHOZAWASE — Professional Portfolio

A personal portfolio website built for the **ALX Professional Foundations** program. Showcasing a journey in fashion design, creativity, and professional growth.

🔗 **Live Demo**: [https://sudidav.github.io/gentille](https://sudidav.github.io/gentille)

---

## ✨ Features

- **Home** — Introduction with quick navigation to all sections
- **My Bio** — Background, skills, mission, and interests
- **Portfolio** — Projects, team collaborations, and skill highlights
- **Elevator Pitch** — Written pitch preview with structure breakdown

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Routing | [React Router v7](https://reactrouter.com/) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (with npm)

### Installation

```bash
# Clone the repository
git clone https://github.com/SudiDav/gentille.git
cd gentille

# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server will start at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

---

## 📁 Project Structure

```
gentille/
├── .github/workflows/    # GitHub Actions deployment workflow
├── public/
│   └── CNAME             # Custom domain configuration
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer, Layout wrapper
│   │   └── ui/           # shadcn/ui components
│   ├── pages/
│   │   ├── Home.tsx      # Landing page
│   │   ├── Bio.tsx       # About me & skills
│   │   ├── Portfolio.tsx # Projects & work
│   │   └── ElevatorPitch.tsx # Pitch preview
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Route definitions
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles & Tailwind
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🌐 Deploy to GitHub Pages with Custom Domain

This project is set up for **automatic deployment to GitHub Pages** using GitHub Actions.

### Step 1 — Configure GitHub Pages

1. Go to your repository on GitHub: `https://github.com/SudiDav/gentille`
2. Navigate to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**

### Step 2 — Add Your Custom Domain

1. In the same **Settings → Pages** section, enter your custom domain (e.g. `gentille.dev`) under **Custom domain**
2. Click **Save**

3. Update the `public/CNAME` file in this repo with your domain:

```
gentille.dev
```

> Replace `gentille.dev` with your actual domain.

### Step 3 — Configure DNS

Add these DNS records with your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `sudidav.github.io` |

> If you are using an **apex domain** (e.g. `gentille.dev`), use the A records above.  
> If you are using a **www subdomain** (e.g. `www.gentille.dev`), the CNAME record is sufficient.

### Step 4 — Deploy

Push the updated `CNAME` file to the `main` branch:

```bash
git add public/CNAME
git commit -m "Add custom domain"
git push origin main
```

GitHub Actions will automatically build and deploy your site. You can track progress under the **Actions** tab in your repository.

### Enforce HTTPS

Once DNS propagates and GitHub validates your domain, check **Enforce HTTPS** in the Pages settings.

---

## 📝 License

This project is for educational purposes as part of the ALX Africa Professional Foundations curriculum.

---

Built with ❤️ by **Gentille UMUHOZAWASE**
