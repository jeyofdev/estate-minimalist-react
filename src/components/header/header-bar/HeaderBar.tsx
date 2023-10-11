import Logo from '@components/logo/Logo';
import { BreakpointEnum } from '@enums/theme.enum';
import useTheme from '@hooks/useTheme';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import { useWindowSize } from 'usehooks-ts';
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
	const { width } = useWindowSize();

	return (
		<AppBar component='nav' sx={styles.appBar}>
			<Toolbar>
				{width < BreakpointEnum.SM && (
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
					>
						<MenuIcon sx={styles.menuIcon} />
					</IconButton>
				)}

				{width >= BreakpointEnum.SM && (
					<>
						<Logo title={logoText} />

						<Box>
							{navItems.map(item => (
								<Button key={item} sx={styles.linkBtn}>
									{item}
								</Button>
							))}
						</Box>
					</>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default HeaderBar;
