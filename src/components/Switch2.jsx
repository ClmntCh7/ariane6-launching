const Switch2 = ({setSwitch2}) => {

  const isTrue = () => {
    setSwitch2(true);
  }
  const isFalse = () => {
    setSwitch2(false);
  }

  return (
    <div className="switch">
      <button onClick={isTrue}>ON</button>
      <button onClick={isFalse}>OFF</button>
    </div>
  );
};


export default Switch2;
