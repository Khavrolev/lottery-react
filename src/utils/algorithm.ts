import { BET_MESSAGES, BOARD_SIZE, NUMBER_CELLS_IN_BET } from "./constants";
import BetMessages from "./enum";
import { IKey } from "./interfaces";

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
  Math.ceil(min);

const getLuckyCells = (): IKey => {
  if (BOARD_SIZE.cells < NUMBER_CELLS_IN_BET) {
    throw new Error(BET_MESSAGES[BetMessages.WrongConfiguration]);
  }

  const luckyCels = {} as IKey;

  while (Object.keys(luckyCels).length < NUMBER_CELLS_IN_BET) {
    luckyCels[getRandomInt(1, BOARD_SIZE.cells)] = true;
  }

  return luckyCels;
};

export default getLuckyCells;
