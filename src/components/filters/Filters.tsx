import FilterGroup from '@components/ui/filter-group/FilterGroup';
import useTheme from '@hooks/useTheme';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

const Filters = () => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<Typography variant='h5' sx={styles.titleSection}>
				Filters
			</Typography>
			<Box sx={styles.filtersListBox}>
				<FilterGroup titleGroup='Property type'>content</FilterGroup>
				<FilterGroup titleGroup='Location'>content</FilterGroup>
				<FilterGroup titleGroup='Price range'>content</FilterGroup>
				<FilterGroup titleGroup='Rooms'>content</FilterGroup>
				<FilterGroup titleGroup='Additional conveniences'>content</FilterGroup>
			</Box>
		</Box>
	);
};

export default Filters;
