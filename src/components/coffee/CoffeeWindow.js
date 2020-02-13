import React from "react";

import CoffeeCup from "./CoffeeCup";
import CoffeeIngredients from "./CoffeeIngredients";

import ingredients from "../../data/ingredients";
import recipes, { mapIngredient } from "../../data/recipes";

class CoffeeWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIngredients: ingredients,
      anyActive: false,
      activeRecipes: recipes
    };

    this.addIngredient(null);

    this.addIngredient = this.addIngredient.bind(this);
  }

  addIngredient(ingredient) {
    let ingred = this.state.activeIngredients;

    // Pull a list of all active ingredients
    let activeItems = Object.entries(ingred)
      .map(item => {
        let activeItems = [];
        for (let i = 0; i < item[1].length; i++) {
          // Item is active and not clicked on
          if (item[1][i].active && ingredient !== item[1][i].name) {
            activeItems.push(item[1][i].name);
            // Item is active and was clicked
          } else if (item[1][i].active && ingredient === item[1][i].name) {
            item[1][i].active = false;
            // Item is clicked and not active
          } else if (!item[1][i].active && ingredient === item[1][i].name) {
            activeItems.push(item[1][i].name);
            item[1][i].active = true;
          }
        }
        return activeItems;
      })
      .flat();

    // Adjust the available number
    const { ingredients, activeRecipes } = mapIngredient(ingred, activeItems);

    // Set the state
    this.setState({
      activeIngredients: ingredients,
      anyActive: activeItems.length > 0 ? true : false,
      activeRecipes: activeRecipes
    });

    // console.log(ingred);
  }

  render() {
    return (
      <div className="coffee-window">
        <CoffeeIngredients
          addIngredient={this.addIngredient}
          activeIngredients={this.state.activeIngredients}
          anyActive={this.state.anyActive}
        />
        <CoffeeCup activeRecipes={this.state.activeRecipes} />
      </div>
    );
  }
}

export default CoffeeWindow;
