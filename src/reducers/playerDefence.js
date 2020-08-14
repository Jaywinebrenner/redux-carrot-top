const playerDefence = (state = 5, action) => {
  switch (action.type) {
    case "CHANGE_PLAYER_DEFENCE":
      return action.payload;
    default:
      return state;
  }
};

export default playerDefence;
