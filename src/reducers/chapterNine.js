const chapterNine = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_CHAPTER_NINE":
      return action.payload;
    default:
      return state;
  }
};

export default chapterNine;
