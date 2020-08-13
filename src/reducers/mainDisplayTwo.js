const mainDisplayTwo = (state = "AM I HERE", action) => {
  switch (action.type) {
    case "CHANGE_MAIN_DISPLAY_TWO":
      return action.payload;
    default:
      return state;
  }
};

export default mainDisplayTwo;
