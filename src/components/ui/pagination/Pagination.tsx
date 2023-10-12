import useTheme from '@hooks/useTheme';
import { Pagination } from '@mui/material';
import { ChangeEvent } from 'react';
import useStyles from './style';

export type UIPaginationPropsType = {
	count: number;
	page: number;
	onChange: (_e: ChangeEvent<unknown>, newPage: number) => void;
};

const UIPagination = ({ count, page, onChange }: UIPaginationPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Pagination
			count={count}
			variant='outlined'
			page={page}
			onChange={onChange}
			sx={styles.root}
		/>
	);
};

export default UIPagination;
