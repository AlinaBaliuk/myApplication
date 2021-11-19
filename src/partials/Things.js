import React from "react";
import { useParams } from "react-router-dom";

const Things = () => {
	const { itemThing } = useParams();
	return (
		<div>
			<h3>{itemThing}</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit unde
				nemo cum veniam esse non accusamus a aliquid. Maiores possimus nam
				doloribus labore in sequi! Officia quasi eveniet corrupti!
			</p>
		</div>
	);
};

export default Things;
