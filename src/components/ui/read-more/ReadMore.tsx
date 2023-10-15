import useTheme from '@hooks/useTheme';
import { Button, Typography } from '@mui/material';
import { truncate } from '@utils/index';
import { useState } from 'react';
import useStyles from './style';

type ReadMorePropsType = {
	content: string;
	truncateLimit: number;
};
const ReadMore = ({ content, truncateLimit }: ReadMorePropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const [readMore, setReadMore] = useState(false);
	const linkLabel = readMore ? 'Hide' : 'Read More';

	return (
		<>
			{readMore ? content : truncate(content, truncateLimit)}
			{}
			<Button
				variant='text'
				disableRipple
				sx={styles.btn}
				onClick={() => {
					setReadMore(!readMore);
				}}
			>
				<Typography variant='h6' sx={styles.btnTypo}>
					{linkLabel}
				</Typography>
			</Button>
		</>
	);
};

export default ReadMore;
