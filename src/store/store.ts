import { atom, selectorFamily } from "recoil";
import { BET_MESSAGES, NUMBER_CELLS_IN_BET } from "../utils/constants";
import BetMessages from "../utils/enum";
import { KeyProps } from "../utils/interfaces";

export const stakeState = atom({
  key: "stakeState",
  default: 0,
});

export const selectedCellsState = atom({
  key: "selectedCellsState",
  default: {} as KeyProps,
});

export const modalOpenedState = atom({
  key: "modalOpenedState",
  default: false,
});

export const errorState = atom({
  key: "errorState",
  default: undefined as string | undefined,
});

export const cellState = selectorFamily<any, number>({
  key: "cellState",
  get:
    (item) =>
    ({ get }) => {
      const selectedCells = get(selectedCellsState);

      return selectedCells[item];
    },
  set:
    (item) =>
    ({ get, set }) => {
      set(selectedCellsState, (prevState) => {
        const copy = { ...prevState };

        if (copy[item]) {
          delete copy[item];
        } else if (Object.keys(prevState).length === NUMBER_CELLS_IN_BET) {
          set(errorState, BET_MESSAGES[BetMessages.WrongNumber]);
          return copy;
        } else {
          copy[item] = true;
        }

        if (get(errorState)) {
          set(errorState, undefined);
        }

        return copy;
      });
    },
});
