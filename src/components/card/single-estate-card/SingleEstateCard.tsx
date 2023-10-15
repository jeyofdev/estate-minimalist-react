import UIChip from '@components/ui/chip/Chip';
import { faHospital, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

									<Box sx={styles.addressBox}>
										<FontAwesomeIcon icon={faLocationDot} style={styles.icon} />
										<Typography variant='h6' sx={styles.address}>
											{estate.address}
										</Typography>
									</Box>
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

							<Box sx={styles.chipsBox}>
								<UIChip
									label={`${estate.surface}m²`}
									icon={faHospital}
									tooltipLabel='Surface'
									tooltipArrow
								/>
								<UIChip
									label={`${estate.bedroom} Bedrooms`}
									icon={faHospital}
									tooltipLabel='Rooms'
									tooltipArrow
								/>
								<UIChip
									label={`${estate.bathroom} Bathrooms`}
									icon={faHospital}
									tooltipLabel='Rooms'
									tooltipArrow
								/>
								{estate.garage > 0 && (
									<UIChip
										label={`${estate.garage} Garage`}
										icon={faHospital}
										tooltipLabel='Garage'
										tooltipArrow
									/>
								)}
								{estate.pool > 0 && (
									<UIChip
										label='Pool'
										icon={faHospital}
										tooltipLabel='Garage'
										tooltipArrow
									/>
								)}
							</Box>

							<Box sx={styles.detailsBox}>
								<Typography variant='h6' sx={styles.detailsSection}>
									Properties details
								</Typography>

								<Typography variant='body1' sx={styles.details}>
									{estate.details}
								</Typography>
							</Box>
						</CardContent>
					</Card>
				</>
			)}
		</>
	);
};

export default SingleEstateCard;
