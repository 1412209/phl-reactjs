const styles = (theme) => ({
	search: {
		position: 'relative',
		borderRadius: 2,
		backgroundColor: "rgba(255,255,225,.15)",
		transition: "all ease .4s",
		'&:hover': {
			backgroundColor: "rgba(255,255,225,.25)",
		},
	},
	searchWrapIcon: {
		width: 39,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	searchIcon: {
		transition: "all ease .4s",
		width: 20,
		height: 20,
		opacity: 1,
		"&$arrowActive": {
			opacity: 0
		}
	},
	arrowIcon: {
		transition: "all ease .4s",
		width: 20,
		height: 20,
		opacity: 0,
		"&$arrowActive": {
			opacity: 1
		}
	},
	arrowActive: {
		transform: "rotate(180deg)"
	},
	inputRoot: {
		color: '#fff',
		width: '100%'
	},
	inputInput: {
		padding: "2px 2px 2px 39px",
		fontSize: 13,
		height: 33,
		transition: "all ease .4s",
		width: '100%'
	}
});

export default styles;