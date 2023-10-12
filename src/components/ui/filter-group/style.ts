import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {},
	title: {
		color: theme.palette.secondary.dark,
		fontWeight: '600',
	},
});

export default useStyles;
