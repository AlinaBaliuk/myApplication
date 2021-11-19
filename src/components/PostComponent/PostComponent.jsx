import React from 'react';

function PostComponent(props){
  return(
  	<div>
	    <h3>{props.name}</h3>
	    <p>{props.title}</p>
  </div>)
}

export default PostComponent;