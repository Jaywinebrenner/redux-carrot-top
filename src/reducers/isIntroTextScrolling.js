const isIntroTextScrolling = (state = false, action) => {
  switch (action.type) {
    case "IS_INTRO_TEXT_SCROLLING":
      return action.payload;
    default:
      return state;
  }
};

export default isIntroTextScrolling;
