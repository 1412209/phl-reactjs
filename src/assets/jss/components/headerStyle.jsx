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
		paddingLeft: 0,
		paddingRight: defaultPadding
	},
	search: {
		margin: 0,
		marginRight: 30,
		flexGrow: 1,
		width: 'auto',
		maxWidth: 600
	},
	defaultIcon: {
		width: 22,
		height: 22
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