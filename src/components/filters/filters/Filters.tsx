import UIButton from '@components/ui/button/Button/Button';
import FilterGroup from '@components/ui/filter-group/FilterGroup';
import UICheckbox from '@components/ui/form/checkbox/checkbox/Checkbox';
import PriceRange from '@components/ui/form/price-range/PriceRange';
import UISelect from '@components/ui/form/select/Select';
import { EstatePropertyTypeEnum, EstateTypeEnum } from '@enums/estate.enum';
import {
	StyleFlexDirectionEnum,
	StyleVariantTypographyEnum,
} from '@enums/style.enum';
import {
	faCartShopping,
	faDoorOpen,
	faHouse,
} from '@fortawesome/free-solid-svg-icons';
import useTheme from '@hooks/useTheme';
import { Ifilter } from '@interfaces/hook.interface';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { EstateType } from '../../../types/estate.type';
import useStyles from './style';

type FiltersPropsType = {
	estates: EstateType[];
};

const Filters = ({ estates }: FiltersPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const location = useLocation();
	const [items, setItems] = useState<{ value: string; label: string }[]>([]);
	const [filters] = useState<Ifilter>({
		type: EstateTypeEnum.BUY,
		propertyType: EstatePropertyTypeEnum.APPARTMENT,
		rooms: '2',
		location: '',
		additionnal: {
			garage: 'off',
		},
		price: [10, 1000],
	});

	const roomsItems = ['1', '2', '3', '4+'];

	useEffect(() => {
		const datas = estates.map(item => item.city);
		setItems(
			[...new Set(datas)].map(item => ({
				value: item.toLowerCase().split(' ').join('-'),
				label: item,
			})),
		);
	}, []);

	return (
		<Box sx={styles.root}>
			<Typography variant='h5' sx={styles.titleSection}>
				Filters
			</Typography>

			<Box sx={styles.filtersListBox}>
				{(location.pathname === '/' || location.pathname === '/home') && (
					<FilterGroup titleGroup='Type'>
						<Box sx={styles.propertyTypeBox}>
							<UIButton
								startIcon={faCartShopping}
								direction={StyleFlexDirectionEnum.COLUMN}
								typoVariant={StyleVariantTypographyEnum.CAPTION}
								active={filters.type === EstateTypeEnum.BUY}
								onClick={() => {
									// todo
								}}
							>
								Buy
							</UIButton>

							<UIButton
								startIcon={faDoorOpen}
								direction={StyleFlexDirectionEnum.COLUMN}
								typoVariant={StyleVariantTypographyEnum.CAPTION}
								active={filters.type === EstateTypeEnum.RENT}
								onClick={() => {
									// todo
								}}
							>
								rent
							</UIButton>
						</Box>
					</FilterGroup>
				)}

				<FilterGroup titleGroup='Property type'>
					<Box sx={styles.propertyTypeBox}>
						<UIButton
							startIcon={faHouse}
							direction={StyleFlexDirectionEnum.COLUMN}
							typoVariant={StyleVariantTypographyEnum.CAPTION}
							active={filters.propertyType === EstatePropertyTypeEnum.HOUSE}
							onClick={() => {
								// todo
							}}
						>
							House
						</UIButton>

						<UIButton
							startIcon={faHouse}
							direction={StyleFlexDirectionEnum.COLUMN}
							typoVariant={StyleVariantTypographyEnum.CAPTION}
							active={
								filters.propertyType === EstatePropertyTypeEnum.APPARTMENT
							}
							onClick={() => {
								// todo
							}}
						>
							Apartment
						</UIButton>
					</Box>
				</FilterGroup>

				<FilterGroup titleGroup='Location'>
					<UISelect
						items={[{ value: 'all', label: 'All' }, ...items]}
						value={filters.location}
						onChange={() => {
							// todo
						}}
					/>
				</FilterGroup>

				<FilterGroup titleGroup='Price range'>
					<PriceRange
						min={10}
						max={500}
						onChange={() => {
							// todo
						}}
					/>
				</FilterGroup>

				<FilterGroup titleGroup='Rooms'>
					<Box sx={styles.roomsBox}>
						{roomsItems.map((item, i) => (
							<UIButton
								key={i}
								typoVariant={StyleVariantTypographyEnum.CAPTION}
								active={filters.rooms === item}
								width={30}
								onClick={() => {
									// todo
								}}
							>
								{item}
							</UIButton>
						))}
					</Box>
				</FilterGroup>

				<FilterGroup titleGroup='Additional conveniences'>
					<Box sx={styles.additionalBox}>
						<UICheckbox label='Garage' />
					</Box>
				</FilterGroup>
			</Box>
		</Box>
	);
};

export default Filters;
