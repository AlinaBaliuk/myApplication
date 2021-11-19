import React from "react";
import SubLink from "./SubLink";

const arrClothes = ["Women", "Men", "Kids", "Unisex"];

const MainNav = () => {
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
