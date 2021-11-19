import React, {useState} from 'react';

function InputComponent(props){
  const [value, setValue] = useState('');

  return(<>
    <input className={props.class} type={props.type} placeholder={props.placeholder} value={props.value !== undefined ? props.value : value} onChange={event => setValue(event.target.value)} />
  </>)
}

export default InputComponent;