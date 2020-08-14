const battleVisible = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_BATTLE_DISPLAY":
      return !state;
    default:
      return state;
  }
};

export default battleVisible;
