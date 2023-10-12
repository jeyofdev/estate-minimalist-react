import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		'& .MuiButtonBase-root': {
			backgroundColor: 'transparent',
			color: theme.palette.primary.dark,

			'&:hover': {
				backgroundColor: theme.palette.primary.light,
				color: theme.palette.primary.dark,
			},
		},
		'& .Mui-selected': {
			backgroundColor: `${theme.palette.primary.main} !important`,
			color: theme.palette.primary.contrastText,

			'&:hover': {
				color: theme.palette.primary.contrastText,
			},
		},
	},
});

export default useStyles;
