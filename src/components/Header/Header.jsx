import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import {
	Menu as MenuIcon,
	Search as SearchIcon,
	AccountCircle,
	Mail as MailIcon,
	Notifications as NotificationsIcon,
	MoreVert as MoreIcon,
	ArrowForward as ArrowRightIcon,
	Apps as AppsIcon,
	CheckCircle as TaskIcon
} from '@material-ui/icons';

import IconButton from 'components/IconButton/IconButton';
import Dropdown from 'components/Dropdown/Dropdown';
import Clock from 'components/Clock/Clock';
import headerStyle from "assets/jss/components/headerStyle.jsx";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			anchorEl: null,
			mobileMoreAnchorEl: null,
			isSearch: false
		};
	}

	handleMenuClose = () => {
		this.setState({ anchorEl: null });
		this.handleMobileMenuClose();
	};

	handleMobileMenuOpen = event => {
		this.setState({ mobileMoreAnchorEl: event.currentTarget });
	};

	handleMobileMenuClose = () => {
		this.setState({ mobileMoreAnchorEl: null });
	};

	handleSearchFocusIn = () => {
		this.setState({ isSearch: true });
	}

	handleSearchFocusOut = () => {
		this.setState({ isSearch: false });
	}

	render() {
		const { anchorEl, mobileMoreAnchorEl } = this.state;
		const { classes } = this.props;
		const isMenuOpen = Boolean(anchorEl);
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

		const renderMobileMenu = (
			<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={this.handleMobileMenuClose}
			>
				<MenuItem>
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<MailIcon />
						</Badge>
					</IconButton>
					<p>Messages</p>
				</MenuItem>
				<MenuItem>
					<IconButton color="inherit">
						<Badge badgeContent={11} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<p>Notifications</p>
				</MenuItem>
				<MenuItem onClick={this.handleProfileMenuOpen}>
					<IconButton color="inherit">
						<AppsIcon />
					</IconButton>
					<p>Profile</p>
				</MenuItem>
			</Menu>
			);

		const renderNotifications = (
			<div>Notifications</div>
		)

		const renderTasks = (
			<div>Tasks</div>
		)

		const renderApps = (
			<div>Apps</div>
		)

		return (
			<div className={classes.root}>
				<AppBar position="static" className={classes.appBar}>
					<Toolbar className={classes.toolbar}>
						<Typography variant="h1" color="inherit" noWrap>
							<NavLink className={classes.title} to="/">Phú Hoàng Land</NavLink>
						</Typography>
						<div className={classes.control}>
							<div className={classes.search}>
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
							<div className={classes.sectionDesktop}>
								<Dropdown componentPaper={renderNotifications}>
									<IconButton color="inherit" className={classes.iconNav}>
										<Badge badgeContent={17} color="secondary" classes={{
											badge: classes.badgeBadge
										}}>
											<NotificationsIcon className={classes.defaultIcon} />
										</Badge>
									</IconButton>
								</Dropdown>
								<Dropdown componentPaper={renderTasks}>
									<IconButton color="inherit" className={classes.iconNav}>
										<Badge badgeContent={4} color="secondary" classes={{
											badge: classes.badgeBadge
										}}>
											<TaskIcon className={classes.defaultIcon} />
										</Badge>
									</IconButton>
								</Dropdown>
								<Dropdown componentPaper={renderApps}>
									<IconButton color="inherit" className={classes.iconNav}>
										<AppsIcon className={classes.defaultIcon} />
									</IconButton>
								</Dropdown>
							</div>
							<div className={classes.sectionMobile}>
								<IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
									<MoreIcon />
								</IconButton>
							</div>
							<Clock />
						</div>
					</Toolbar>
				</AppBar>
				{renderMobileMenu}
			</div>
		);
	}
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(headerStyle)(Header);