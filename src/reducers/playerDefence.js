const playerDefence = (state = 5, action) => {
  switch (action.type) {
    case "CHANGE_PLAYER_DEFENCE":
      return action.payload;
    case "INCREMENT_PLAYER_DEFENCE":
      return state + action.payload;
    case "DECREMENT_PLAYER_DEFENCE":
      return state - action.payload;
    default:
      return state;
  }
};

export default playerDefence;


