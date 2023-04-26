import { useState } from "react";
import "./App.css";
import Switch1 from "./components/Switch1";
import Switch2 from "./components/Switch2";
import Switch3 from "./components/Switch3";
import Launcher from "./components/Launcher";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="container">
      <div className="command">
        <div className="switches">
          <Switch1 switch1={switch1} setSwitch1={setSwitch1}></Switch1>
          <Switch2 switch2={switch2} setSwitch2={setSwitch2}></Switch2>
          <Switch3 switch3={switch3} setSwitch3={setSwitch3}></Switch3>
        </div>
        <Launcher switch1={switch1} setSwitch1={setSwitch1} switch2={switch2} setSwitch2={setSwitch2} switch3={switch3} setSwitch3={setSwitch3}></Launcher>
        <button type="reset" onClick={()=> {
          return setSwitch1(false), setSwitch2(false), setSwitch3(false)
        }}>Reset</button>
      </div>
    </div>
  );
};

export default App;
