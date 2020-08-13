const playerHitpoints = (state = 50, action) => {
  switch (action.type) {
    case "INCREMENT_PLAYER_HP":
      return state + action.payload;
    case "DECREMENT_PLAYER_HP":
      return state - action.payload;
    default:
      return state;
  }
};

export default playerHitpoints;