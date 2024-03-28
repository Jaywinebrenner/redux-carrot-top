const chapterTwelve = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_CHAPTER_TWELVE":
      return action.payload;
    default:
      return state;
  }
};

export default chapterTwelve;
