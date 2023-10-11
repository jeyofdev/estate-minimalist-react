import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: (heightBox: number | 'auto', mobile: boolean) => ({
		display: 'flex',
		alignItems: mobile ? 'center' : 'flex-start',
		gap: theme.spacing(2),
		height: heightBox,
	}),
	icon: {
		color: theme.palette.primary.dark,
		fontSize: '0.8rem',
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
