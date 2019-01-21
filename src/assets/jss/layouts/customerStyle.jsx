import { sidebarWidth, defaultPadding } from "../variables.jsx";

const customerStyle = {
	sidebar_content: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	sidebar: {
		width: sidebarWidth,
		padding: defaultPadding
	},
	content: {
		flexGrow: 1,
		flexBasis: 0,
		padding: defaultPadding
	},
	overlay: {
		backgroundPosition: "center",
		backgroundSize: "cover",
		minHeight: '100vh'
	}
}

export default customerStyle;