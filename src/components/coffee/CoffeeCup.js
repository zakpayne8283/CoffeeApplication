import React from "react";

import {
  CoffeeCupContainer,
  CoffeeCupCard,
  CoffeeCupTitle,
  CoffeeCupIcon,
  CoffeeCupIngredientsContainer,
  CoffeeCupIngredient,
  CoffeeCupIngredientTooltip
} from "./css/CoffeeStyles";

function CoffeCup(props) {
  return (
    <CoffeeCupContainer>
      {props.activeRecipes.map(rec => {
        return (
          <CoffeeCupCard>
            <CoffeeCupIcon>
              <CoffeeCupIngredientsContainer>
                {// Loop coffees, the daries, then others
                Object.keys(rec.ingredients.coffees).map((key, value) => (
                  <CoffeeCupIngredient
                    style={{ height: rec.ingredients.coffees[key].amount }}
                    className={rec.ingredients.coffees[key].name
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}
                  >
                    <CoffeeCupIngredientTooltip className="tooltip">
                      {rec.ingredients.coffees[key].name}
                    </CoffeeCupIngredientTooltip>
                  </CoffeeCupIngredient>
                ))}
                {// Loop coffees, the daries, then others
                Object.keys(rec.ingredients.daries).map((key, value) => (
                  <CoffeeCupIngredient
                    style={{ height: rec.ingredients.daries[key].amount }}
                    className={rec.ingredients.daries[key].name
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}
                  >
                    <CoffeeCupIngredientTooltip className="tooltip">
                      {rec.ingredients.daries[key].name}
                    </CoffeeCupIngredientTooltip>
                  </CoffeeCupIngredient>
                ))}
                {// Loop coffees, the daries, then others
                Object.keys(rec.ingredients.others).map((key, value) => (
                  <CoffeeCupIngredient
                    style={{ height: rec.ingredients.others[key].amount }}
                    className={rec.ingredients.others[key].name
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}
                  >
                    <CoffeeCupIngredientTooltip className="tooltip">
                      {rec.ingredients.others[key].name}
                    </CoffeeCupIngredientTooltip>
                  </CoffeeCupIngredient>
                ))}
              </CoffeeCupIngredientsContainer>
            </CoffeeCupIcon>
            <CoffeeCupTitle>{rec.name}</CoffeeCupTitle>
          </CoffeeCupCard>
        );
      })}
    </CoffeeCupContainer>
  );
}

export default CoffeCup;
