import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		mr: theme.spacing(4),
	},
	drawer: {
		'& .MuiDrawer-paper': {
			backgroundColor: theme.palette.background.default,
		},

		'& .MuiDrawer-root': {
			position: 'relative',
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
	contentBox: {
		width: 300,
	},
	closeTriggerBox: {
		position: 'absolute',
		top: theme.spacing(4),
		right: theme.spacing(4),
	},
});

export default useStyles;
