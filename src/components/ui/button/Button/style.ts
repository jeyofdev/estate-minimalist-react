import { StyleFlexDirectionEnum } from '@enums/style.enum';
import { DarkModeEnum } from '@enums/theme.enum';
import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: (
		direction: StyleFlexDirectionEnum,
		active: boolean,
		width: number | 'auto',
	) => ({
		flexDirection: direction,
		borderRadius: theme.spacing(1.75),
		px: theme.spacing(4),
		py: theme.spacing(2),
		backgroundColor: active
			? theme.palette.primary.main
			: theme.palette.background.paper,
		color: active
			? theme.palette.primary.contrastText
			: theme.palette.secondary.dark,
		boxShadow: 'none',
		minWidth: 'auto',
		width,

		'&:hover': {
			backgroundColor: theme.palette.primary.light,
			color:
				theme.palette.mode === DarkModeEnum.LIGHT
					? theme.palette.primary.dark
					: theme.palette.primary.contrastText,
			boxShadow: 'none',
		},

		'& .MuiButton-startIcon': {
			ml:
				direction === StyleFlexDirectionEnum.ROW
					? theme.spacing(-1)
					: theme.spacing(0),
			mr:
				direction === StyleFlexDirectionEnum.ROW
					? theme.spacing(2)
					: theme.spacing(0),
		},
	}),
	startIcon: {
		fontSize: '0.65rem',
	},
	typo: {
		textTransform: 'none',
	},
});

export default useStyles;
