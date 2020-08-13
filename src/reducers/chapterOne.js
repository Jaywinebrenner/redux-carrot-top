const chapterOne = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_CHAPTER_ONE":
      return !state;
    default:
      return state;
  }
};

export default chapterOne;
