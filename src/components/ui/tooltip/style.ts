import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		[`& .MuiTooltip-tooltip`]: {
			backgroundColor: theme.palette.primary.main,
		},
		'& .MuiTooltip-arrow': {
			color: theme.palette.primary.main,
		},
	},
	label: {
		color: theme.palette.primary.contrastText,
	},
});

export default useStyles;
