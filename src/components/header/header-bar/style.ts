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
	brandTypo: {
		color: theme.palette.primary.dark,
		flexGrow: 1,
		display: {
			xs: 'none',
			sm: 'block',
		},
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
