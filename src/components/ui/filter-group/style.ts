import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {},
	title: {
		color: theme.palette.secondary.dark,
		fontWeight: '600',
		mb: theme.spacing(2),
	},
});

export default useStyles;
