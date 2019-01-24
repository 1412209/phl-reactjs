import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import {
	Notifications as NotificationsIcon,
	Apps as AppsIcon,
	CheckCircle as TaskIcon
} from '@material-ui/icons';

import IconButton from 'components/IconButton/IconButton';
import Dropdown from 'components/Dropdown/Dropdown';
import Clock from 'components/Clock/Clock';
import Search from 'components/Search/Search';
import headerStyle from "assets/jss/components/headerStyle.jsx";
import PaperNotifications from 'components/PaperNotifications/PaperNotifications';
import PaperTasks from 'components/PaperTasks/PaperTasks';
import PaperApps from 'components/PaperApps/PaperApps';

class Header extends Component {
	constructor(props) {
		super(props);
		this.dropdownNotificaions = null;
		this.dropdownTasks = null;
		this.dropdownApps = null;
		this.state = {
			scrolled: false
		};
	}

	closePaperNotifications = () => {
		if(this.dropdownNotificaions) this.dropdownNotificaions.clodePaper();
	}

	closePaperTasks = () => {
		if(this.dropdownTasks) this.dropdownTasks.clodePaper();
	}

	closePaperApps = () => {
		if(this.dropdownApps) this.dropdownApps.clodePaper();
	}

	componentDidMount = () => {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = event => {
		if (window.scrollY > 50) this.setState({scrolled:true});
		else this.setState({scrolled:false});
	}

	render() {
		const { classes, className } = this.props;

		const renderNotifications = (
			<PaperNotifications handleItemClick={this.closePaperNotifications} />
		)

		const renderTasks = (
			<PaperTasks handleItemClick={this.closePaperTasks} />
		)

		const renderApps = (
			<PaperApps handleItemClick={this.closePaperApps}/>
		)

		return (
			<div className={className + " " + classes.root}>
				<AppBar position="static" className={classes.appBar+" "+(this.state.scrolled?classes.appBarScrolled:"")}>
					<Toolbar className={classes.toolbar}>
						<Typography variant="h1" color="inherit" noWrap>
							<NavLink className={classes.title} to="/">Phú Hoàng Land</NavLink>
						</Typography>
						<div className={classes.control}>
							<Search className={classes.search} />
							<div className={classes.sectionDesktop}>
								<Dropdown componentPaper={renderNotifications} handleRef={ref => (this.dropdownNotificaions=ref)}>
									<IconButton color="inherit" className={classes.iconNav}>
										<Badge badgeContent={17} color="secondary" classes={{
											badge: classes.badgeBadge
										}}>
											<NotificationsIcon className={classes.defaultIcon} />
										</Badge>
									</IconButton>
								</Dropdown>
								<Dropdown componentPaper={renderTasks} handleRef={ref => (this.dropdownTasks=ref)}>
									<IconButton color="inherit" className={classes.iconNav}>
										<Badge badgeContent={4} color="secondary" classes={{
											badge: classes.badgeBadge
										}}>
											<TaskIcon className={classes.defaultIcon} />
										</Badge>
									</IconButton>
								</Dropdown>
								<Dropdown componentPaper={renderApps} handleRef={ref => (this.dropdownApps=ref)}>
									<IconButton color="inherit" className={classes.iconNav}>
										<AppsIcon className={classes.defaultIcon} />
									</IconButton>
								</Dropdown>
							</div>
							<Clock />
						</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(headerStyle)(Header);