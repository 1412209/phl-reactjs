import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<h1>Footer</h1>
		)
	}
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles({})(Footer);