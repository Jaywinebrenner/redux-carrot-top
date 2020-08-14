const mainDisplayOne = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_MAIN_DISPLAY_ONE":
      return action.payload;
    default:
      return state;
  }
};

export default mainDisplayOne;
