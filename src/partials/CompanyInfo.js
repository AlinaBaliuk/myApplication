import React from 'react';
import { Company } from './CompanyName';

const CompanyInfo = () => (
	<Company.Consumer>
		{({ nameCompany, updateState }) => (
			<p className="container-name-company">{nameCompany.name}</p>
		)}
	</Company.Consumer>
);

export default CompanyInfo;