import React, { Component } from 'react';

const ContainerSearch = WrappedComponent => {
	return class ResultSearch extends Component {
		constructor(props) {
			super(props);
			this.state =  {
				value: ''
			}
			this.setStateFromInstance = this.setStateFromInstance.bind(this);
		}
			
		setStateFromInstance() {
			this.setState({
				value: this.instance.getCurrentState()
			})
		} 
			
		render() {
			return(
				<div>
					<WrappedComponent {...this.props} ref= { (instance) => this.instance = instance } />
					<button onClick = {this.setStateFromInstance }> Submit </button>
					<h3>Result of search is {this.state.value}</h3>
				</div>
			);
		}
	}
}

export default ContainerSearch;