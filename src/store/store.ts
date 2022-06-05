import { atom } from "recoil";
import { KeyProps } from "../utils/interfaces";

export const stakeState = atom({
  key: "stake",
  default: 0,
});

export const selectedCellsState = atom({
  key: "selectedCells",
  default: {} as KeyProps,
});

export const modalOpenedState = atom({
  key: "modalOpened",
  default: false,
});

export const errorState = atom({
  key: "error",
  default: undefined as string | undefined,
});
