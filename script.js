/* ==========================================================================
   SMART FRIDGE RECIPE FINDER - SCRIPT.JS
   ========================================================================== */

// 1. Master List of Common Kitchen Ingredients
const pantryInventory = [
  // Dairy & Proteins
  "paneer", "egg", "milk", "curd (yogurt)", "butter", "cheese", "tofu",
  
  // Vegetables & Aromatics
  "onion", "tomato", "potato", "garlic", "ginger", "green chili", 
  "capsicum (bell pepper)", "carrot", "green peas", "spinach (palak)", 
  "cucumber", "sweet corn", "mushroom", "cabbage", "lemon", "coriander",
  
  // Grains, Breads & Staples
  "cooked rice", "bread", "besan (gram flour)", "maggi noodles", 
  "pasta", "rolled oats", "atta (wheat flour)", "poha (flattened rice)",
  
  // Legumes & Pulses (Dals)
  "yellow moong dal", "toor dal", "boiled chickpeas (chole)",
  
  // Pantry Essentials & Condiments
  "cooking oil", "soy sauce", "tomato ketchup", "mayonnaise", "honey", "peanuts"
];

// 2. Comprehensive Recipe Dataset
const recipes = [
  {
    name: "Classic Paneer Bhurji",
    ingredients: ["paneer", "onion", "tomato", "green chili", "butter"],
    steps: "Sauté onions, tomatoes, and chilies in butter. Crumble paneer into the pan and toss for 4-5 minutes."
  },
  {
    name: "Crispy Sweet Corn Chaat",
    ingredients: ["sweet corn", "butter", "onion", "tomato", "lemon", "coriander"],
    steps: "Boil or pan-sear sweet corn in butter. Toss with diced onions, tomatoes, fresh coriander, and lemon juice."
  },
  {
    name: "Besan Chilla (Gram Flour Pancake)",
    ingredients: ["besan (gram flour)", "onion", "tomato", "green chili", "coriander"],
    steps: "Whisk besan with water, finely chopped vegetables, and salt into a batter. Pour onto a greased pan and cook both sides until golden."
  },
  {
    name: "Garlic Butter Fried Rice",
    ingredients: ["cooked rice", "garlic", "butter", "onion", "soy sauce"],
    steps: "Sauté plenty of minced garlic and sliced onions in butter until golden. Add cold cooked rice and a splash of soy sauce, tossing on high heat."
  },
  {
    name: "Egg Fried Rice",
    ingredients: ["cooked rice", "egg", "onion", "garlic", "cooking oil", "soy sauce"],
    steps: "Scramble eggs in hot oil and set aside. Sauté garlic and onions, add rice and soy sauce, then fold in the scrambled eggs."
  },
  {
    name: "Masala Egg Scramble (Bhurji)",
    ingredients: ["egg", "onion", "tomato", "green chili", "butter", "coriander"],
    steps: "Sauté onions, tomatoes, and chilies in butter. Pour in beaten eggs and stir continuously until soft curds form. Garnish with coriander."
  },
  {
    name: "Veggie Masala Maggi",
    ingredients: ["maggi noodles", "onion", "tomato", "green peas", "butter"],
    steps: "Sauté onions, tomatoes, and peas in butter with the tastemaker. Add water, drop in noodle cakes, and simmer until cooked."
  },
  {
    name: "Homestyle Aloo Fry",
    ingredients: ["potato", "onion", "green chili", "cooking oil"],
    steps: "Dice potatoes small. Fry sliced onions and chilies in oil, add potatoes, cover, and roast on medium flame until crispy and tender."
  },
  {
    name: "Classic French Toast",
    ingredients: ["bread", "egg", "milk", "butter"],
    steps: "Whisk egg and a splash of milk together. Dip bread slices briefly into the batter and fry in butter until both sides are lightly browned."
  },
  {
    name: "Cheese Chili Toast",
    ingredients: ["bread", "cheese", "green chili", "capsicum (bell pepper)", "butter"],
    steps: "Butter bread slices, top with grated cheese, minced chilies, and capsicum. Toast on a covered tawa or in an oven until cheese melts."
  },
  {
    name: "Quick Curd Rice",
    ingredients: ["cooked rice", "curd (yogurt)", "green chili", "ginger", "cucumber"],
    steps: "Mash soft cooked rice, mix thoroughly with fresh curd, grated ginger, chopped chilies, diced cucumber, and a pinch of salt."
  },
  {
    name: "Kanda Poha",
    ingredients: ["poha (flattened rice)", "onion", "potato", "peanuts", "green chili", "lemon"],
    steps: "Rinse poha and drain. Fry peanuts and diced potatoes in oil until crisp, add onions and chilies, fold in poha, and finish with lemon."
  },
  {
    name: "Garlic Butter Sautéed Mushrooms",
    ingredients: ["mushroom", "garlic", "butter", "cooking oil"],
    steps: "Slice mushrooms. Heat butter and a drop of oil, sauté minced garlic, toss in mushrooms on high heat until browned and tender."
  },
  {
    name: "Boiled Chole Chaat",
    ingredients: ["boiled chickpeas (chole)", "onion", "tomato", "green chili", "lemon", "coriander"],
    steps: "Toss boiled chickpeas with chopped onions, tomatoes, green chilies, coriander, salt, and generous lemon juice."
  },
  {
    name: "Simple Dal Tadka",
    ingredients: ["yellow moong dal", "onion", "tomato", "garlic", "cooking oil"],
    steps: "Boil dal with water and salt until soft. In a separate pan, heat oil, fry garlic, onions, and tomatoes, then pour the tadka over the dal."
  },
  {
    name: "Creamy Tomato Garlic Pasta",
    ingredients: ["pasta", "tomato", "garlic", "cooking oil", "cheese"],
    steps: "Boil pasta. Sauté garlic in oil, add puréed or finely chopped tomatoes, cook down into a sauce, toss with pasta, and finish with grated cheese."
  },
  {
    name: "Sweet Corn & Capsicum Stir-Fry",
    ingredients: ["sweet corn", "capsicum (bell pepper)", "onion", "butter", "garlic"],
    steps: "Melt butter, sauté minced garlic and onions, add diced capsicum and corn, and stir-fry on high flame for 3-4 minutes to keep crunch."
  },
  {
    name: "Aloo Pyaz Paratha",
    ingredients: ["atta (wheat flour)", "potato", "onion", "green chili", "cooking oil"],
    steps: "Knead atta into dough. Mash boiled potatoes with finely minced onion, green chili, and salt. Stuff dough balls, roll flat, and roast with oil."
  },
  {
    name: "Stir-Fried Soy Cabbage & Carrot",
    ingredients: ["cabbage", "carrot", "garlic", "cooking oil", "soy sauce"],
    steps: "Shred cabbage and carrots. Heat oil, fry garlic, toss the vegetables on high heat for 3 minutes, and stir in soy sauce."
  },
  {
    name: "Savory Vegetable Oats",
    ingredients: ["rolled oats", "onion", "tomato", "green peas", "carrot", "cooking oil"],
    steps: "Sauté onions, tomatoes, carrots, and peas in oil. Add water and rolled oats, simmer for 4-5 minutes until thick and cooked."
  },
  {
    name: "Pan-Seared Crispy Tofu",
    ingredients: ["tofu", "garlic", "soy sauce", "cooking oil", "green chili"],
    steps: "Press and cube tofu. Pan-fry in oil until golden on all sides. Toss with minced garlic, chili, and a splash of soy sauce."
  },
  {
    name: "Cucumber Tomato Salad",
    ingredients: ["cucumber", "tomato", "onion", "lemon", "coriander"],
    steps: "Dice cucumber, tomatoes, and onions. Toss together with chopped coriander, salt, and freshly squeezed lemon juice."
  },
  {
    name: "Mayonnaise Veggie Sandwich",
    ingredients: ["bread", "mayonnaise", "cucumber", "tomato", "capsicum (bell pepper)"],
    steps: "Finely chop cucumber, tomato, and capsicum. Mix with mayonnaise and salt, spread between bread slices, and serve fresh or toasted."
  },
  {
    name: "Aloo Palak Sabzi",
    ingredients: ["spinach (palak)", "potato", "onion", "garlic", "cooking oil"],
    steps: "Fry cubed potatoes in oil until cooked. Sauté garlic and onions, add washed chopped spinach, fold in the cooked potatoes, and cook until dry."
  },
  {
    name: "Egg Drop Noodle Soup",
    ingredients: ["maggi noodles", "egg", "garlic", "green chili", "soy sauce"],
    steps: "Boil water with tastemaker, garlic, chili, and noodles. In the final minute, slowly stream in a beaten egg while gently stirring the broth."
  }
];

