import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		gridColumn: {
			xs: '1 / span 12',
			sm: 'auto / span 9',
			md: 'auto / span 4',
		},
		mt: theme.spacing(10),
	},
	contentBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: theme.spacing(4),
	},
	content: {
		color: theme.palette.primary.dark,
	},
	icon: {
		fontSize: '6rem',
		color: theme.palette.primary.dark,
	},
});

export default useStyles;
