import React from 'react';

class ClassToggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
  }

  handleClick() {
    this.setState({isToggled:!this.state.isToggled});
  }

  render() {
    const { isToggled } = this.state;
    const title=this.state.isToggled? "ON":"OFF";
    return (
      <button className="btn-hover color-class-btn" onClick={() => this.handleClick()}>{title}</button>
    );
  }
}


export default ClassToggler;


