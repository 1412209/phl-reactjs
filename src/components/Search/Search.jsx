import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import {
	Search as SearchIcon,
	ArrowForward as ArrowRightIcon,
} from '@material-ui/icons';

import styles from "assets/jss/components/searchStyle.jsx";

class PaperNotifications extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isSearch: false
		};
	}

	handleSearchFocusIn = () => {
		this.setState({ isSearch: true });
	}

	handleSearchFocusOut = () => {
		this.setState({ isSearch: false });
	}

	render() {
		const { classes, className } = this.props;
		return (
			<div className={classes.search + " " + className}>
				<div className={classes.searchWrapIcon}>
					<SearchIcon className={classes.searchIcon + " " + (this.state.isSearch?classes.arrowActive:"")} />
				</div>
				<div className={classes.searchWrapIcon}>
					<ArrowRightIcon className={classes.arrowIcon + " " + (this.state.isSearch?classes.arrowActive:"")} />
				</div>
				<InputBase
					placeholder="Search for People"
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					onFocus={this.handleSearchFocusIn.bind(this)}
					onBlur={this.handleSearchFocusOut.bind(this)}
					/>
			</div>
		);
	}
}

PaperNotifications.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperNotifications);
