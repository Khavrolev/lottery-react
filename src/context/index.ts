import { createContext } from "react";
import Store from "../store/store";

interface State {
  store: Store;
}

const StoreContext = createContext<State>({} as State);

export default StoreContext;
