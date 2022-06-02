import classNames from "classnames";
import { FC, MouseEvent, useContext } from "react";
import { observer } from "mobx-react-lite";
import classes from "./Board.module.css";
import { IDiv } from "../../utils/interfaces";
import { BOARD_SIZE } from "../../utils/constants";
import Context from "../../context";

const Board: FC<IDiv> = ({ divClass }) => {
  const { store } = useContext(Context);

  const handleClickOnCell = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) {
      return;
    }

    const selectedCells = { ...store.selectedCells };
    const { cell } = event.target.dataset;

    if (!cell) {
      return;
    }

    if (selectedCells[+cell]) {
      delete selectedCells[+cell];
    } else {
      selectedCells[+cell] = true;
    }

    store.setSelectedCells(selectedCells);
  };

  const getBoard = () => {
    const board = [];
    for (let i = 1; i < BOARD_SIZE.cells + 1; i += 1) {
      board.push(
        <div
          key={i}
          className={classNames(classes.board__cell, {
            [classes.board__cell_notselected]: !store.selectedCells[i],
            [classes.board__cell_selected]: store.selectedCells[i],
          })}
          data-cell={i}
        >
          {i}
        </div>,
      );
    }
    return board;
  };

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${BOARD_SIZE.cellsInRow}, auto)`,
      }}
      className={classNames(divClass, classes.board)}
      onClick={(event) => handleClickOnCell(event)}
    >
      {getBoard()}
    </div>
  );
};

export default observer(Board);
