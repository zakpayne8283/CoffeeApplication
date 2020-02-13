import ingredients from "./ingredients";

const recipes = [
  {
    name: "Affogato",
    ingredients: {
      coffees: [{ name: "Espresso", amount: "50%" }],
      daries: [],
      others: [
        { name: "Ice Cream (Vanilla)", amount: "" },
        { name: "Empty", amount: "50%" }
      ]
    },
    ingredientsRaw: ["Espresso", "Ice Cream (Vanilla)"],
    defaultSize: "8",
    temperature: "Hot",
    description: "Water and espresso!"
  },
  {
    name: "Americano",
    ingredients: {
      coffees: [{ name: "Espresso", amount: "33%" }],
      daries: [],
      others: [{ name: "Water", amount: "66%" }]
    },
    ingredientsRaw: ["Espresso", "Water"],
    defaultSize: "8",
    temperature: "Hot",
    description: "Water and espresso!"
  },
  {
    name: "Antoccino",
    ingredients: {
      coffees: [{ name: "Espresso", amount: "50%" }],
      daries: [{ name: "Steamed Milk", amount: "50%" }],
      others: []
    },
    ingredientsRaw: ["Espresso", "Steamed Milk"],
    defaultSize: "8",
    temperature: "Hot",
    description: "Water and espresso!"
  },
  {
    name: "Bicerin",
    ingredients: {
      coffees: [{ name: "Espresso", amount: "33%" }],
      daries: [{ name: "Milk", amount: "33%" }],
      others: [{ name: "Hot Chocolate", amount: "33%" }]
    },
    ingredientsRaw: ["Espresso", "Milk", "Hot Chocolate"],
    defaultSize: "8",
    temperature: "Hot",
    description: "Water and espresso!"
  },
  {
    name: "Breve",
    ingredients: {
      coffees: [{ name: "Espresso", amount: "33%" }],
      daries: [{ name: "Steamed Half & Half", amount: "66%" }],
      others: []
    },
    ingredientsRaw: ["Espresso", "Steamed Half & Half"],
    defaultSize: "8",
    temperature: "Hot",
    description: "Just a plain old drip coffee."
  },
  {
    name: "Cafe Bombon",
    ingredients: {
      coffees: [{ name: "Espresso", amount: "50%" }],
      daries: [{ name: "Condensed Milk", amount: "50%" }],
      others: []
    },
    ingredientsRaw: ["Espresso", "Condensed Milk"],
    defaultSize: "8",
    temperature: "Hot",
    description: "Just a plain old drip coffee."
  },
  {
    name: "Cappucino",
    ingredients: {
      coffees: [{ name: "Espresso", amount: "33%" }],
      daries: [
        { name: "Milk", amount: "33%" },
        { name: "Milk Foam", amount: "33%" }
      ],
      others: []
    },
    ingredientsRaw: ["Espresso", "Milk", "Milk Foam"],
    defaultSize: "8",
    temperature: "Hot",
    description: "Just a plain old drip coffee."
  },
  {
    name: "Drip Coffee",
    ingredients: {
      coffees: [{ name: "Drip Coffee", amount: "100%" }],
      daries: [],
      others: []
    },
    ingredientsRaw: ["Drip Coffee"],
    defaultSize: "8",
    temperature: "Hot",
    description: "Just a plain old drip coffee."
  },
  {
    name: "Espresso",
    ingredients: {
      coffees: [{ name: "Espresso", amount: "100%" }],
      daries: [],
      others: []
    },
    ingredientsRaw: ["Espresso"],
    defaultSize: "8",
    temperature: "Hot",
    description: "Just a plain old drip coffee."
  },
  {
    name: "Flat White",
    ingredients: {
      coffees: [{ name: "Espresso", amount: "33%" }],
      daries: [{ name: "Steamed Milk", amount: "66%" }],
      others: []
    },
    ingredientsRaw: ["Espresso", "Steamed Milk"],
    defaultSize: "8",
    temperature: "Hot",
    description: "Just a plain old drip coffee."
  },
  {
    name: "Latte",
    ingredients: {
      coffees: [{ name: "Espresso", amount: "66%" }],
      daries: [
        { name: "Steamed Milk", amount: "33%" },
        { name: "Milk Foam", amount: "1%" }
      ],
      others: []
    },
    ingredientsRaw: ["Espresso", "Steamed Milk", "Milk Foam"],
    defaultSize: "8",
    temperature: "Hot",
    description: "Americano, but stronger!"
  }
];

function recipeIncludesAllIngredients(recipeIngredients, activeIngredients) {
  for (var i = 0; i < activeIngredients.length; i++) {
    if (recipeIngredients.includes(activeIngredients[i]) === false)
      return false;
  }
  return true;
}

export function mapIngredient(ingredients, activeIngredients) {
  // console.log(activeIngredients);

  // Loop through each recipe and if it's a valid recipe then add it to the list
  let activeRecipes = recipes
    .map(rec => {
      if (recipeIncludesAllIngredients(rec.ingredientsRaw, activeIngredients)) {
        return rec;
      } else return null;
    })
    .filter(function(item) {
      return item !== null;
    });

  // console.log(activeRecipes);

  // Now that we have a list of all recipes,
  // we can loop through each ingredient, active and non active
  // and say "this ingredient is in {X} remaining recipes"
  for (let [key, value] of Object.entries(ingredients)) {
    for (let i = 0; i < value.length; i++) {
      // Now that we have each ingredient, find how many active recipes it's in!
      let count = 0;
      // console.log(activeRecipes);
      for (let j = 0; j < activeRecipes.length; j++) {
        // console.log(activeRecipes[j]);
        if (activeRecipes[j].ingredientsRaw.includes(value[i].name)) count++;
      }
      value[i].available = count;
    }
  }
  return { ingredients: ingredients, activeRecipes: activeRecipes };
}

export default recipes;
