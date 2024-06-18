import { ActionInterface } from "../../interface/interface";

const initialChangeState: string = "rikkeiaca";

export const changeStateReducer = (
  state = initialChangeState,
  action: ActionInterface
) => {
  switch (action.type) {
    case "CS":
      return "rikkei";
    default:
      return state;
  }
};
