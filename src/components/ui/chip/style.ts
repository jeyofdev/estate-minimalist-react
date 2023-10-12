import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		borderRadius: theme.spacing(1.5),
		padding: `${theme.spacing(0.75)} ${theme.spacing(1)}`,
		height: 'auto',
		backgroundColor: theme.palette.primary.light,
	},
	chipIcon: {
		fontSize: '0.7rem',
		color: theme.palette.primary.dark,
	},
	chipTypo: {
		color: theme.palette.primary.dark,
	},
});

export default useStyles;
