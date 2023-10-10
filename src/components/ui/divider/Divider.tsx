import { Divider } from '@mui/material';
import useStyles from './style';

export type UIDividerPtopsType = {
	orientation?: 'horizontal' | 'vertical';
	variant?: 'fullWidth' | 'inset' | 'middle';
};

const UIDivider = ({
	orientation = 'horizontal',
	variant = 'middle',
}: UIDividerPtopsType) => {
	const styles = useStyles();

	return (
		<Divider orientation={orientation} variant={variant} sx={styles.root} />
	);
};

export default UIDivider;
