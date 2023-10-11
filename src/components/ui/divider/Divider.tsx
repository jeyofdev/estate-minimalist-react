import useTheme from '@hooks/useTheme';
import { Divider } from '@mui/material';
import useStyles from './style';

export type UIDividerPtopsType = {
	orientation?: 'horizontal' | 'vertical';
	variant?: 'fullWidth' | 'inset' | 'middle';
	borderColor?: string;
	margin?: string;
};

const UIDivider = ({
	orientation = 'horizontal',
	variant = 'middle',
	borderColor,
	margin,
}: UIDividerPtopsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Divider
			orientation={orientation}
			variant={variant}
			sx={styles.root(borderColor, margin)}
		/>
	);
};

export default UIDivider;
