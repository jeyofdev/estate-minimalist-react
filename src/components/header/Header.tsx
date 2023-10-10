import UIDivider from '@components/ui/divider/Divider';
import { Box } from '@mui/material';
import useStyles from './style';

const Header = () => {
	const styles = useStyles();

	return (
		<>
			<Box sx={styles.root}>header</Box>
			<UIDivider />
		</>
	);
};

export default Header;
