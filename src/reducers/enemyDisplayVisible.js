const enemyDisplayVisible = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_ENEMY_DISPLAY":
      return !state;
    default:
      return state;
  }
};

export default enemyDisplayVisible;
