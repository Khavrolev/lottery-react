import classes from "./App.module.css";
import Board from "./components/Board/Board";
import Popup from "./components/Popup/Popup";
import Stakes from "./components/Stakes/Stakes";

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Popup />
      <h1 className={classes.wrapper__title}>Keno lottery</h1>
      <Board divClass={classes.wrapper__board} />
      <Stakes divClass={classes.wrapper__stakes} />
    </div>
  );
};

export default App;
