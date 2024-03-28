const chapterSeven = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_CHAPTER_SEVEN":
      return action.payload;
    default:
      return state;
  }
};

export default chapterSeven;
