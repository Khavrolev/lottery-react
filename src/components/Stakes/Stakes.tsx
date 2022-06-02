import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { FC, MouseEvent, useContext, useState } from "react";
import Context from "../../context";
import getLuckyCells from "../../utils/algorithm";
import {
  BET_MESSAGES,
  NUMBER_CELLS_IN_BET,
  POPULAR_STAKES,
} from "../../utils/constants";
import BetMessages from "../../utils/enum";
import { IDiv } from "../../utils/interfaces";
import classes from "./Stakes.module.css";

const Stakes: FC<IDiv> = ({ divClass }) => {
  const { store } = useContext(Context);

  const [error, setError] = useState<string | undefined>();

  const getStakeButtons = () => {
    return POPULAR_STAKES.map((item, index) => (
      <button
        key={`${index}_${item}`}
        className={classes.stakes__stakebutton}
        onClick={() => store.setStake(item)}
      >
        {item}
      </button>
    ));
  };

  const handleBetClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (store.stake <= 0) {
      setError(BET_MESSAGES[BetMessages.WrongStake]);
      return;
    }

    if (Object.keys(store.selectedCells).length !== NUMBER_CELLS_IN_BET) {
      setError(BET_MESSAGES[BetMessages.WrongNumber]);
      return;
    }

    if (error) {
      setError(undefined);
    }

    store.setModalOpened(true);
  };

  const handleLuckyPickClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      store.setSelectedCells(getLuckyCells());

      if (error) {
        setError(undefined);
      }
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <div className={classNames(divClass, classes.stakes)}>
      <div className={classes.stakes__stake}>
        <div className={classes.stakes__stakebuttons}>{getStakeButtons()}</div>
        <input
          className={classes.stakes__input}
          type="number"
          value={Number(store.stake).toString()}
          onChange={(event) => store.setStake(+event.target.value)}
          required
        />
      </div>
      <div className={classes.stakes__info}>
        <div className={classes.stakes__ctrlbuttons}>
          <button
            className={classNames(
              classes.stakes__ctrlbutton,
              classes.stakes__ctrlbutton_luckypick,
            )}
            onClick={handleLuckyPickClick}
          >
            Lucky Pick
          </button>
          <button
            className={classNames(
              classes.stakes__ctrlbutton,
              classes.stakes__ctrlbutton_bet,
            )}
            onClick={handleBetClick}
          >
            Place Bet
          </button>
        </div>
        <div className={classes.stakes__error}>{error}</div>
      </div>
    </div>
  );
};

export default observer(Stakes);
