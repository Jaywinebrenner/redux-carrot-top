const enemyDisplayVisible = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_ENEMY_DISPLAY":
      return action.payload
      // return !state;
    default:
      return state;
  }
};

export default enemyDisplayVisible;
