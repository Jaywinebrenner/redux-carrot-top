const chapterEleven = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_CHAPTER_ELEVEN":
      return action.payload;
    default:
      return state;
  }
};

export default chapterEleven;
