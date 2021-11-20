import React from 'react';
import SubLink from "./SubLink";
import { useSelector } from 'react-redux';

const MainNav = () => {
	let arrClothes = useSelector(state => state?.main?.menu);

	return (
		<ul className="main-nav">
			{arrClothes.map((cloth) => (
				<li key={cloth}>
					<SubLink label={cloth} to={`/${cloth}`}/>
				</li>
			))}
		</ul>
	);
};

export default MainNav;
