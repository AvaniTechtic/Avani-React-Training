import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CounterApp = (props) => {
  const [value, setValue] = useState(0);

  const IncrementTheStateValue = () => {
    setValue(value + 1);
  };

  const DecrementTheStateValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
      navigate(-1);
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>
      <h1>Props: {props.name}</h1>
      <h1>{value}</h1>
      <button type="button" onClick={IncrementTheStateValue}>
        Increment
      </button>
      <button type="button" onClick={DecrementTheStateValue}>
        Decrement
      </button>
      <button type="button" onClick={() => setValue(0)}>
        Reset
      </button>
    </div>
  );
};

export default CounterApp;
