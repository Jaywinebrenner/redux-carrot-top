const weapon = (state = "Fists", action) => {
  switch (action.type) {
    case "CHANGE_WEAPON":
      return action.payload;
    default:
      return state;
  }
};

export default weapon;
