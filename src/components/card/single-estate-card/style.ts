import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		position: 'relative',
		display: {
			xs: 'none',
			md: 'flex',
		},
		flexDirection: 'column',
		gridColumn: {
			xs: 'auto / span 6',
		},
		backgroundColor: theme.palette.background.paper,
		width: '100%',
	},
	blockPage: {
		position: 'fixed',
	},
	card: {
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
		alignItems: 'center',
		justifyContent: 'space-between',
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
