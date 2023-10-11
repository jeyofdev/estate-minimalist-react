import Nav from '@components/header/nav/Nav';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, IconButton } from '@mui/material';
import useStyles from './style';

export type NavResponsiveDrawerPropsType = {
	container: (() => HTMLElement) | undefined;
	mobileOpen: boolean;
	drawerWidth: number;
	handleDrawerToggle: () => void;
	logoText: string;
};

const NavResponsiveDrawer = ({
	container,
	mobileOpen,
	handleDrawerToggle,
	drawerWidth = 240,
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
				<IconButton
					disableRipple
					sx={styles.closeBtn}
					onClick={handleDrawerToggle}
				>
					<FontAwesomeIcon icon={faCircleXmark} style={styles.closeBtnIcon} />
				</IconButton>

				<Nav handleDrawerToggle={handleDrawerToggle} logoText={logoText} />
			</Drawer>
		</nav>
	);
};

export default NavResponsiveDrawer;
