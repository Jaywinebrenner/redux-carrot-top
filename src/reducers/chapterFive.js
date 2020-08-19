const chapterFour = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_CHAPTER_FIVE":
      return action.payload;
    default:
      return state;
  }
};

export default chapterFour;
