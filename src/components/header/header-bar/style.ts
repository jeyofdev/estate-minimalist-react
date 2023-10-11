import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {},
	appBar: {
		backgroundColor: theme.palette.background.default,
	},
	iconButton: {
		display: {
			sm: 'none',
		},
	},
	menuIcon: {
		color: theme.palette.primary.dark,
	},
	linksBox: {
		display: {
			xs: 'none',
			sm: 'block',
		},
	},
	linkBtn: {
		color: theme.palette.primary.dark,
	},
});

export default useStyles;
