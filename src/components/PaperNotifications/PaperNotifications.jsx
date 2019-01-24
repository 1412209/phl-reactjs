import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import { AccessTime } from '@material-ui/icons';

import styles from "assets/jss/components/paperNotificationsStyle.jsx";

class PaperNotifications extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			hasViewmore: true,
			notifications: [
				{
					imgSrc: "dummy.webp",
					link: "#",
					time: "1 ngày",
					notification: "Cum sociis natoque penatibus et magnis dis parturient montes, Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel"
				},
				{
					imgSrc: "dummy.webp",
					link: "#",
					time: "1 ngày",
					notification: "Cum sociis natoque penatibus et magnis dis parturient montes, Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel"
				},
				{
					imgSrc: "dummy.webp",
					link: "#",
					time: "1 ngày",
					notification: "Cum sociis natoque penatibus et magnis dis parturient montes, Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel"
				},
				{
					imgSrc: "dummy.webp",
					link: "#",
					time: "1 ngày",
					notification: "Cum sociis natoque penatibus et magnis dis parturient montes, Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel"
				},
				{
					imgSrc: "dummy.webp",
					link: "#",
					time: "1 ngày",
					notification: "Cum sociis natoque penatibus et magnis dis parturient montes, Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel"
				}
			]
		};
	}

	render() {
		const { classes, className } = this.props;
		const renderViewmore = (<div className={classes.footer}>
				<NavLink to="#" className={classes.viewmore}>XEM TẤT CẢ</NavLink>
			</div>);
		return (
			<div className={className}>
				<div className={classes.header}>
					<h4 className={classes.headerName}>Notifications</h4>
				</div>
				<div className={classes.body}>
					{this.state.notifications.map((notification, index) => {
						return (<NavLink to={notification.link} className={classes.item} key={index} onClick={this.props.handleItemClick}>
							<div className={classes.wrapAvatar}>
								<img src={notification.imgSrc} alt={notification.notification} className={classes.avatar} />
							</div>
							<div className={classes.wrapNotification}>
								<p className={classes.notification}>{notification.notification}</p>
								<p className={classes.time}><AccessTime className={classes.iconTime} /> {notification.time}</p>
							</div>
						</NavLink>)
					})}
				</div>
				{(this.state.hasViewmore)?renderViewmore:""}
			</div>
		);
	}
}

PaperNotifications.defaultProps = {
	handleItemClick: () => {}
}

PaperNotifications.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperNotifications);
