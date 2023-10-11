import Logo from '@components/logo/Logo';
import UIDivider from '@components/ui/divider/Divider';
import useTheme from '@hooks/useTheme';
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import routesList from '@routes/routes';
import { NavLink } from 'react-router-dom';
import useStyles from './style';

export type NavPropsType = {
	handleDrawerToggle: () => void;
	logoText: string;
};

const Nav = ({ handleDrawerToggle, logoText }: NavPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	const routes = routesList.filter((_, i) => i > 0);

	return (
		<Box onClick={handleDrawerToggle} sx={styles.root}>
			<Box sx={styles.logoBox}>
				<Logo title={logoText} />
			</Box>

			<UIDivider
				borderColor={theme.palette.background.default}
				margin='1rem 0'
			/>

			<List sx={styles.navlist}>
				{routes.map(route => (
					<ListItem
						key={route.name.toLowerCase().split(' ').join('-')}
						disablePadding
					>
						<ListItemButton
							sx={styles.listItemBtn}
							component={NavLink}
							to={route.path}
						>
							<ListItemText primary={route.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default Nav;
