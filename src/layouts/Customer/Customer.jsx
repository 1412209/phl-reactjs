import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "components/Header/Header.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import Footer from "components/Footer/Footer.jsx";

import customerRoutes from "routes/customer.jsx";
import customerStyle from "assets/jss/layouts/customerStyle.jsx";

const switchRoutes = (
	<Switch>
		{customerRoutes.map((prop, key) => {
			if (prop.redirect)
				return <Redirect from={prop.path} to={prop.to} key={key} />;
			return <Route path={prop.path} exact={!!prop.exact} component={prop.component} key={key} />;
		})}
	</Switch>
);


class Customer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			theme: 0
		};
	}
	getThemeImage() {
		let length = this.props.themes.length;
		let theme = (this.state.theme < length && this.state.theme >= 0) ? this.state.theme : 0;
		return this.props.themes[theme]
	}
	render() {
		var {classes} = this.props;
		return (
			<div style={{backgroundImage: `url(${this.getThemeImage()})`}} className={classes.overlay}>
				<Header className={classes.header}></Header>
				<div className={classes.sidebar_content}>
					<div className={classes.sidebar}>
						<Sidebar></Sidebar>
					</div>
					<div className={classes.content}>
						<div>{switchRoutes}</div>
						<Footer></Footer>
					</div>
				</div>
			</div>
		)
	}
}

Customer.defaultProps = {
	themes: (() => {
		let themes = [require('assets/images/bg/1.jpg')];
		for (var i = 1; i <= 11; i++){
			themes.push(require(`assets/images/bg/${i}.jpg`))
		}
		return themes;
	})()
}

Customer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(customerStyle)(Customer);