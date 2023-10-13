import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {},
	slider: {
		width: '97%',
		ml: '2%',
		pt: 0,

		'& .MuiSlider-rail': {
			backgroundColor: theme.palette.divider,
			opacity: 1,
			height: '3px',
		},

		'& .MuiSlider-track': {
			backgroundColor: theme.palette.primary.main,
			height: '1px',
		},

		'& .MuiSlider-thumb': {
			backgroundColor: theme.palette.primary.main,
			width: '10px',
			height: '10px',
		},
	},
	textFieldsBox: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: theme.spacing(4),
	},
});

export default useStyles;
