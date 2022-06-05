import classNames from "classnames";
import { FC } from "react";
import { useRecoilState } from "recoil";
import { cellState } from "../../store/store";
import classes from "./Cell.module.css";

interface CellProps {
  cellNumber: number;
}

const Cell: FC<CellProps> = ({ cellNumber }) => {
  const [selectedCell, onChange] = useRecoilState(cellState(cellNumber));

  return (
    <div
      className={classNames(classes.cell, {
        [classes.cell_selected]: selectedCell,
      })}
      onClick={() => onChange(cellNumber)}
    >
      {cellNumber}
    </div>
  );
};

export default Cell;
