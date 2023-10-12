import { Box, Typography } from '@mui/material';
import { EstateType } from '../../../types/estate.type';
import useStyles from './style';

export type EstateListPropsType = {
	loading: boolean;
	estates: EstateType[];
};

const EstateList = ({ loading, estates }: EstateListPropsType) => {
	const styles = useStyles();

	return (
		<Box sx={styles.root}>
			{loading && <Typography>...loading</Typography>}
			{!loading && (
				<Typography variant='h5'>Search Results ({estates.length})</Typography>
			)}
		</Box>
	);
};

export default EstateList;
