import React from 'react';
import {useState} from 'react';

const FuncToggler = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <button className="btn-hover color-func-btn" onClick={() => setIsToggled(!isToggled)}>{ isToggled ? 'ON' : 'OFF' }</button>
  );
}

export default FuncToggler;