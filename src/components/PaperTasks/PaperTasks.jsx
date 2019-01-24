import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import { AccessTime } from '@material-ui/icons';

import styles from "assets/jss/components/paperTasksStyle.jsx";

class PaperTasks extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			tasks: [
				{
					name: "Cắt HTML",
					deadline: "30/01/2019",
					checkitemsNumber: 30,
					checkitemsComplete: 30,
					priority: 1,
					link: "#"
				},
				{
					name: "Cắt HTML",
					deadline: "30/01/2019",
					checkitemsNumber: 30,
					checkitemsComplete: 20,
					priority: 2,
					link: "#"
				},
				{
					name: "Cắt HTML",
					deadline: "30/01/2019",
					checkitemsNumber: 30,
					checkitemsComplete: 10,
					priority: 3,
					link: "#"
				},
				{
					name: "Cắt HTML",
					deadline: "30/01/2019",
					checkitemsNumber: 30,
					checkitemsComplete: 10,
					priority: 4,
					link: "#"
				},
				{
					name: "Cắt HTML",
					deadline: "30/01/2019",
					checkitemsNumber: 30,
					checkitemsComplete: 10,
					priority: 5,
					link: "#"
				}
			]
		};
	}

	getColor (priority) {
		let color = "#17a2b8";
		if (priority > 0 && priority <= this.props.priorities.length){
			color = this.props.priorities[priority-1];
		}
		return color;
	}

	render() {
		const { classes, className } = this.props;
		return (
			<div className={className}>
				<div className={classes.header}>
					<h4 className={classes.headerName}>Tasks</h4>
				</div>
				<div className={classes.body}>
					{this.state.tasks.map((task, index) => {
						return (<NavLink to={task.link} className={classes.item} key={index} onClick={this.props.handleItemClick}>
							<h3 className={classes.name}>{task.name}</h3>
							<h4 className={classes.deadline}><AccessTime className={classes.iconTime}/> {task.deadline}</h4>
							<div className={classes.processBar}>
								<span className={classes.processNumber}>{task.checkitemsComplete}/{task.checkitemsNumber}</span>
								<span className={classes.process} style={{
									width: (task.checkitemsComplete/task.checkitemsNumber*100)+"%",
									backgroundColor: this.getColor(task.priority)
								}}></span>
							</div>
						</NavLink>);
					})}
				</div>
				<div className={classes.footer}>
					<NavLink to="#" className={classes.viewmore}>XEM TẤT CẢ</NavLink>
				</div>
			</div>
		);
	}
}

PaperTasks.defaultProps = {
	handleItemClick: () => {},
	// Độ ưu tiên giảm dần (#28a745 : success)
	priorities: [ "#dc3545", "#ffc107", "#731ab7", "#007bff", "#17a2b8" ]
}

PaperTasks.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperTasks);
