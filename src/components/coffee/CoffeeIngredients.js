import React from "react";

import {
  IngredientsSideBarContainer,
  IngredientSideBar,
  IngredientOption,
  IngredientHeader,
  IngredientCount
} from "./css/CoffeeStyles";

function CoffeeIngredients(props) {
  const ingredientCategories = ["coffees", "daries", "others"];

  return (
    <IngredientsSideBarContainer
      className={props.anyActive ? "one-active" : "none-active"}
    >
      {ingredientCategories.map(name => (
        <div className={name}>
          <IngredientHeader>{name}</IngredientHeader>
          <IngredientSideBar>
            {Object.keys(props.activeIngredients[name]).map((key, coff) => (
              <IngredientOption
                key={name + coff}
                onClick={() =>
                  props.activeIngredients[name][key].available > 0
                    ? props.addIngredient(
                        props.activeIngredients[name][key].name
                      )
                    : ""
                }
                className={
                  props.activeIngredients[name][key].active
                    ? "active-ing "
                    : " " + props.activeIngredients[name][key].available > 0
                    ? ""
                    : "inactive-ing"
                }
              >
                {props.activeIngredients[name][key].name}
                <IngredientCount>
                  {props.activeIngredients[name][key].available}
                </IngredientCount>
              </IngredientOption>
            ))}
          </IngredientSideBar>
        </div>
      ))}
    </IngredientsSideBarContainer>
  );
}

export default CoffeeIngredients;
