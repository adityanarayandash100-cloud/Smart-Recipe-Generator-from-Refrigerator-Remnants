 https://adityanarayandash100-cloud.github.io/Smart-Recipe-Generator-from-Refrigerator-Remnants/


# 🍳 Smart Fridge Recipe Finder

> Zero-dependency, client-side web application that matches leftover ingredients in your kitchen against everyday homestyle recipes to reduce food waste.

![Status](https://img.shields.io/badge/status-active-success.svg)
![Tech Stack](https://img.shields.io/badge/tech-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue)
![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📌 Overview

**Smart Fridge Recipe Finder** is built to solve everyday kitchen friction: standing in front of the refrigerator with mismatched items and no clear idea of what to cook. 

Instead of relying on heavy third-party APIs or server setups, it runs on an efficient, pure JavaScript set-intersection algorithm directly in the user's browser. Everything—structure, layout styling, dataset, and logic—lives inside a single, zero-dependency `index.html` file.

---

## ✨ Features

- **⚡ Instant In-Memory Matching:** Evaluates 25+ built-in recipes against pantry selections in real time.
- **📊 Match Compatibility Scoring:** Ranks recipes by compatibility percentage, distinguishing between 100% full matches and partial options.
- **🔍 Real-Time Ingredient Search:** Live keyword filtering across 35+ kitchen essentials (dairy, aromatics, grains, and pantry staples).
- **🛒 Clear Ingredient Breakdown:** Displays distinct visual cues for items already on hand versus missing ingredients needed from the store.
- **⚡ Bulk Controls:** One-click **Select All** and **Clear** utility buttons for rapid pantry resets.
- **📱 Fully Responsive:** Clean, mobile-friendly interface designed for touchscreens and kitchen counters.
- **🚀 Single-File Architecture:** Zero bundlers, zero external script dependencies, and zero build steps required.

---

## 🧠 How the Matching Algorithm Works

The application avoids complex AI models in favor of a deterministic, transparent formula:

$$\text{Match Percentage} = \left( \frac{\vert{}\text{User Ingredients} \cap \text{Recipe Ingredients}\vert{}}{\vert{}\text{Recipe Ingredients}\vert{}} \right) \times 100$$

1. **Extraction:** Selected checkboxes are converted into a normalized, lowercase array.
2. **Intersection (`.filter()`):** The engine computes two distinct lists for each recipe:
   - **`matched`**: Ingredients available in the pantry.
   - **`missing`**: Ingredients required by the recipe but unselected.
3. **Sorting:** Recipes with at least one matching item are sorted descending by score so that **100% "Ready to Cook"** meals appear at the top.

---

## 📂 Project Structure

```text
smart-fridge-recipe-finder/
├── index.html       # Combined markup, CSS styling, dataset, and matching engine
└── README.md        # Documentation and usage guide
