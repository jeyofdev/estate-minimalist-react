/**
 * Limit text by number words
 */
export const truncate = (text: string, limit: number): string => {
	const { length } = text.split(' ');

	return length <= limit
		? text
		: `${text.split(' ').slice(0, limit).join(' ')}...`;
};

/**
 * Format currency price
 */
export const formatPrice = (price: number, locales: string): string => {
	const currencyFormat = new Intl.NumberFormat(locales);
	return currencyFormat.format(price);
};

/**
 * Format estate title
 */
export const formatTitle = (title: string): string =>
	title.slice(0, 1).toUpperCase() + title.slice(1);
