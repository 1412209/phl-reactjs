import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<h1>Sidebar</h1>
		)
	}
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles({})(Sidebar);