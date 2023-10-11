import Logo from '@components/logo/Logo';
import useTheme from '@hooks/useTheme';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import useStyles from './style';

export type HeaderBarPropsType = {
	handleDrawerToggle: () => void;
	navItems: string[];
	logoText: string;
};

const HeaderBar = ({
	handleDrawerToggle,
	navItems,
	logoText,
}: HeaderBarPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<AppBar component='nav' sx={styles.appBar}>
			<Toolbar>
				<IconButton
					color='inherit'
					aria-label='open drawer'
					edge='start'
					onClick={handleDrawerToggle}
					sx={styles.iconButton}
				>
					<MenuIcon sx={styles.menuIcon} />
				</IconButton>

				<Logo title={logoText} />

				<Box sx={styles.linksBox}>
					{navItems.map(item => (
						<Button key={item} sx={styles.linkBtn}>
							{item}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default HeaderBar;
