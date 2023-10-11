import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	appBar: {
		backgroundColor: theme.palette.background.default,
	},
	menuIcon: {
		color: theme.palette.primary.dark,
	},
	logoBox: {
		marginTop: theme.spacing(2.5),
	},
	linksBox: {
		display: 'flex',
		gap: '1.5rem',
		marginTop: theme.spacing(2.5),
	},
	link: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		color: theme.palette.primary.dark,
		textDecoration: 'none',

		'&:after': {
			content: '""',
			display: 'block',
			width: 7,
			height: 7,
			backgroundColor: 'transparent',
			borderRadius: '100%',
			marginTop: theme.spacing(1.5),
		},

		'&.active': {
			color: theme.palette.primary.main,

			'&:after': {
				backgroundColor: theme.palette.primary.main,
			},
		},
	},
	darkModeBox: {
		mt: theme.spacing(2.5),
	},
	darkModeBtn: {
		backgroundColor: theme.palette.primary.dark,
		width: 28,
		height: 28,
	},
	darkModeIcon: {
		fontSize: '0.8rem',
		color: theme.palette.primary.contrastText,
	},
});

export default useStyles;
