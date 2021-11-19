import React, { Fragment } from "react";
import { useParams, Switch, useRouteMatch, Route } from "react-router-dom";

import Things from "./Things";
import SubMenu from "./SubMenu";
import Search from './Search';

const ClothingSection = () => {
	const { item } = useParams();
	const { url } = useRouteMatch();
	return (
		<Fragment>
			<h1>{item}</h1>
			<div className="main-content">
				<Search/>
				<SubMenu />
				<div>
					<Switch>
						<Route path={`${url}/:itemThing`}>
							<Things />
						</Route>
					</Switch>
				</div>
			</div>
		</Fragment>
	);
};

export default ClothingSection;
