import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "assets/css/style.css";
import indexRoutes from "./routes/index.jsx";

ReactDOM.render(
	<Router>
		<Switch>
			{indexRoutes.map((prop, key) => {
				return <Route path={prop.path} component={prop.component} key={key} />;
			})}
		</Switch>
	</Router>
	, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
