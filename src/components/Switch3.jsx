const Switch3 = ({setSwitch3}) => {

  const isTrue = () => {
    setSwitch3(true);
  }
  const isFalse = () => {
    setSwitch3(false);
  }

  return (
    <div className="switch">
      <button onClick={isTrue}>ON</button>
      <button onClick={isFalse}>OFF</button>
    </div>
  );
};


export default Switch3;
