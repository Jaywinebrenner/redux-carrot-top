const chapterTwo = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_CHAPTER_TWO":
      return action.payload;
    default:
      return state;
  }
};

export default chapterTwo;
