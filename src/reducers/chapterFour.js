const chapterFour = (state = true, action) => {
  switch (action.type) {
    case "TOGGLE_CHAPTER_FOUR":
      return action.payload;
    default:
      return state;
  }
};

export default chapterFour;
