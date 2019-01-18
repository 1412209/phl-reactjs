import { fade } from '@material-ui/core/styles/colorManipulator';
import { sidebarWidth, defaultPadding } from "../variables.jsx";

const styles = (theme) => ({
	root: {
		width: '100%'
	},
	appBar: {
		backgroundColor: 'rgba(0,0,0,.3)'
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	toolbar: {
		padding: 0
	},
	title: {
		display: 'block',
		width: sidebarWidth,
		padding: defaultPadding,
		fontSize: 17,
		fontWeight: 'normal',
		color: "#fff !important"
	},
	control: {
		flexBasis: '0',
		flexGrow: 1,
		display: 'flex',
		alignItems: 'center',
		paddingLeft: defaultPadding,
		paddingRight: defaultPadding
	},
	search: {
		position: 'relative',
		borderRadius: 2,
		backgroundColor: "rgba(255,255,225,.15)",
		transition: "all ease .4s",
		'&:hover': {
			backgroundColor: "rgba(255,255,225,.25)",
		},
		margin: 0,
		marginRight: 30,
		flexGrow: 1,
		width: 'auto',
		maxWidth: 600
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
	defaultIcon: {
		width: 22,
		height: 22
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
	},
	sectionDesktop: {
		display: 'flex',
		marginLeft: 'auto'
	},
	sectionMobile: {
		display: 'none'
	},
	badgeBadge: {
		minWidth: 16,
		height: 16,
		fontSize: ".6rem"
	},
	iconNav: {
		marginLeft: 3,
		marginRight: 3
	},
	dropdown: {
		backgroundColor: 'red'
	}
});

export default styles;