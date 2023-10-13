import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		margin: 0,
		gap: theme.spacing(2.5),
	},
	checkbox: {
		backgroundColor: theme.palette.background.paper,
		padding: 0,
		borderRadius: '10px',

		'&:hover': { bgcolor: 'transparent' },
	},
	label: {
		color: theme.palette.primary.dark,
	},
});

export default useStyles;
