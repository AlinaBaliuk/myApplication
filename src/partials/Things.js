import React from "react";
import { useParams } from "react-router-dom";
import CounterThings from './CounterThings';

const Things = () => {
	const { itemThing } = useParams();
	return (
		<div>
			<h3>{itemThing}</h3>
			<CounterThings/>
		</div>
	);
};

export default Things;
