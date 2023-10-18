import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

type NoResultPropsType = {
	content: string;
};

const NoResult = ({ content }: NoResultPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<Box sx={styles.contentBox}>
				<Typography variant='h3' sx={styles.content}>
					{content}
				</Typography>
				<FontAwesomeIcon icon={faFaceFrown} style={styles.icon} />
			</Box>
		</Box>
	);
};

export default NoResult;
