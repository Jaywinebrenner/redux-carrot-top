const chapterThirteen = (state = true, action) => {
  switch (action.type) {
    case "TOGGLE_CHAPTER_THIRTEEN":
      return action.payload;
    default:
      return state;
  }
};

export default chapterThirteen;
