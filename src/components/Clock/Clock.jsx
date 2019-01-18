import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	clock: {
		padding: "9px 13px",
		fontSize: 20,
    	marginLeft: "1rem",
    	backgroundColor: 'rgba(255,255,255,.08)',
    	borderRadius: 2
	}
};

class Clock extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			hours: "00",
			minutes: "00",
			seconds: "00"
		};
	}

	setClock = () => {
		let date = new Date();
		let hours = this.cleanTime(date.getHours());
		let minutes = this.cleanTime(date.getMinutes());
		let seconds = this.cleanTime(date.getSeconds());

		this.setState({
			hours: hours,
			minutes: minutes,
			seconds: seconds
		});
	}
	cleanTime = number => {
		number += "";
		if (number.length == 1)
			return "0"+number;
		return number;
	}
	componentDidMount = () => {
		setInterval(this.setClock, 1000);
	}

	render() {
		const { classes, className } = this.props;
		return (
			<div className={ classes.clock + " " + className}>
				{this.state.hours} : {this.state.minutes} : {this.state.seconds}
			</div>
		);
	}
}

Clock.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Clock);
