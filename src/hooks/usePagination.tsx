import { useEffect, useState } from 'react';
import { EstateType } from '../types/estate.type';

/**
 * Set a pagination
 */
const usePagination = (estates: EstateType[]) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [estatesByPage, setEstatesByPage] = useState<EstateType[]>([]);

	const itemsPerPage = 5;
	const count = Math.ceil(estates.length / itemsPerPage);

	const currentEstatesByPage = () => {
		const begin = (currentPage - 1) * itemsPerPage;
		const end = begin + itemsPerPage;
		setEstatesByPage(estates.slice(begin, end));
	};

	/**
	 * Go to the next page of the pagination
	 */
	const nextPage = () => {
		setCurrentPage(Math.min(currentPage + 1, count));
	};

	/**
	 * Go to the previous page of the pagination
	 */
	const prevPage = () => {
		setCurrentPage(Math.max(currentPage - 1, 1));
	};

	/**
	 * go to a specific page in the pagination
	 */
	const jumpToPage = (page: number) => {
		const pageNumber = Math.max(1, page);
		setCurrentPage(Math.min(pageNumber, count));
	};

	useEffect(() => {
		currentEstatesByPage();
	}, [currentPage]);

	return {
		nextPage,
		prevPage,
		jumpToPage,
		estatesByPage,
		currentPage,
		count,
	};
};

export default usePagination;
