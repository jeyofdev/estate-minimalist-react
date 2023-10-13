import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		flexDirection: 'column',
		gap: theme.spacing(1),
		mx: 0,
	},
	textField: {
		'& .MuiOutlinedInput-input': {
			backgroundColor: theme.palette.background.paper,
			borderRadius: theme.spacing(1.75),
			padding: `${theme.spacing(1.5)} ${theme.spacing(4)}`,
		},

		'& .MuiOutlinedInput-notchedOutline': {
			border: 'none',
		},
	},
	label: {
		color: theme.palette.grey[400],
	},
});

export default useStyles;
