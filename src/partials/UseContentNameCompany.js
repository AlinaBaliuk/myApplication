import React from 'react'
import { Company } from './CompanyName';

class ContextCompany extends React.Component {
		componentDidMount() {
				const { updateState } = this.context;
				setTimeout(() => {
						updateState({ name: 'WELCOME to "yours BeSt clothes"'})
				}, 5000)
		}

	render() {
		const { nameCompany } = this.context;

		return (
				<p className="container-name-company">
						{ nameCompany.name }
				</p>
		)
	}
}
ContextCompany.contextType = Company;

export default ContextCompany