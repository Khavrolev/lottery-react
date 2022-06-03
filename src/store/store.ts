import { makeAutoObservable } from "mobx";
import { KeyProps } from "../utils/interfaces";

export default class Store {
  constructor() {
    makeAutoObservable(this);
  }

  stake = 0;

  setStake(data: number) {
    this.stake = data;
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
}
