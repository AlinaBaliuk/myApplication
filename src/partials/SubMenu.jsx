import React from "react";
import { useParams, useRouteMatch, Redirect } from "react-router-dom";

import SubLink from "./SubLink";

const arrThings = {
	Women: ["Dresses", "Jeans", "T-shirts", "Shoes"],
	Men: ["Suit", "Pants", "Sweatshirt", "Shoes"],
	Kids: ["New Year's Suits", "Summer Suits", "Winter Suits", "Shoes"],
	Unisex: ["Sneakers", "T-shirts", "Sweater"],
};

const SubMenu = () => {
	const { item } = useParams();
	const { url } = useRouteMatch();
	const models = arrThings[item];

	if (!models) {
		return <Redirect to="/error" />;
	}

	return (
		<ul className="sub-menu">
			{arrThings[item].map((thing) => (
				<li key={thing}>
					<SubLink label={thing} to={`${url}/${thing}`} />
				</li>
			))}
		</ul>
	);
};

export default SubMenu;
