import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		'& .MuiDrawer-paper': {
			backgroundColor: theme.palette.background.default,
		},
	},
	iconTrigger: {
		fontSize: '1rem',
		padding: 0,
	},
	filtersContainer: {
		padding: theme.spacing(5),

		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
});

export default useStyles;
