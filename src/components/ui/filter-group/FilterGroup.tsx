import useTheme from '@hooks/useTheme';
import { Box, Typography } from '@mui/material';
import { GlobalPropsType } from '../../../types/global-props.type';
import useStyles from './style';

export type FilterGroupPropsType = Pick<GlobalPropsType, 'children'> & {
	titleGroup: string;
};

const FilterGroup = ({ titleGroup, children }: FilterGroupPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<Typography variant='h6' sx={styles.title}>
				{titleGroup}
			</Typography>

			{children}
		</Box>
	);
};

export default FilterGroup;
