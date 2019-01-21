import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';

const styles = {
	paper: {
		backgroundColor: 'rgba(0,0,0,.96)',
		width: 320,
		borderRadius: 2,
		color: "#fff"
	}
};

class Dropdown extends React.Component {
	state = {
		anchorEl: null,
	};

	componentDidMount() {
		if (this.props.handleRef) this.props.handleRef(this);
	}
	componentWillUnmount() {
		if (this.props.handleRef) this.props.handleRef(undefined);
	}

	handleClick = event => {
		this.setState({
			anchorEl: event.currentTarget,
		});
	};

	handleClose = () => {
		this.setState({
			anchorEl: null,
		});
	};

	clodePaper() {
		this.setState({
			anchorEl: null,
		});
	};

	render() {
		const { classes, className } = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<div className={className}>
				<div
					aria-haspopup="true"
					variant="contained"
					onClick={this.handleClick}
					>
					{this.props.children}
				</div>
				<Popover
					open={open}
					anchorEl={anchorEl}
					onClose={this.handleClose}
					anchorOrigin={this.props.anchorOrigin}
					transformOrigin={this.props.transformOrigin}
					classes={{
						paper: classes.paper
					}}
					>
					{this.props.componentPaper}
				</Popover>
			</div>
		);
	}
}

Dropdown.defaultProps = {
	anchorOrigin: {
		vertical: 'bottom',
		horizontal: 'right',
	},
	transformOrigin: {
		vertical: 'top',
		horizontal: 'right',
	}
}

Dropdown.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dropdown);
