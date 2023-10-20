import UIButton from '@components/ui/button/Button/Button';
import FilterGroup from '@components/ui/filter-group/FilterGroup';
import UICheckbox from '@components/ui/form/checkbox/checkbox/Checkbox';
import PriceRange from '@components/ui/form/price-range/PriceRange';
import UISelect from '@components/ui/form/select/Select';
import { EstatePropertyTypeEnum, EstateTypeEnum } from '@enums/estate.enum';
import { FilterNameEnum } from '@enums/filter.enum';
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
import { Box, SelectChangeEvent, Typography } from '@mui/material';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { EstateType } from '../../../types/estate.type';
import useStyles from './style';

export type FiltersPropsType = {
	estates: EstateType[];
	defaultFilters: Ifilter;
	filters: Ifilter;
	setFilters: (
		e:
			| SelectChangeEvent
			| MouseEvent<HTMLElement>
			| ChangeEvent<HTMLInputElement>
			| Event,
		isAdditionnal: boolean,
		updatedFilter: string,
		newFilterValue?: string | boolean,
	) => void;
};

const Filters = ({
	estates,
	defaultFilters,
	filters,
	setFilters,
}: FiltersPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const location = useLocation();
	const [items, setItems] = useState<{ value: string; label: string }[]>([]);

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
								onClick={(e: MouseEvent<HTMLElement>) =>
									setFilters(e, false, FilterNameEnum.TYPE, EstateTypeEnum.BUY)
								}
							>
								Buy
							</UIButton>

							<UIButton
								startIcon={faDoorOpen}
								direction={StyleFlexDirectionEnum.COLUMN}
								typoVariant={StyleVariantTypographyEnum.CAPTION}
								active={filters.type === EstateTypeEnum.RENT}
								onClick={(e: MouseEvent<HTMLElement>) =>
									setFilters(e, false, FilterNameEnum.TYPE, EstateTypeEnum.RENT)
								}
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
							onClick={(e: MouseEvent<HTMLElement>) =>
								setFilters(
									e,
									false,
									FilterNameEnum.PROPERTY_TYPE,
									EstatePropertyTypeEnum.HOUSE,
								)
							}
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
							onClick={(e: MouseEvent<HTMLElement>) =>
								setFilters(
									e,
									false,
									FilterNameEnum.PROPERTY_TYPE,
									EstatePropertyTypeEnum.APPARTMENT,
								)
							}
						>
							Apartment
						</UIButton>
					</Box>
				</FilterGroup>

				<FilterGroup titleGroup='Location'>
					<UISelect
						items={[{ value: 'all', label: 'All' }, ...items]}
						value={filters.location}
						onChange={e => setFilters(e, false, FilterNameEnum.LOCATION)}
					/>
				</FilterGroup>

				<FilterGroup titleGroup='Price range'>
					<PriceRange
						min={defaultFilters.price[0]}
						max={defaultFilters.price[1]}
						onChange={(e: Event) => {
							setFilters(
								e,
								false,
								FilterNameEnum.PRICE,
								(e.target as HTMLInputElement)?.value,
							);
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
								onClick={(e: MouseEvent<HTMLElement>) =>
									setFilters(e, false, FilterNameEnum.ROOMS, item)
								}
							>
								{item}
							</UIButton>
						))}
					</Box>
				</FilterGroup>

				<FilterGroup titleGroup='Additional conveniences'>
					<Box sx={styles.additionalBox}>
						<UICheckbox
							label='Garage'
							checked={filters.additionnal.garage}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setFilters(e, true, FilterNameEnum.GARAGE);
							}}
						/>

						<UICheckbox
							label='Pool'
							checked={filters.additionnal.pool}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setFilters(e, true, FilterNameEnum.POOL);
							}}
						/>
					</Box>
				</FilterGroup>
			</Box>
		</Box>
	);
};

export default Filters;
