import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	btn: {
		py: theme.spacing(0),
		px: theme.spacing(1),
		minWidth: 'auto',

		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	btnTypo: {
		color: theme.palette.primary.main,
		textTransform: 'none',
	},
});

export default useStyles;
