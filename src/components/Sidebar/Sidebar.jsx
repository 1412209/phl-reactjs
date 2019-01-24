import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import { NavLink } from "react-router-dom";
import { Home } from "@material-ui/icons";

import styles from "assets/jss/components/sidebarStyle";

class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pathname: null
		};
	}

	componentDidMount = () => {
		this.setState({ pathname: this.props.history.location.pathname });
		this.props.history.listen((location, action) => {
			this.setState({ pathname: location.pathname });
		});
	}

	inCollapse = (pathnames) => {
		if (typeof pathnames === "string")
			pathnames = [pathnames];
		for (var i = pathnames.length - 1; i >= 0; i--) {
			if (this.comparePathname(pathnames[i],this.state.pathname)) return true;
		}
		return false;
	}

	comparePathname = (p1, p2) => {
		return p1===p2||p1===p2+"/"||p1+"/"==p2;
	}

	isActive = (pathnames) => {
		return this.inCollapse(pathnames) ? "active" : "";
	}

	render() {
		var { classes } = this.props;
		return (
			<div className={classes.root}>
				<NavLink className={classes.profile} to="#">
					<Avatar src="/dummy.webp" alt="" className={classes.avatar}>VH</Avatar>
					<span className={classes.fullname}>Nguyễn Văn Huy</span>
				</NavLink>
				<ul className={classes.navitaion}>
					<li className={classes.navItem}>
						<NavLink exact to="/" className={classes.navLink} >
							<Home className={classes.icon} />
							<span className={classes.name}>Home</span>
						</NavLink>
					</li>
					<li className={classes.navItem}>
						<NavLink exact to="/all-components" className={classes.navLink} >
							<Home className={classes.icon} />
							<span className={classes.name}>All Components</span>
						</NavLink>
					</li>
					<li className={classes.navItem} id="item-2">
						<NavLink to="/nhan-vien" className={classes.navLink+" "+this.isActive(["/nhan-vien","/vai-tro"])} >
							<Home className={classes.icon} />
							<span className={classes.name}>Nhân viên</span>
						</NavLink>
						<Collapse in={this.inCollapse(["/nhan-vien","/vai-tro"])}>
							<ul className={classes.subNavigation}>
								<li className={classes.navItem}>
									<NavLink to="/nhan-vien" className={classes.navLink} >
										<span className={classes.name}>Nhân viên</span>
									</NavLink>
								</li>
								<li className={classes.navItem}>
									<NavLink to="/vai-tro" className={classes.navLink} >
										<span className={classes.name}>Vai trò</span>
									</NavLink>
								</li>
							</ul>
						</Collapse>
					</li>
					<li className={classes.navItem}>
						<NavLink to="/phong-ban" className={classes.navLink+" "+this.isActive(["/phong-ban","/vi-tri"])} >
							<Home className={classes.icon} />
							<span className={classes.name}>Phòng ban</span>
						</NavLink>
						<Collapse in={this.inCollapse(["/phong-ban","/vi-tri"])}>
							<ul className={classes.subNavigation}>
								<li className={classes.navItem}>
									<NavLink to="/phong-ban" className={classes.navLink} >
										<span className={classes.name}>Phòng ban</span>
									</NavLink>
								</li>
								<li className={classes.navItem}>
									<NavLink to="/vi-tri" className={classes.navLink} >
										<span className={classes.name}>Vị trí</span>
									</NavLink>
								</li>
							</ul>
						</Collapse>
					</li>
				</ul>
			</div>
		)
	}
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Sidebar));