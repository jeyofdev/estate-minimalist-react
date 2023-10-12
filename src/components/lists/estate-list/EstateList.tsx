import useTheme from '@hooks/useTheme';
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import estateImg from '../../../assets/estate.jpg';
import { EstateType } from '../../../types/estate.type';
import useStyles from './style';

export type EstateListPropsType = {
	loading: boolean;
	estates: EstateType[];
};

const EstateList = ({ loading, estates }: EstateListPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			{loading && <Typography>...loading</Typography>}
			{!loading && (
				<>
					<Typography variant='h5'>
						Search Results ({estates.length})
					</Typography>

					<Box sx={styles.list}>
						{estates.map(estate => (
							<Card key={estate.name} sx={styles.card}>
								<CardActionArea sx={styles.cardActionArea}>
									<CardMedia
										component='img'
										height='140'
										image={estateImg}
										alt='green iguana'
										sx={styles.cardImg}
									/>
									<CardContent sx={styles.cardContent}>
										<Box sx={styles.cardPrice}>
											<Typography variant='h5' sx={styles.priceTypo}>
												€{estate.price_rent}
											</Typography>
											<Typography variant='h6' sx={styles.priceMonth}>
												/ month
											</Typography>
										</Box>

										<Box>
											<Typography variant='h6' sx={styles.cardTitle}>
												{estate.name}
											</Typography>

											<Typography variant='caption' sx={styles.cardAddress}>
												{estate.address}
											</Typography>
										</Box>
									</CardContent>
								</CardActionArea>
							</Card>
						))}
					</Box>
				</>
			)}
		</Box>
	);
};

export default EstateList;
