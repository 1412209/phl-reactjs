import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Button as ButtonUI } from '@material-ui/core';

class Button extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		const { className, classes, children, ...rest } = this.props;
		return (
			<ButtonUI {...rest} className={className + " " + classes.iconButton}>{children}</ButtonUI>
		)
	}
}

Button.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles({
	iconButton: {
		borderRadius: 2,
		minWidth: 'unset',
		padding: 12,
		"&:hover": {
			backgroundColor: 'rgba(255,255,255,.2)'
		}
	}
})(Button);