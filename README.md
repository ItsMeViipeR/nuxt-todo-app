# 📝 Nuxt Todo App

This project is a simple Todo application built with **Nuxt 3** and **Vue 3**.  
It serves as a learning project to explore the core concepts of Nuxt: components, routing, state management, local API handlers, and more.

## 🚀 Features

- ✅ Add and delete tasks
- 📝 Edit the title of a task
- ✔️ Mark tasks as completed or not
- 🔍 Filter tasks by status: all / active / completed
- 💾 Local persistence with Local Storage
- 🌙 Dark mode support
- ♻️ Refresh data using a local (mock) API
- 🧩 Modular architecture using custom composables

## 🛠️ Technologies Used

- [Nuxt 3](https://nuxt.com/)
- [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Local APIs using `/server/api`
- State management with `composables`

## 📚 Learning Objectives

- Understand how Nuxt 3 works
- Use file-based routing
- Create reusable composables (`useTodos`)
- Handle local API endpoints in `/server/api`
- Share reactive state using `useState`

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/ItsMeViipeR/nuxt-todo-app.git
cd nuxt-todo-app

# Install dependencies
pnpm install

# Start the development server
pnpm run dev
```

## 📦 Project Structure

```bash
.
├── pages/           # Nuxt pages (auto-routing)
├── components/      # Reusable UI components
├── composables/     # Logic composables
├── server/api/      # Mock API for todos
├── types/           # Type definitions (e.g., Todo)
├── assets/          # Static assets (CSS, images)
├── app.vue          # Main application entry
└── nuxt.config.ts   # Global Nuxt configuration
```

## 💡 Future Improvements

- Add authentication (e.g., Supabase, Auth.js)
- Sync with a real database (MongoDB, Supabase, etc.)
- Add unit and end-to-end tests (Vitest, Cypress)
- Deploy to Vercel or Netlify
- Add internationalization (i18n)

## 📄 License

Open-source project for educational purposes. Feel free to use and adapt it for learning.
