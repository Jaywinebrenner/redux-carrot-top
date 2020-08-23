const isGameMusicPlaying = (state = true, action) => {
  switch (action.type) {
    case "TOGGLE_IS_GAME_MUSIC_PLAYING":
      return action.payload;
    default:
      return state;
  }
};

export default isGameMusicPlaying;
