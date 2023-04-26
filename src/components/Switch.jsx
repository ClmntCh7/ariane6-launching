const Switch = ({ setSwitch1, setSwitch2, setSwitch3 }) => {
  const isTrue = () => {
    if (setSwitch1) {
      setSwitch1(true);
    } else if (setSwitch2) {
      setSwitch2(true);
    } else {
      setSwitch3(true);
    }
  };
  const isFalse = () => {
    setSwitch1(false);
  };

  return (
    <div className="switch">
      <button onClick={isTrue}>ON</button>
      <button onClick={isFalse}>OFF</button>
    </div>
  );
};

export default Switch;
