import { Ifilter } from '@interfaces/hook.interface';
import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, MouseEvent, useState } from 'react';

const useFilter = (filter: Ifilter) => {
	const [currentFilters, setCurrentFilters] = useState(filter);

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

	return {
		filters: currentFilters,
		setFilters: updateCurrentFilters,
	};
};

export default useFilter;
