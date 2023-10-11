import useTheme from '@hooks/useTheme';
import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Box,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import useStyles from './style';

export type HeaderBarPropsType = {
	handleDrawerToggle: () => void;
	navItems: string[];
	brand: string;
};

const HeaderBar = ({
	handleDrawerToggle,
	navItems,
	brand,
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

				<Typography variant='h6' component='div' sx={styles.brandTypo}>
					{brand}
				</Typography>

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
