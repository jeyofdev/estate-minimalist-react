import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing(2),
	},
	icon: {
		color: theme.palette.primary.dark,
		fontSize: '1rem',
	},
	typo: {
		color: theme.palette.primary.dark,
		flexGrow: 1,
		display: {
			sm: 'block',
		},
	},
});

export default useStyles;
