import { fontSize, primaryColor } from "assets/jss/variables.jsx";

const styles = {
	header: {
		padding: "10px 20px"
	},
	headerName: {
		margin: 0,
		fontSize: fontSize
	},
	body: {
		overflow: 'auto',
		maxHeight: 350 
	},
	footer: {
		textAlign: 'center' 
	},
	viewmore: {
		padding: "10px 15px",
		color: "#aaa",
		display: 'block',
		transition: "all ease .4s",
		fontSize: fontSize*.8,
		"&:hover": {
			color: "#FFF"
		}
	},
	item: {
		display: 'block',
		padding: "15px 15px",
		transition: "all ease .4s",
		color: `${primaryColor} !important`,
		fontSize: fontSize*.8,
		lineHeight: 1.2,
		"&:hover": {
			backgroundColor: 'rgba(255,255,255,.1)'
		}
	},
	name: {
		fontSize: 14,
		marginTop: 0,
		marginBottom: 5
	},
	deadline: {
		margin: 0,
		marginBottom: 5,
		display: 'flex',
		alignItems: "center",
		color: "#aaa",
		fontSize: fontSize*.8
	},
	iconTime: {
		width: 11,
		height: 11,
		marginRight: 5
	},
	processBar: {
		backgroundColor: 'rgba(255,255,255,.1)',
		height: 3,
		width: "100%",
		position: 'relative' 
	},
	process: {
		position: 'absolute',
		left: 0,
		top: 0,
		bottom: 0
	},
	processNumber: {
		position: 'absolute',
		bottom: 'calc(100% + 5px)',
		right: 0,
		fontSize: fontSize*.8
	}
};

export default styles;