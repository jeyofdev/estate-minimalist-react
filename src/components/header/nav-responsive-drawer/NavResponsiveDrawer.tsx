import Nav from '@components/header/nav/Nav';
import { Drawer } from '@mui/material';
import useStyles from './style';

export type NavResponsiveDrawerPropsType = {
	container: (() => HTMLElement) | undefined;
	mobileOpen: boolean;
	drawerWidth: number;
	handleDrawerToggle: () => void;
	navItems: string[];
	logoText: string;
};

const NavResponsiveDrawer = ({
	container,
	mobileOpen,
	handleDrawerToggle,
	drawerWidth = 240,
	navItems,
	logoText,
}: NavResponsiveDrawerPropsType) => {
	const styles = useStyles();

	return (
		<nav>
			<Drawer
				container={container}
				variant='temporary'
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true,
				}}
				sx={styles.root(drawerWidth)}
			>
				<Nav
					handleDrawerToggle={handleDrawerToggle}
					navItems={navItems}
					logoText={logoText}
				/>
			</Drawer>
		</nav>
	);
};

export default NavResponsiveDrawer;
