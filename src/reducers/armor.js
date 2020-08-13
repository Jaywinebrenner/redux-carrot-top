const armor = (state = "Naked", action) => {
  switch (action.type) {
    case "CHANGE_ARMOR":
      return state = state;
    default:
      return state;
  }
};

export default armor;
