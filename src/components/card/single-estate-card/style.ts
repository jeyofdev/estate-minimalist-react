import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
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
		borderRadius: theme.spacing(0),
		boxShadow: 'none',
	},
	card: {
		width: '100%',
	},
	contentBox: {
		padding: theme.spacing(6),

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
	address: {
		color: theme.palette.secondary.light,
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
});

export default useStyles;
