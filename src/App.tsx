import { RecoilRoot } from "recoil";
import classes from "./App.module.css";
import Board from "./components/Board/Board";
import Popup from "./components/Popup/Popup";
import Stakes from "./components/Stakes/Stakes";

const App = () => {
  return (
    <RecoilRoot>
      <div className={classes.wrapper}>
        <Popup />
        <h1 className={classes.wrapper__title}>Keno lottery</h1>
        <Board classname={classes.wrapper__board} />
        <Stakes classname={classes.wrapper__stakes} />
      </div>
    </RecoilRoot>
  );
};

export default App;
