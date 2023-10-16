import NavResponsiveDrawer from '@components/header/nav-responsive-drawer/NavResponsiveDrawer';
import UIDivider from '@components/ui/divider/Divider';
import useTheme from '@hooks/useTheme';
import { Box } from '@mui/material';
import { useState } from 'react';
import HeaderBar from '../header-bar/HeaderBar';
import useStyles from './style';

export type HeaderContainerPropsType = {
	window?: () => Window;
};

const HeaderContainer = ({ window }: HeaderContainerPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<Box sx={styles.root}>
				<HeaderBar
					handleDrawerToggle={handleDrawerToggle}
					logoText='Real Estate'
				/>

				<NavResponsiveDrawer
					container={container}
					drawerWidth={240}
					mobileOpen={mobileOpen}
					handleDrawerToggle={handleDrawerToggle}
					logoText='Real Estate'
				/>

				<UIDivider margin='64px 0px 0px' position='fixed' />
			</Box>
		</>
	);
};

export default HeaderContainer;
