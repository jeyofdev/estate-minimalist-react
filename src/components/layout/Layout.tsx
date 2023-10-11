import HeaderContainer from '@components/header/headerContainer/HeaderContainer';
import useTheme from '@hooks/useTheme';
import { Box, Button } from '@mui/material';
import { GlobalPropsType } from '../../types/global-props.type';
import useStyles from './style';

export type LayoutPropsType = Pick<GlobalPropsType, 'children'>;

const Layout = ({ children }: LayoutPropsType) => {
	const { theme, handleThemeMode } = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<Box sx={styles.contentBox}>
				<Box>
					<HeaderContainer />
					<Button variant='contained' onClick={handleThemeMode}>
						dark mode
					</Button>
				</Box>
				{children}
			</Box>
		</Box>
	);
};

export default Layout;
