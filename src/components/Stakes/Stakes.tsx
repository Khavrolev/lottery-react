import classNames from "classnames";
import { FC, MouseEvent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  errorState,
  modalOpenedState,
  selectedCellsState,
  stakeState,
} from "../../store/store";
import getLuckyCells from "../../utils/algorithm";
import {
  BET_MESSAGES,
  NUMBER_CELLS_IN_BET,
  POPULAR_STAKES,
} from "../../utils/constants";
import BetMessages from "../../utils/enum";
import { HTMLElementProps } from "../../utils/interfaces";
import classes from "./Stakes.module.css";

const Stakes: FC<HTMLElementProps> = ({ classname }) => {
  const setModalOpened = useSetRecoilState(modalOpenedState);
  const [stake, setStake] = useRecoilState(stakeState);
  const [selectedCells, setSelectedCells] = useRecoilState(selectedCellsState);
  const [error, setError] = useRecoilState(errorState);

  const handleStakeClick = (item: number) => {
    setStake(item);

    if (error) {
      setError(undefined);
    }
  };

  const getStakeButtons = () => {
    return POPULAR_STAKES.map((item, index) => (
      <button
        key={`${index}_${item}`}
        className={classes.stakes__stakebutton}
        onClick={() => handleStakeClick(item)}
      >
        {item}
      </button>
    ));
  };

  const handleBetClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (stake <= 0) {
      setError(BET_MESSAGES[BetMessages.WrongStake]);
      return;
    }

    if (Object.keys(selectedCells).length !== NUMBER_CELLS_IN_BET) {
      setError(BET_MESSAGES[BetMessages.WrongNumber]);
      return;
    }

    if (error) {
      setError(undefined);
    }

    setModalOpened(true);
  };

  const handleLuckyPickClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      setSelectedCells(getLuckyCells());

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
    <div className={classNames(classname, classes.stakes)}>
      <div className={classes.stakes__stake}>
        <div className={classes.stakes__stakebuttons}>{getStakeButtons()}</div>
        <input
          className={classes.stakes__input}
          type="number"
          value={Number(stake).toString()}
          onChange={(event) => setStake(+event.target.value)}
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

export default Stakes;
