import { BreakpointEnum } from '@enums/theme.enum';
import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	toolbar: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
	},
	appBar: {
		backgroundColor: theme.palette.background.default,
		maxWidth: BreakpointEnum.XL,
		right: 'auto',
		boxShadow: 'none',
	},
	menuIcon: {
		color: theme.palette.primary.dark,
	},
	logoBox: {
		marginTop: theme.spacing(2.5),
		gridColumn: '1 / span 2',
	},
	linksBox: {
		display: 'flex',
		gap: '1.5rem',
		marginTop: theme.spacing(2.5),
		gridColumn: 'auto / span 9',
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
		display: 'flex',
		gridColumn: 'auto / span 1',
		justifyContent: 'flex-end',
		mt: theme.spacing(2.5),
	},
});

export default useStyles;
