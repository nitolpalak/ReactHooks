import React from "react";
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

function App() {
  return (
    <div className="App">
      <DataFetching />
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
  );
}

export default App;
