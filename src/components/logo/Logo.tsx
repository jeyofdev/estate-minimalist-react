import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

export type LogoPropsType = {
	title: string;
};

const Logo = ({ title }: LogoPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<FontAwesomeIcon icon={faHouse} style={styles.icon} />

			<Typography variant='h5' sx={styles.typo}>
				{title}
			</Typography>
		</Box>
	);
};

export default Logo;
