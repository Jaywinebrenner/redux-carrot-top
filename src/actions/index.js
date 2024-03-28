export const incrementPlayerHp = (number) => {
  return {
    type: 'INCREMENT_PLAYER_HP',
    payload: number
  };
}

export const setPlayerHp = (number) => {
  return {
    type: "SET_PLAYER_HP",
    payload: number,
  };
};

export const incrementPlayerDamage = (number) => {
  return {
    type: "INCREMENT_PLAYER_DAMAGE",
    payload: number,
  };
};


export const decrementPlayerHp = (number) => {
  return {
    type: "DECREMENT_PLAYER_HP",
    payload: number
  };
};

export const changeArmor = (armor) => {
  return {
    type: "CHANGE_ARMOR",
    payload: armor,
  };
};

export const changeName = (name) => {
  return {
    type: "CHANGE_NAME",
    payload: name,
  };
};

export const changeDamage = (number) => {
  return {
    type: "CHANGE_PLAYER_DAMAGE",
    payload: number,
  };
};

export const changeWeapon = (weapon) => {
  return {
    type: "CHANGE_WEAPON",
    payload: weapon,
  };
};

export const changeDefence = (number) => {
  return {
    type: "CHANGE_PLAYER_DEFENCE",
    payload: number,
  };
};

export const changeMainDisplayOne = (text) => {
  return {
    type: "CHANGE_MAIN_DISPLAY_ONE",
    payload: text,
  };
};

export const changeMainDisplayTwo = (text) => {
  return {
    type: "CHANGE_MAIN_DISPLAY_TWO",
    payload: text,
  };
};

export const changeMainDisplayButtons = (text) => {
  return {
    type: "CHANGE_MAIN_DISPLAY_BUTTONS",
    payload: text,
  };
};

export const toggleCreateCharacter = (boolean) => {
  return {
    type: "TOGGLE_CREATE_CHARACTER",
    payload: boolean,
  };
};


export const decrementEnemyHp = (number) => {
  return {
    type: "DECREMENT_ENEMY_HP",
    payload: number,
  };
};

export const incrementEnemyHp = (number) => {
  return {
    type: "INCREMENT_ENEMY_HP",
    payload: number,
  };
};

export const incrementPlayerDefence = (number) => {
  return {
    type: "INCREMENT_PLAYER_DEFENCE",
    payload: number,
  };
};

export const decrementPlayerDefence = (number) => {
  return {
    type: "DECREMENT_PLAYER_DEFENCE",
    payload: number,
  };
};

export const setEnemyHp = (number) => {
  return {
    type: "SET_ENEMY_HP",
    payload: number,
  };
};

export const toggleEnemyDisplay = (boolean) => {
  return {
    type: "TOGGLE_ENEMY_DISPLAY",
    payload: boolean,
  };
};

export const toggleBattleDisplay = (boolean) => {
  return {
    type: "TOGGLE_BATTLE_DISPLAY",
    payload: boolean,
  };
};

export const toggleChapterOne = (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_ONE",
    payload: boolean,
  };
};

export const toggleChapterTwo = (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_TWO",
    payload: boolean,
  };
};

export const toggleChapterThree = (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_THREE",
    payload: boolean,
  };
};

export const toggleChapterFour = (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_FOUR",
    payload: boolean,
  };
};

export const toggleChapterFive = (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_FIVE",
    payload: boolean,
  };
};

export const toggleChapterSix = (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_SIX",
    payload: boolean,
  };
};

export const toggleChapterSeven = (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_SEVEN",
    payload: boolean,
  };
};

export const toggleChapterEight = (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_EIGHT",
    payload: boolean,
  };
};

export const toggleChapterNine = (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_NINE",
    payload: boolean,
  };
};

export const toggleChapterTen = (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_TEN",
    payload: boolean,
  };
};

export const toggleChapterEleven = (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_ELEVEN",
    payload: boolean,
  };
};

export const toggleChapterTwelve = (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_TWELVE",
    payload: boolean,
  };
};

export const toggleChapterThirteen = (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_THIRTEEN",
    payload: boolean,
  };
};

export const toggleChapterFourteen= (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_FOURTEEN",
    payload: boolean,
  };
};

export const toggleIsGameMusicPlaying = (boolean) => {
  return {
    type: "TOGGLE_IS_GAME_MUSIC_PLAYING",
    payload: boolean,
  };
};

export const isIntroTextScrolling = (boolean) => {
  return {
    type: "IS_INTRO_TEXT_SCROLLING",
    payload: boolean,
  };
};

