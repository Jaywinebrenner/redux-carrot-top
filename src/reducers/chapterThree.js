const chapterThree = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_CHAPTER_THREE":
      return action.payload;
    default:
      return state;
  }
};

export default chapterThree;
