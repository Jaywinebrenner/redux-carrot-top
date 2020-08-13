
const playerDamage = (state = 3, action) => {
  switch (action.type) {
    case "CHANGE_PLAYER_DAMAGE":
      return action.payload;
    default:
      return state;
  }
};

export default playerDamage;
