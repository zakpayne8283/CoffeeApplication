import styled from "styled-components";

export const IngredientsSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 20%;

  background-color: #dbc1ac;

  border-right: 2px solid #38220f;

  position: fixed;
  top: 0;
  left: 0;

  &.one-active .inactive-ing {
    opacity: 50%;
  }
`;

export const IngredientHeader = styled.h3`
  margin: 0;
  padding: 0.5em;
  background-color: #38220f;
  color: white;
  text-transform: capitalize;
`;

export const IngredientSideBar = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const IngredientOption = styled.li`
  /* margin: 0.25em 0.5em; */
  padding: 0.5em;

  cursor: pointer;

  transition: all ease 0.15s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #634832;
    color: white;
  }

  &.active-ing {
    font-weight: bold;
  }

  &.inactive-ing {
    cursor: default;
  }
`;

export const IngredientCount = styled.span`
  padding: 0.25em;
  font-size: 75%;
  color: white;
  border-radius: 100%;
  background-color: #38220f;
  height: calc(24px - 1em);
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(24px - 1em);
`;

export const CoffeeCupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
`;

export const CoffeeCupCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: calc(33% - 3em);
  margin: 0.5em;
  box-shadow: 0 0 9px 2px black;
  padding: 1em;
  height: 200px;
`;

export const CoffeeCupIcon = styled.div`
  height: 100px;
  width: 150px;
  margin-top: 2em;
`;

export const CoffeeCupTitle = styled.h3`
  font-family: "Indie Flower", cursive;
  font-size: 1.5em;
`;

export const CoffeeCupIngredientsContainer = styled.div`
  height: 99%;
  margin-top: 1%;
  border-radius: 50%/0 0 50px 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column-reverse;
  position: relative;
`;

export const CoffeeCupIngredient = styled.div`
  background-color: hotpink;
  min-height: 1px;

  width: 100%;

  border-left: 4px solid white;
  border-right: 4px solid white;

  position: relative;

  &.drip-coffee {
    background-color: saddlebrown;
  }

  &.empty {
    background-color: transparent;
  }

  &.espresso {
    background-color: black;
  }

  &.hot-chocolate {
    background-color: sienna;
  }

  &.ice-cream-vanilla {
    position: absolute;
    bottom: 4px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    left: 50%;
    border: 1px solid gray;
    transform: translateX(-50%);
    background-color: white;
  }

  &.milk {
    background-color: white;
  }

  &.milk-foam {
    background-color: antiquewhite;
  }

  &.steamed-half--half {
    background-color: cornsilk;
  }

  &.steamed-milk {
    background-color: seashell;
  }

  &.water {
    background-color: lightblue;
  }

  &:first-child {
    border-radius: 50%/0 0 50px 50px;
    border-bottom: 4px solid white;
  }

  &:hover:not(.empty) {
    border-color: black;
  }

  &:hover:not(.empty) .tooltip {
    display: block;
  }
`;

export const CoffeeCupIngredientTooltip = styled.div`
  display: none;
  position: absolute;
  top: 50%;

  transform: translateY(-50%);
  left: 110%;
  background-color: white;
  padding: 0.5em;
  border: 4px solid tan;
  border-radius: 0.25em;
`;
