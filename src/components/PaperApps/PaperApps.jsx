import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import { Phone, Email, MoveToInbox } from '@material-ui/icons';

import styles from "assets/jss/components/paperAppsStyle.jsx";

class PaperApps extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};
	}

	render() {
		const { classes, className } = this.props;
		return (
			<div className={className}>
				<div className={classes.body}>
					<NavLink className={classes.item} to="#" onClick={this.props.handleItemClick}>
						<Phone className={classes.icon} />
						<h4 className={classes.name}>SĐT nội bộ</h4>
					</NavLink>
					<a className={classes.item} href="#" target="_blank">
						<MoveToInbox className={classes.icon} />
						<h4 className={classes.name}>Drive</h4>
					</a>
					<a className={classes.item} href="#" target="_blank">
						<Email className={classes.icon} />
						<h4 className={classes.name}>Email</h4>
					</a>
				</div>
			</div>
		);
	}
}

PaperApps.defaultProps = {
	handleItemClick: () => {}
}

PaperApps.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperApps);
