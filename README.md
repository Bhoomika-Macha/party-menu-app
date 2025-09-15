# 🍽️ Party Menu Selection App

A ReactJS web application built as part of **TheChefkart Assignment**.  
The app allows users to browse categorized dishes, filter by Veg/Non-Veg, search by name, view ingredients in a modal, and add/remove items to create a personalized party menu.

---

## 🚀 Live Demo
👉 [party-menu-app-lilac.vercel.app](https://party-menu-app-lilac.vercel.app/)

---

## 📌 Features

- **Categorized Dishes**  
  - Tabs for **Starters**, **Main Course**, **Desserts**, and **Sides**  
  - Each tab displays dishes only from that category  

- **Filters & Search**  
  - Search bar to find dishes by name  
  - Veg/Non-Veg toggle with Swiggy/Zomato style icons  

- **Dish Cards**  
  - Dish name, description (with *Read More / Read Less*), and image  
  - Add / Remove button to manage selections  
  - Ingredient button to view detailed ingredients in a modal  

- **Ingredient Modal**  
  - Displays dish image, category, description, and ingredients  
  - Close button for easy navigation  

- **Selection Summary**  
  - Count of dishes selected per category  
  - Footer with total dishes selected and a Continue button  

---

## 🛠️ Tech Stack

- **Frontend**: React (Functional Components, Hooks, JSX, Conditional Rendering, .map)  
- **Styling**: CSS (Flexbox, custom styles for Veg/Non-Veg icons, modal, tabs)  
- **Deployment**: Vercel  
- **Version Control**: Git & GitHub  

---

## ⚙️ Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/Bhoomika-Macha/party-menu-app.git
   cd party-menu-app

2. **Install dependencies**

    ```bash
    npm install
    Run locally

    ```bash
    npm start
    Opens at http://localhost:3000

3. **Build for production**

    ```bash
    npm run build
Outputs static files to build/ (used for deployment on Vercel).

## 📖 How It Works
User clicks a category tab → App filters dishes by category.

User types in search bar → Filters by dish name.

User toggles Veg Only → Shows only vegetarian dishes.

User clicks Add + → Dish is added to selection (count updates).

User clicks Remove → Dish is removed from selection.

User clicks 🍲 Ingredient → Modal opens with dish details.

User clicks Close → Modal closes and returns to menu.

Footer shows total selected dishes + Continue button.

## ✅ Deliverables
Dish listing screen with category tabs

Search and Veg/Non-Veg filters

Add/Remove functionality

Summary of selected items

Ingredient detail modal

Public GitHub repository

Deployed app on Vercel

## 🔮 Future Improvements
Price and total cost calculation

Save selections to local storage or backend

Mobile responsive UI

User login and menu persistence


