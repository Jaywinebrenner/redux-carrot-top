export const incrementPlayerHp = (number) => {
  return {
    type: 'INCREMENT_PLAYER_HP',
    payload: number
  };
}

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
    type: "CHANGE_DEFENCE",
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

export const toggleChapterOne = (boolean) => {
  return {
    type: "TOGGLE_CHAPTER_ONE",
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
