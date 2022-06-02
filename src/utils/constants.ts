import BetMessages from "./enum";

type IBetMessage = {
  [key in BetMessages]: string;
};

export const BOARD_SIZE = { cells: 80, cellsInRow: 10 };
export const POPULAR_STAKES = [50, 100, 200, 500, 1000];
export const NUMBER_CELLS_IN_BET = 5;
export const BET_MESSAGES: IBetMessage = {
  [BetMessages.WrongStake]: "Stake can't be equel 0",
  [BetMessages.WrongNumber]: `You should pick ${NUMBER_CELLS_IN_BET} numbers`,
  [BetMessages.WrongConfiguration]: `Board size is ${BOARD_SIZE.cells}, and it's smaller than ${NUMBER_CELLS_IN_BET}`,
};
