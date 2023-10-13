import UIButton from '@components/ui/button/Button';
import FilterGroup from '@components/ui/filter-group/FilterGroup';
import {
	StyleFlexDirectionEnum,
	StyleVariantTypographyEnum,
} from '@enums/style.enum';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import useTheme from '@hooks/useTheme';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import useStyles from './style';

const Filters = () => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const [filters] = useState({
		propertyType: {
			house: false,
			apartment: true,
		},
		rooms: '2',
	});

	const roomsItems = ['1', '2', '3', '4+'];

	return (
		<Box sx={styles.root}>
			<Typography variant='h5' sx={styles.titleSection}>
				Filters
			</Typography>
			<Box sx={styles.filtersListBox}>
				<FilterGroup titleGroup='Property type'>
					<Box sx={styles.propertyTypeBox}>
						<UIButton
							startIcon={faHouse}
							direction={StyleFlexDirectionEnum.COLUMN}
							typoVariant={StyleVariantTypographyEnum.CAPTION}
							active={filters.propertyType.house}
						>
							House
						</UIButton>

						<UIButton
							startIcon={faHouse}
							direction={StyleFlexDirectionEnum.COLUMN}
							typoVariant={StyleVariantTypographyEnum.CAPTION}
							active={filters.propertyType.apartment}
						>
							Apartment
						</UIButton>
					</Box>
				</FilterGroup>

				<FilterGroup titleGroup='Location'>
					<Box>content</Box>
				</FilterGroup>

				<FilterGroup titleGroup='Price range'>
					<Box>content</Box>
				</FilterGroup>

				<FilterGroup titleGroup='Rooms'>
					<Box sx={styles.roomsBox}>
						{roomsItems.map((item, i) => (
							<UIButton
								key={i}
								typoVariant={StyleVariantTypographyEnum.CAPTION}
								active={filters.rooms === item}
								width={30}
							>
								{item}
							</UIButton>
						))}
					</Box>
				</FilterGroup>

				<FilterGroup titleGroup='Additional conveniences'>
					<Box>content</Box>
				</FilterGroup>
			</Box>
		</Box>
	);
};

export default Filters;
