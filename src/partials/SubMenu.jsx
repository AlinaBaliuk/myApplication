import React from "react";
import { useParams, useRouteMatch, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'


import SubLink from "./SubLink";

const SubMenu = () => {
	let arrThings = useSelector(state => state?.main?.clothes)
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
