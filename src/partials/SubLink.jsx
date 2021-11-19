import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

const SubLink = ({ label, to }) => {
	return (
		<Link to={to}>
			{label}
		</Link>
	);
};

export default SubLink;
