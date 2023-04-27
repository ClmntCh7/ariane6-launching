const Switch = ({ state, setState }) => {

  return (
    <div className="switch">
      <button className={state ? "active" : "inactive"} onClick={() => {
        setState(true)}}>ON</button>
      <button className={!state ? "active" : "inactive"} onClick={() => {
        setState(false)}}>OFF</button>
    </div>
  );
};

export default Switch;
