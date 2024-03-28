const playerHitpoints = (state = null, action) => {
  switch (action.type) {
    case "INCREMENT_PLAYER_HP":
      return state + action.payload;
    case "DECREMENT_PLAYER_HP":
      return state - action.payload;
    case "SET_PLAYER_HP":
      return action.payload
    default:
      return state;
  }
};

export default playerHitpoints;
