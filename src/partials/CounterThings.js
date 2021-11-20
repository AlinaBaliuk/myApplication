import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/CounterReducer'

const CounterThings = () => {
	const count = useSelector(state => state?.count?.value);
	const dispatch = useDispatch()

	return (
		<div className="container-counter">
			<button onClick={() => dispatch(decrement())} > - </button>
			<span className="counter">{count}</span>
			<button onClick={() => dispatch(increment())} > + </button>
		</div>
	);
};

export default CounterThings;