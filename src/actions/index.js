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
    type: "CHANGE_DAMAGE",
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