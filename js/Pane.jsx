import React from 'react'
import ReactDOM from 'react-dom'

class Pane extends React.Component {
	
	//displayName: 'Pane';

	constructor() {
		super();
	}

	propTypes: {
	    label: React.PropTypes.string.isRequired,
	    children: React.PropTypes.element.isRequired
  	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default Pane;