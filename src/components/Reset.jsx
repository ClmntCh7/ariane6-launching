const Reset = ({ setSwitch1, setSwitch2, setSwitch3 }) => {
    return (
      <div className="reset">
        <button
          type="reset"
          onClick={() => {
            return setSwitch1(false), setSwitch2(false), setSwitch3(false);
          }}
        >
          Reset
        </button>
      </div>
    );
  };
  
  export default Reset;
  