import { sidebarWidth, defaultPadding, headerHeight, primaryColor } from "../variables.jsx";

const customerStyle = {
	header: {
		height: headerHeight,
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0
	},
	sidebar_content: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	sidebar: {
		position: 'fixed',
		left: 0,
		top: headerHeight,
		bottom: 0,
		width: sidebarWidth,
		padding: defaultPadding,
		paddingTop: defaultPadding,
		backgroundColor: 'rgba(0,0,0,.125)'
	},
	content: {
		flexGrow: 1,
		flexBasis: 0,
		padding: 30,
		marginLeft: sidebarWidth,
		marginTop: headerHeight,
		color: primaryColor
	},
	overlay: {
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
		minHeight: '100vh'
	}
}

export default customerStyle;