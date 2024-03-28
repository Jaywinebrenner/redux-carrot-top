const chapterEight = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_CHAPTER_EIGHT":
      return action.payload;
    default:
      return state;
  }
};

export default chapterEight;
