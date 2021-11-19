import React from 'react';

function ButtonComponent(props){
  return(<>
    <button type={props.type}>{props.name}</button>
  </>)
}

export default ButtonComponent;