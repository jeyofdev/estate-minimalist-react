import HeaderContainer from '@components/header/headerContainer/HeaderContainer';
import useTheme from '@hooks/useTheme';
import { Box } from '@mui/material';
import { GlobalPropsType } from '../../types/global-props.type';
import useStyles from './style';

export type LayoutPropsType = Pick<GlobalPropsType, 'children'>;

const Layout = ({ children }: LayoutPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<Box sx={styles.contentBox}>
				<Box>
					<HeaderContainer />
				</Box>

				<Box sx={styles.contentPage}>{children}</Box>
			</Box>
		</Box>
	);
};

export default Layout;
