import UIDivider from '@components/ui/divider/Divider';
import useTheme from '@hooks/useTheme';
import { Box } from '@mui/material';
import useStyles from './style';

const Header = () => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<>
			<Box sx={styles.root}>header</Box>
			<UIDivider />
		</>
	);
};

export default Header;