// 3. Render Pantry Checkboxes onto the Webpage
function initializePantryUI() {
  const container = document.getElementById("ingredientList");
  if (!container) return;

  container.innerHTML = "";

  pantryInventory.forEach((item, index) => {
    const itemWrapper = document.createElement("div");
    itemWrapper.className = "ingredient-item";

    const inputId = `item-${index}`;

    itemWrapper.innerHTML = `
      <input type="checkbox" id="${inputId}" value="${item}">
      <label for="${inputId}">${item.charAt(0).toUpperCase() + item.slice(1)}</label>
    `;

    container.appendChild(itemWrapper);
  });
}

// 4. Main Recipe Matcher Function (Attached directly to window so onclick works 100%)
window.findRecipes = function () {
  const checkedBoxes = document.querySelectorAll("#ingredientList input:checked");
  const userIngredients = Array.from(checkedBoxes).map(cb => cb.value.toLowerCase());
  
  const resultsArea = document.getElementById("resultsArea");
  if (!resultsArea) return;
  resultsArea.innerHTML = "";

  // Check if at least 1 ingredient was selected
  if (userIngredients.length === 0) {
    resultsArea.innerHTML = `
      <div style="text-align: center; padding: 20px; color: #c0392b; font-weight: bold; background: #fdf2f2; border-radius: 6px; margin-top: 15px;">
        ⚠️ Please check at least one ingredient you have available!
      </div>
    `;
    return;
  }

  // Calculate scores for all recipes
  const evaluatedRecipes = recipes.map(recipe => {
    const matched = recipe.ingredients.filter(ing => userIngredients.includes(ing.toLowerCase()));
    const missing = recipe.ingredients.filter(ing => !userIngredients.includes(ing.toLowerCase()));
    const matchPercentage = Math.round((matched.length / recipe.ingredients.length) * 100);

    return {
      name: recipe.name,
      steps: recipe.steps,
      ingredients: recipe.ingredients,
      matched: matched,
      missing: missing,
      matchPercentage: matchPercentage
    };
  });

  // Filter out recipes with 0 matching ingredients & sort highest match first
  const sortedMatches = evaluatedRecipes
    .filter(r => r.matched.length > 0)
    .sort((a, b) => b.matchPercentage - a.matchPercentage);

  if (sortedMatches.length === 0) {
    resultsArea.innerHTML = `
      <div style="text-align: center; padding: 20px; color: #7f8c8d; background: #fff; border-radius: 6px; margin-top: 15px;">
        No recipes matched those specific items. Try selecting a few more common ingredients!
      </div>
    `;
    return;
  }

  // Render the recipe cards
  sortedMatches.forEach(recipe => {
    const isFullMatch = recipe.missing.length === 0;
    const card = document.createElement("div");
    card.className = isFullMatch ? "recipe-card perfect-match" : "recipe-card partial-match";
    const badgeClass = isFullMatch ? "badge-green" : "badge-orange";
    const badgeText = isFullMatch ? "Ready to Cook (100% Match)" : `${recipe.matchPercentage}% Match`;

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <h3 style="margin: 0; color: #2c3e50;">${recipe.name}</h3>
        <span class="badge ${badgeClass}">${badgeText}</span>
      </div>

      <p style="margin: 6px 0; font-size: 14px;">
        <span class="tag-have">✓ You have:</span> ${recipe.matched.join(", ")}
      </p>

      ${
        isFullMatch 
          ? `<p style="margin: 6px 0; font-size: 14px; color: #27ae60; font-weight: bold;">
               ✓ All ingredients available!
             </p>` 
          : `<p style="margin: 6px 0; font-size: 14px;">
               <span class="tag-missing">✕ Missing:</span> ${recipe.missing.join(", ")}
             </p>`
      }

      <div style="background-color: #f1f2f6; border-radius: 4px; padding: 10px; margin-top: 10px; font-size: 14px; line-height: 1.5;">
        <strong>Instructions:</strong> ${recipe.steps}
      </div>
    `;

    resultsArea.appendChild(card);
  });
};

// 5. Initialize when the DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePantryUI);
} else {
  initializePantryUI();
}
