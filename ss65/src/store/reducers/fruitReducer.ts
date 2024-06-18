import { ActionInterface, FruitInterface } from "../../interface/interface";

const initialFruits: FruitInterface[] = [
  { id: 1, name: "apple", price: 10, stock: 10 },
  { id: 2, name: "orange", price: 20, stock: 15 },
];

export const fruitReducer = (
  state = initialFruits,
  action: ActionInterface
) => {
  switch (action.type) {
    default:
      return state;
  }
};
