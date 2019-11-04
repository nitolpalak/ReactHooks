import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";
import ClassCounter1 from "./components/ClassCounter1";
import HookCounter5 from "./components/HookCounter5";
import HookCounter6 from "./components/HookCounter6";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import ComponentC from "./components/ComponentC";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";
import ReducerCompA from "./components/ReducerCompA";
import ReducerCompB from "./components/ReducerCompB";
import ReducerCompC from "./components/ReducerCompC";
import DataFetching1 from "./components/DataFetching1";
import DataFetching2 from "./components/DataFetching2";
import CallBackParentComponent from "./components/CallBackParentComponent";
import MemoHookCounter from "./components/MemoHookCounter";
import FocusInput from "./components/FocusInput";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <HookTimer />
        <ClassTimer />
        {/* <FocusInput /> */}
        {/* <MemoHookCounter /> */}
        {/* <CallBackParentComponent /> */}
        {/* <DataFetching2 /> */}
        {/* <DataFetching1 /> */}
        {/* Count - {count}
        <ReducerCompA />
        <ReducerCompB />
        <ReducerCompC /> */}
        {/* <Counter3 /> */}
        {/* <Counter2 /> */}
        {/* <Counter1 /> */}
        {/* <UserContext.Provider value={"Yi"}>
        <ChannelContext.Provider value={"Master"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
        {/* <DataFetching /> */}
        {/* <IntervalHookCounter />
      <IntervalClassCounter /> */}
        {/* <MouseContainer /> */}
        {/* <HookMouse /> */}
        {/* <ClassMouse /> */}
        {/* <HookCounter6 /> */}
        {/* <ClassCounter1 /> */}
        {/* <HookCounter5 /> */}
        {/* <HookCounter4 /> */}
        {/* <HookCounter3 /> */}
        {/* <HookCounter2 /> */}
        {/* <ClassCounter />
      <HookCounter /> */}
      </div>
    </CountContext.Provider>
  );
}

export default App;
