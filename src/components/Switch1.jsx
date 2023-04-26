const Switch1 = ({setSwitch1, setSwitch2, setSwitch3}) => {

  const isTrue = () => {
    setSwitch1(true);
  }
  const isFalse = () => {
    setSwitch1(false);
  }

  return (
    <div className="switch">
      <button onClick={isTrue}>ON</button>
      <button onClick={isFalse}>OFF</button>
    </div>
  );
};


export default Switch1;
