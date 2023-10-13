import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		width: '100%',

		'& .MuiOutlinedInput-input': {
			display: 'flex',
			alignItems: 'center',
			backgroundColor: theme.palette.background.paper,
			borderRadius: theme.spacing(1.75),
			padding: `${theme.spacing(1.75)} ${theme.spacing(4)}`,
		},

		'& .MuiOutlinedInput-notchedOutline': {
			border: 'none',
		},
	},
	valueBox: {
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing(2),
	},
	icon: {
		fontSize: '0.8rem',
		color: theme.palette.primary.dark,
	},
	menuItem: {
		py: theme.spacing(4),
	},
	paper: {
		py: theme.spacing(0),
		height: '100%',
		maxHeight: 186,

		'& .MuiMenu-list': {
			padding: 0,
		},
	},
});

export default useStyles;
