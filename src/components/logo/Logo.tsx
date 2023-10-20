import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './style';

export type LogoPropsType = {
	title: string;
	heightBox?: number | 'auto';
	mobile?: boolean;
};

const Logo = ({ title, heightBox = 'auto', mobile = false }: LogoPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Link to='/home' style={styles.link}>
			<Box sx={styles.root(heightBox, mobile)}>
				<FontAwesomeIcon icon={faHouse} style={styles.icon} />

				<Typography variant='h5' sx={styles.typo}>
					{title}
				</Typography>
			</Box>
		</Link>
	);
};

export default Logo;
