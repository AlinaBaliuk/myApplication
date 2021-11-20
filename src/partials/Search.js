import React, { Component } from 'react';
import ContainerSearch from './ContainerSearch';

class Search extends Component {

	render() {
		const ResultComponent = ContainerSearch(InputComponent);
		return(
			<div>
				<ResultComponent />
			</div>
		)
	}
}

class InputComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	getCurrentState() {
		console.log(this.state.value)
		return this.state.value;
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	render() {
		return(
			<input type="text" onChange= {this.handleChange} />
		)
	}
}

export default Search;