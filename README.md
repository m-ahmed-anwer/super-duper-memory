# 🍲 Recipe Tracker App

A sleek, modern app to manage and organize your culinary masterpieces. Built with the MERN stack!

## 🚀 Project Overview

The Recipe Tracker App is your digital cookbook, letting you:

- View recipes in an elegant card format.
- Add, Edit, Delete, and Refresh recipes with ease.

This app simplifies your cooking process, saving time while keeping your favorite recipes just a click away.

## 🧪 Key Features

**🏠 Homepage**

- View all recipes in an organized card layout.
- Use quick Edit and Delete buttons for each recipe.

**➕ Add New Recipes**

- Enter recipe name, ingredients, and description using a user-friendly form.
- Save new recipes instantly with a clean interface.

**📝 Edit Recipes**

- Update recipe details via prefilled forms.

**🗑️ Delete Recipes**

- Display a confirmation alert before deleting any recipe.

**🔄 Manual Refresh**

- Refresh your app effortlessly with a button in the navigation bar.

## 💻 Tech Stack

This project is powered by the MERN stack for maximum efficiency:

- 🌐 Frontend: React.js
- ⚙️ Backend: Node.js & Express.js (TypeScript) – Redis is used for caching, so you won’t have to wait after a reload 😉
- 🗄️ Database: MongoDB Atlas
- 🎨 Styling: Tailwind

## 📦 Getting Started

To get started with this project, clone the repository and install the necessary dependencies:

```bash
  git clone https://github.com/m-ahmed-anwer/super-duper-memory
  cd super-duper-memory
```

**🔧 Backend**

**Running Backend Locally**

You can run the server applicaion locally using the following command (Note: since Redis is used, the Redis server also needs to be started):

```bash
brew install redis
redis-server
```

```bash
cd Backend
npm install
npm start
```

**Running Backend with Docker**

To run the server applicaion in a Docker container, use the following command:

```bash
cd Backend
docker build -t server-app .
docker run -p 3001:3001 -p 6379:6379 server-app
```
Just a heads-up! If your Frontend port changes, make sure to add it to the list of allowed origins in `src/app.ts`:

```bash
const allowedOrigins = [
  "https://frontend-706975379343.us-central1.run.app",
  "http://localhost:5173",
  "Localhost url with your port number",
]
```


**🖥️ Frontend**

**Running Frontend Locally**

You can run the front-end applicaion locally using the following command:

```bash
cd Frontend
npm install
npm run dev
```

**Running Frontend with Docker**

You can run the front-end applicaion in a Docker container, use the following command:

```bash
cd Frontend
docker build . -t recipe-app
docker run --rm recipe-app
```

## 🌐 Live Demo

🚀 Check out the live version of the frontend app here:
[Recipe Tracker App](https://frontend-706975379343.us-central1.run.app/)

⚠️ Due to time constraints, the server app with Redis hasn't been deployed. Please run it manually to test the full functionality.

## ✉️ Feedback

We'd love to hear your thoughts! If you have any questions or suggestions, feel free to reach out:

##### 📧 Email: [ahmedanwer0094@gmail.com](mailto:ahmedanwer0094@gmail.com)
