const mainDisplay = (state = "AM I HERE", action) => {
  switch (action.type) {
    case "CHANGE_MAIN_DISPLAY":
      return action.payload;
    default:
      return state;
  }
};

export default mainDisplay;
