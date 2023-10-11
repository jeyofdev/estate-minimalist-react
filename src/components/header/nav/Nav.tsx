import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from '@mui/material';
import useStyles from './style';

export type NavPropsType = {
	handleDrawerToggle: () => void;
	navItems: string[];
	brand: string;
};

const Nav = ({ handleDrawerToggle, navItems, brand }: NavPropsType) => {
	const styles = useStyles();

	return (
		<Box onClick={handleDrawerToggle} sx={styles.root}>
			<Typography variant='h6' sx={styles.title}>
				{brand}
			</Typography>

			<Divider />

			<List>
				{navItems.map(item => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={styles.listItemBtn}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default Nav;
