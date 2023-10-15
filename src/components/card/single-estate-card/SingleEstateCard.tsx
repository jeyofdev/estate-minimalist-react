import useTheme from '@hooks/useTheme';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import defaultEstateImg from '../../../assets/estate.jpg';
import { EstateType } from '../../../types/estate.type';
import useStyles from './style';

export type SingleEstateCardPropsType = {
	loading: boolean;
	estate: EstateType;
};

const SingleEstateCard = ({ loading, estate }: SingleEstateCardPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<>
			{loading && <Typography>...loading</Typography>}
			{!loading && (
				<>
					<Card sx={styles.root}>
						<CardMedia
							component='img'
							height='200'
							image={defaultEstateImg}
							alt='green iguana'
						/>
						<CardContent sx={styles.contentBox}>
							<Box sx={styles.topBox}>
								<Box sx={styles.nameBox}>
									<Typography variant='h4' sx={styles.title}>
										{estate.name}
									</Typography>

									<Typography variant='h6' sx={styles.address}>
										{estate.address}
									</Typography>
								</Box>

								<Box sx={styles.priceBox}>
									<Typography variant='h4' sx={styles.priceTypo}>
										€{estate.price_rent}
									</Typography>

									<Typography variant='h6' sx={styles.priceMonth}>
										/ month
									</Typography>
								</Box>
							</Box>
						</CardContent>
					</Card>
				</>
			)}
		</>
	);
};

export default SingleEstateCard;
