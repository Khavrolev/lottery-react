import { MouseEvent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  errorState,
  modalOpenedState,
  selectedCellsState,
  stakeState,
} from "../../store/store";
import classes from "./Popup.module.css";

const Popup = () => {
  const [modalOpened, setModalOpened] = useRecoilState(modalOpenedState);
  const [stake, setStake] = useRecoilState(stakeState);
  const [selectedCells, setSelectedCells] = useRecoilState(selectedCellsState);
  const setError = useSetRecoilState(errorState);

  const handleClosePopup = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    setModalOpened(false);
    setStake(0);
    setSelectedCells({});
    setError(undefined);
  };

  return (
    <>
      {modalOpened && (
        <div className={classes.popup} onClick={handleClosePopup}>
          <div className={classes.popup__content}>
            <div className={classes.popup__title}>Congratulations!</div>
            <div
              className={classes.popup__text}
            >{`Your bet is ${stake}.\nYour lucky numbers: ${Object.keys(
              selectedCells,
            ).join(", ")}!`}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
