import { makeAutoObservable } from "mobx";
import { MouseEvent } from "react";
import { BET_MESSAGES, NUMBER_CELLS_IN_BET } from "../utils/constants";
import BetMessages from "../utils/enum";
import { KeyProps } from "../utils/interfaces";

export default class Store {
  constructor() {
    makeAutoObservable(this);
  }

  stake = 0;

  setStake(data: number) {
    this.stake = data;
    if (this.error) {
      this.setError(undefined);
    }
  }

  selectedCells: KeyProps = {};

  setSelectedCells(data: KeyProps) {
    this.selectedCells = data;
  }

  modalOpened = false;

  setModalOpened(data: boolean) {
    this.modalOpened = data;
  }

  error: string | undefined;

  setError(data: string | undefined) {
    this.error = data;
  }

  handleClickOnCell(event: MouseEvent<HTMLDivElement>) {
    const { cell } = event.currentTarget.dataset;

    if (!cell) {
      return;
    }

    if (this.selectedCells[+cell]) {
      delete this.selectedCells[+cell];
    } else if (Object.keys(this.selectedCells).length === NUMBER_CELLS_IN_BET) {
      this.setError(BET_MESSAGES[BetMessages.WrongNumber]);
      return;
    } else {
      this.selectedCells[+cell] = true;
    }

    if (this.error) {
      this.setError(undefined);
    }
  }
}
