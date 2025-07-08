# 🎬 Movie App

A simple and beautiful movie management app built with **Next.js**, **Prisma**, and **ShadCN UI**.

---

## 🚀 Features

- ✅ Add new movies
- 📝 Edit and delete existing ones
- 🖼️ Upload image URLs for posters
- 🪞 Glassmorphic UI with modern animations
- 🎨 Clean, responsive layout with Tailwind + ShadCN

---

## 🛠 Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [Prisma ORM](https://prisma.io/)
- [ShadCN UI](https://ui.shadcn.dev/)
- [SQLite (dev) / PostgreSQL (prod)](https://railway.app/)
- [Vercel](https://vercel.com/) for deployment

---

## 📦 Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/Radhikaa-chauhan/Nextjs-MovieApp.git
cd Nextjs-MovieApp

# 2. Install dependencies
npm install

# 3. Setup environment
echo "DATABASE_URL=\"file:./prisma/app.db\"" > .env

# 4. Prepare database
npx prisma generate
npx prisma db push

# 5. Run the dev server
npm run dev

