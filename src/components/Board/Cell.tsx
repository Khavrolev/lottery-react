import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { FC, useContext } from "react";
import StoreContext from "../../context";
import classes from "./Cell.module.css";

interface CellProps {
  cellNumber: number;
}

const Cell: FC<CellProps> = ({ cellNumber }) => {
  const { store } = useContext(StoreContext);

  return (
    <div
      className={classNames(classes.cell, {
        [classes.cell_selected]: store.selectedCells[cellNumber],
      })}
      data-cell={cellNumber}
      onClick={(event) => store.handleClickOnCell(event)}
    >
      {cellNumber}
    </div>
  );
};

export default observer(Cell);
