import { useState } from "react";
import "./App.css";
import Switch from "./components/Switch";
import Launcher from "./components/Launcher";
import Reset from "./components/Reset";
import Header from "./components/Header";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="container">
      <Header />
      <div className="command">
        <div className="switches">
          <Switch state={switch1} setState={setSwitch1}></Switch>
          <Switch state={switch2} setState={setSwitch2}></Switch>
          <Switch state={switch3} setState={setSwitch3}></Switch>
        </div>
        <Launcher
          switch1={switch1}
          switch2={switch2}
          switch3={switch3}
        ></Launcher>
      </div>
      <Reset
        switch1={switch1}
        setSwitch1={setSwitch1}
        switch2={switch2}
        setSwitch2={setSwitch2}
        switch3={switch3}
        setSwitch3={setSwitch3}
      />
    </div>
  );
};

export default App;
