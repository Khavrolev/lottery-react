import classNames from "classnames";
import { FC } from "react";
import classes from "./Board.module.css";
import { HTMLElementProps } from "../../utils/interfaces";
import { BOARD_SIZE } from "../../utils/constants";
import Cell from "./Cell";

const Board: FC<HTMLElementProps> = ({ classname }) => {
  const getBoard = () => {
    const board = [];
    for (let i = 1; i < BOARD_SIZE.cells + 1; i += 1) {
      board.push(<Cell key={i} cellNumber={i} />);
    }
    return board;
  };

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${BOARD_SIZE.cellsInRow}, auto)`,
      }}
      className={classNames(classname, classes.board)}
    >
      {getBoard()}
    </div>
  );
};

export default Board;
