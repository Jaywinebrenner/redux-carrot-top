const name = (state = " ", action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return action.payload;
    default:
      return state;
  }
};

export default name;
