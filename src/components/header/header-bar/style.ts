import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {},
	appBar: {
		backgroundColor: theme.palette.background.default,
	},
	menuIcon: {
		color: theme.palette.primary.dark,
	},
	linkBtn: {
		color: theme.palette.primary.dark,
	},
});

export default useStyles;
