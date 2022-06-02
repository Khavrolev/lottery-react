import { observer } from "mobx-react-lite";
import { MouseEvent, useContext } from "react";
import Context from "../../context";
import classes from "./Popup.module.css";

const Popup = () => {
  const { store } = useContext(Context);

  const handleClosePopup = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    store.setModalOpened(false);
    store.setStake(0);
    store.setSelectedCells({});
  };

  return (
    <>
      {store.modalOpened && (
        <div className={classes.popup} onClick={handleClosePopup}>
          <div className={classes.popup__content}>
            <div className={classes.popup__title}>Congratulations!</div>
            <div className={classes.popup__text}>{`Your bet is ${
              store.stake
            }.\nYour lucky numbers: ${Object.keys(store.selectedCells).join(
              ", ",
            )}!`}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(Popup);
