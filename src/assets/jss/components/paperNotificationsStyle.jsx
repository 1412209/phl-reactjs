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
	item: {
		display: 'flex',
		padding: "15px 15px",
		transition: "all ease .4s",
		color: `${primaryColor} !important`,
		fontSize: fontSize*.8,
		lineHeight: 1.2,
		"&:hover": {
			backgroundColor: 'rgba(255,255,255,.1)'
		}
	},
	wrapAvatar: {
		marginRight: 15,
		width: 40
	},
	avatar: {
		width: "100%",
		borderRadius: 2
	},
	wrapNotification: {
		flex: 1,
		minWidth: 0
	},
	notification: {
		marginTop: 0,
		marginBottom: 5,
		WebkitLineClamp: 2,
		WebkitBoxOrient: 'vertical',
		overflow: "hidden",
		display: '-webkit-box',
		textOverflow: "ellipsis"
	},
	time: {
		margin: 0,
		display: 'flex',
		alignItems: "center",
		color: "#aaa"
	},
	iconTime: {
		width: 12,
		height: 12,
		marginRight: 5
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
	}
};

export default styles;