import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		width: '100%',
		borderRadius: theme.spacing(0),
		boxShadow: 'none',
	},
	contentBox: {
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(6),
		gap: theme.spacing(7),

		'&:last-child': {
			pb: theme.spacing(6),
		},
	},
	topBox: {
		display: 'flex',
		flexDirection: {
			xs: 'column',
			md: 'row',
		},
		alignItems: {
			xs: 'flex-start',
			md: 'center',
		},
		justifyContent: {
			xs: 'center',
			md: 'space-between',
		},
		gap: {
			xs: theme.spacing(1.5),
			md: 0,
		},
	},
	nameBox: {},
	title: {
		color: theme.palette.secondary.dark,
		fontWeight: '600',
		lineHeight: 1.3,
		mb: theme.spacing(1.5),
	},
	addressBox: {
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing(2),
	},
	icon: {
		color: theme.palette.primary.dark,
		fontSize: '0.8rem',
	},
	address: {
		color: theme.palette.secondary.light,
		lineHeight: 1,
	},
	priceBox: {
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing(1),
	},
	priceTypo: {
		color: theme.palette.primary.main,
		lineHeight: 1.1,
	},
	priceMonth: {
		color: theme.palette.secondary.main,
		alignSelf: 'flex-end',
	},
	chipsBox: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: theme.spacing(3),
	},
	detailsBox: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(1.5),
	},
	detailsSection: {
		color: theme.palette.secondary.dark,
		fontWeight: '600',
		lineHeight: 1.3,
	},
	details: {
		color: theme.palette.secondary.main,
	},
});

export default useStyles;
