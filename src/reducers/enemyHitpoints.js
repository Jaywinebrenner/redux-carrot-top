const enemyHitpoints = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT_ENEMY_HP":
      return state + action.payload;
    case "DECREMENT_ENEMY_HP":
      return state - action.payload;
    case "SET_ENEMY_HP":
      return action.payload;
    default:
      return state;
  }
};

export default enemyHitpoints;
