import useTheme from '@hooks/useTheme';
import { Box, CircularProgress } from '@mui/material';
import useStyles from './style';

const Loader = () => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<CircularProgress size={68} sx={styles.loader} />
		</Box>
	);
};

export default Loader;
