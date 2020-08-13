const createCharacter = (state = true, action) => {
  switch (action.type) {
    case "TOGGLE_CREATE_CHARACTER":
      return !state;
    default:
      return state;
  }
};

export default createCharacter;
