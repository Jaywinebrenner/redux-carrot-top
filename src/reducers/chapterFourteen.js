const chapterFourteen = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_CHAPTER_FOURTEEN":
      return action.payload;
    default:
      return state;
  }
};

export default chapterFourteen;
