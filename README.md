🍳 Smart Fridge Recipe Finder

Transform pantry remnants and leftover ingredients into everyday meals — built with pure, beginner-friendly HTML, CSS, and Vanilla JavaScript with zero external dependencies and no AI APIs required.

📌 Project Overview

Smart Fridge Recipe Finder is a client-side web application designed to solve household food waste and end-of-day cooking fatigue. Instead of guessing what to cook with leftover ingredients, users select or search the items currently available in their kitchen.

The application runs a lightweight client-side set intersection algorithm to score, rank, and display recipes from highest match percentage to lowest, highlighting missing ingredients for quick grocery planning.

✨ Features

Dynamic Inventory Grid: Categorized selection across dairy, vegetables, staples, dals, and condiments.

Set-Intersection Matching Engine: Calculates exact ingredient overlap percentages:


$$\text{Match Percentage} = \left(\frac{\vert{}\text{User Ingredients} \cap \text{Recipe Ingredients}\vert{}}{\vert{}\text{Recipe Ingredients}\vert{}}\right) \times 100$$

Instant Search Filter: Real-time search to quickly pinpoint ingredients across 35+ inventory items without endless scrolling.

Color-Coded Status Cards:

🟢 100% Match: "Ready to Cook" (Zero extra groceries needed).

🟠 Partial Match: Clearly lists what you have versus what you still need to purchase.

Select All / Clear All Controls: Fast one-click pantry state resets.

Dietary Preferences Filter: Sort results seamlessly by Vegetarian, Non-Vegetarian, or Vegan.

Persistent State: Remembers checked ingredients across page reloads using browser localStorage.

Zero Build Tools: No Node.js, Webpack, or framework installations required. Double-click and run in any browser.

🛠️ Tech Stack

Component

Technology

Purpose

Structure

HTML5

Accessible, semantic document layout

Styling

CSS3

Responsive grid layout, status cards, and badge indicators

Logic

Vanilla JavaScript (ES6+)

DOM rendering, real-time filtering, array math, and storage

📂 Project Structure

smart-fridge-recipe-finder/
├── index.html       # Application interface and input controls
├── styles.css       # Clean, modern responsive styling (optional if separate)
├── script.js        # Recipe dataset and matching algorithm
└── README.md        # Documentation and setup guide


🚀 Getting Started

1. Clone or Download the Repository

git clone https://github.com/your-username/smart-fridge-recipe-finder.git
cd smart-fridge-recipe-finder


2. Run the Application

No server or build setup is required. Open index.html directly:

Windows: Double-click index.html or open via Microsoft Edge / Chrome.

macOS: Double-click or run open index.html in Terminal.

Linux: Run xdg-open index.html.

(Alternatively, use the VS Code extension Live Server to preview with auto-reload.)

💡 How the Matching Logic Works

State Gathering: Collects all checked items into an array of lowercase strings:

const userIngredients = ["paneer", "onion", "butter"];


Intersection Evaluation: For each recipe object, JavaScript compares arrays:

const matched = recipe.ingredients.filter(item => userIngredients.includes(item));
const missing = recipe.ingredients.filter(item => !userIngredients.includes(item));
const matchScore = Math.round((matched.length / recipe.ingredients.length) * 100);


Sorting & Rendering: Sorts recipes descending by matchScore and injects styled HTML cards dynamically into #resultsArea.

📖 Adding New Recipes

To expand the cookbook, open script.js and append an object to the recipes array:

{
  name: "Your Custom Dish Name",
  category: "Veg", // or "Non-Veg"
  ingredients: ["ingredient1", "ingredient2", "ingredient3"],
  steps: "Brief 1-2 sentence preparation instruction."
}


🤝 Contributing

Contributions are welcome! If you would like to contribute:

Fork the project.

Create your feature branch (git checkout -b feature/NewRecipes).

Commit your changes (git commit -m 'Add 5 breakfast recipes').

Push to the branch (git push origin feature/NewRecipes).

Open a Pull Request.

📄 License

This project is open-source and available under the MIT License.
