import { BreakpointEnum } from '@enums/theme.enum';
import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		minHeight: '100vh',
		width: '100%',
	},
	contentBox: {
		maxWidth: BreakpointEnum.XL,
		margin: '0 auto',
	},
	contentPage: {
		mt: '64px',
	},
});

export default useStyles;
