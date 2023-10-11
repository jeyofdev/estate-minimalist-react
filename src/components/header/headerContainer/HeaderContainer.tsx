import NavResponsiveDrawer from '@components/header/nav-responsive-drawer/NavResponsiveDrawer';
import UIDivider from '@components/ui/divider/Divider';
import useTheme from '@hooks/useTheme';
import { Box } from '@mui/material';
import routesList from '@routes/routes';
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

	const navItems = routesList.map(route => route.name).filter((_, i) => i > 0);

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
					navItems={navItems}
					brand='Estate'
				/>

				<NavResponsiveDrawer
					container={container}
					drawerWidth={240}
					mobileOpen={mobileOpen}
					handleDrawerToggle={handleDrawerToggle}
					navItems={navItems}
					brand='Estate'
				/>
			</Box>
			<UIDivider />
		</>
	);
};

export default HeaderContainer;
