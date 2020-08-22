
const playerDamage = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_PLAYER_DAMAGE":
      return action.payload;
    case "INCREMENT_PLAYER_DAMAGE":
      return state + action.payload
    default:
      return state;
  }
};

export default playerDamage;
