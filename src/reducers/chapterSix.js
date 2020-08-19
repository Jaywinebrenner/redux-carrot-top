const chapterSix = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_CHAPTER_SIX":
      return action.payload;
    default:
      return state;
  }
};

export default chapterSix;
