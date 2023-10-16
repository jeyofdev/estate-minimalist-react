import useTheme from '@hooks/useTheme';
import { Box } from '@mui/material';
import { GlobalPropsType } from '../../../types/global-props.type';
import useStyles from './style';

type LayoutPagePropsType = Pick<GlobalPropsType, 'children'> & {
	renderFilters: JSX.Element;
};

const LayoutPage = ({ renderFilters, children }: LayoutPagePropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<Box sx={styles.filtersContainer}>{renderFilters}</Box>
			{children}
		</Box>
	);
};
export default LayoutPage;
