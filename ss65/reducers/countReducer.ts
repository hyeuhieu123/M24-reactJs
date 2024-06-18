// khơi tạo state
const initialCount: number = 0;
// khoiwr taoj ham reducerCount
const reducerCount = (state = initialCount, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
  }
};
