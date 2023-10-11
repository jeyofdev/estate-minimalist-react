import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: (heightBox: number) => ({
		display: 'flex',
		alignItems: 'flex-start',
		gap: theme.spacing(2),
		height: heightBox,
	}),
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
