import { EstateTypeEnum } from '@enums/estate.enum';
import { Ifilter } from '@interfaces/hook.interface';
import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { EstateType } from '../types/estate.type';
import useFetchEstates from './useFetchEstates';

const useFilter = (filter: Ifilter, estateType?: EstateTypeEnum) => {
	const [currentFilters, setCurrentFilters] = useState(filter);
	const { loading, datas } = useFetchEstates(estateType);
	const [filteredDatas, setFilteredDatas] = useState(datas);

	const updateCurrentFilters = (
		e:
			| SelectChangeEvent
			| MouseEvent<HTMLElement>
			| ChangeEvent<HTMLInputElement>
			| Event,
		updatedFilter: string,
		newFilterValue?: string | boolean,
	) => {
		if (newFilterValue) {
			setCurrentFilters({ ...currentFilters, [updatedFilter]: newFilterValue });
		} else {
			setCurrentFilters({
				...currentFilters,
				[updatedFilter]: (e as SelectChangeEvent).target.value,
			});
		}
	};

	const getfilteredEstates = () => {
		let filteredEstates: EstateType[] = datas;

		if (currentFilters.propertyType) {
			filteredEstates = filteredEstates.filter(
				data => data.property_type === currentFilters.propertyType,
			);
		}

		if (currentFilters.rooms) {
			if (Number(currentFilters.rooms) < 4) {
				filteredEstates = filteredEstates.filter(
					data => String(data.rooms) === currentFilters.rooms,
				);
			} else {
				filteredEstates = filteredEstates.filter(data => data.rooms >= 4);
			}
		}

		if (currentFilters?.location !== 'all') {
			filteredEstates = filteredEstates.filter(
				data =>
					data.city.toLowerCase().split(' ').join('-') ===
					currentFilters.location,
			);
		}

		if (currentFilters.price) {
			filteredEstates = filteredEstates.filter(data => {
				if (estateType === EstateTypeEnum.BUY) {
					return (
						data.price_buy >= currentFilters.price[0] &&
						data.price_buy <= currentFilters.price[1]
					);
				}

				return (
					data.price_rent >= currentFilters.price[0] &&
					data.price_rent <= currentFilters.price[1]
				);
			});
		}

		setFilteredDatas(filteredEstates);
	};

	useEffect(() => {
		getfilteredEstates();
	}, [datas, currentFilters]);

	return {
		loading,
		datas,
		filters: currentFilters,
		setFilters: updateCurrentFilters,
		filteredDatas,
	};
};

export default useFilter;
