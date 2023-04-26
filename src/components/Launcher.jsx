import { useState } from "react";

const Launcher = (props) => {
  return (
    <div>
      {props.switch1 == true &&
      props.switch2 === true &&
      props.switch3 === true ? (
        <div className="launcher go">GO</div>
      ) : (
        <div className="launcher">NO GO</div>
      )}
    </div>
  );
};

export default Launcher;
