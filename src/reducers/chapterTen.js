const chapterTen = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_CHAPTER_TEN":
      return action.payload;
    default:
      return state;
  }
};

export default chapterTen;
