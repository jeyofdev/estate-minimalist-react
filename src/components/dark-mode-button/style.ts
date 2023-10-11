import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.primary.dark,
		width: 28,
		height: 28,

		'&:hover': {
			backgroundColor: theme.palette.primary.dark,
		},
	},
	darkModeIcon: {
		fontSize: '0.8rem',
		color: theme.palette.primary.contrastText,
	},
});

export default useStyles;
