import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		gridColumn: 'auto / span 4',
		width: '100%',
		py: theme.spacing(10),
	},
	list: {
		mt: theme.spacing(5),
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(4),
	},
	card: {
		maxWidth: '100%',
		borderRadius: theme.spacing(3),
		boxShadow: 'none',
		backgroundColor: theme.palette.background.paper,
	},
	cardActionArea: {
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing(4),
		padding: theme.spacing(2),
	},
	cardImg: {
		borderRadius: theme.spacing(3),
		width: '40%',
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(0),
		gap: theme.spacing(2),
		width: '60%',
	},
	cardPrice: {
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing(1),
	},
	priceTypo: {
		color: theme.palette.primary.main,
	},
	priceMonth: {
		color: theme.palette.secondary.main,
	},
	cardTitle: {
		color: theme.palette.secondary.dark,
		fontWeight: '600',
		lineHeight: 1.3,
	},
	cardAddress: {
		color: theme.palette.secondary.light,
	},
	chipsBox: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: theme.spacing(2),
	},
});

export default useStyles;
