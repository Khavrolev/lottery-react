import classNames from "classnames";
import { FC, MouseEvent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { errorState, selectedCellsState } from "../../store/store";
import { BET_MESSAGES, NUMBER_CELLS_IN_BET } from "../../utils/constants";
import BetMessages from "../../utils/enum";
import classes from "./Cell.module.css";

interface CellProps {
  cellNumber: number;
}

const Cell: FC<CellProps> = ({ cellNumber }) => {
  const [selectedCells, setSelectedCells] = useRecoilState(selectedCellsState);
  const setError = useSetRecoilState(errorState);

  const handleClickOnCell = (event: MouseEvent<HTMLDivElement>) => {
    const { cell } = event.currentTarget.dataset;

    if (!cell) {
      return;
    }

    const currentCells = { ...selectedCells };

    if (selectedCells[+cell]) {
      delete currentCells[+cell];
    } else if (Object.keys(selectedCells).length === NUMBER_CELLS_IN_BET) {
      setError(BET_MESSAGES[BetMessages.WrongNumber]);
      return;
    } else {
      currentCells[+cell] = true;
    }

    setSelectedCells(currentCells);
  };

  return (
    <div
      className={classNames(classes.cell, {
        [classes.cell_selected]: selectedCells[cellNumber],
      })}
      data-cell={cellNumber}
      onClick={handleClickOnCell}
    >
      {cellNumber}
    </div>
  );
};

export default Cell;
