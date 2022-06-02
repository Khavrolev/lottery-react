import { makeAutoObservable } from "mobx";
import { IKey } from "../utils/interfaces";

export default class Store {
  constructor() {
    makeAutoObservable(this);
  }

  stake = 0;

  setStake(data: number) {
    this.stake = data;
  }

  selectedCells: IKey = {};

  setSelectedCells(data: IKey) {
    this.selectedCells = data;
  }

  modalOpened = false;

  setModalOpened(data: boolean) {
    this.modalOpened = data;
  }
}
