import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		gridColumn: {
			xs: '1 / span 12',
			sm: 'auto / span 9',
			md: 'auto / span 4',
		},
		width: '100%',
		py: {
			xs: theme.spacing(5),
			sm: theme.spacing(10),
		},
	},
	titleSection: {
		color: theme.palette.primary.dark,
	},
	list: {
		mt: theme.spacing(5),
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		gap: theme.spacing(4),
	},
	card: {
		width: '100%',
		maxWidth: {
			xs: `calc(100%)`,
			sm: `calc(100%)`,
			// sm: `calc((100% / 2) - ${theme.spacing(4)})`,
			md: '100%',
		},
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
	paginationBox: {
		display: 'flex',
		justifyContent: 'center',
		mt: theme.spacing(5),
	},
});

export default useStyles;
