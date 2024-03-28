const mainDisplayButtons = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_MAIN_DISPLAY_BUTTONS":
      return action.payload;
    default:
      return state;
  }
};

export default mainDisplayButtons;
