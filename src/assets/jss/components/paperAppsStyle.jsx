import { fontSize, primaryColor } from "assets/jss/variables.jsx";

const styles = {
	body: {
		overflow: 'auto',
		maxHeight: 350,
		padding: 15,
		display: 'flex',
		flexWrap: 'wrap'
	},
	item: {
		padding: "15px 0",
		width: "33.33%",
		textAlign: 'center' ,
		color: `${primaryColor} !important`,
		borderRadius: 3,
		transition: "all ease .4s",
		"&:hover": {
			backgroundColor: 'rgba(255,255,255,.1)'
		},
		"&:hover $icon": {
			backgroundColor: "rgba(255,255,255,.25)"
		}
	},
	icon: {
		width: 45,
		height: 45,
		padding: 10,
		borderRadius: "50%",
		margin: 0,
		backgroundColor: 'rgba(255,255,255,.1)',
		transition: "all ease .4s"
	},
	name: {
		fontSize: fontSize,
		margin: 0
	}
};

export default styles;