const armor = (state = "Naked", action) => {
  switch (action.type) {
    case "CHANGE_ARMOR":
      return action.payload;
    default:
      return state;
  }
};

export default armor;
