import UIChip from '@components/ui/chip/Chip';
import ReadMore from '@components/ui/read-more/ReadMore';
import { faHospital, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetchEstate from '@hooks/useFetchEstate';
import useTheme from '@hooks/useTheme';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import defaultEstateImg from '../../../assets/estate.jpg';
import useStyles from './style';

export type SingleEstateCardPropsType = {
	activeEstateId: string;
	limitDetails: number;
};

const SingleEstateCard = ({
	activeEstateId,
	limitDetails,
}: SingleEstateCardPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const { datas: estate, loading } = useFetchEstate(activeEstateId);

	if (loading || !activeEstateId) {
		return <Typography>...loading</Typography>;
	}

	if (estate) {
		return (
			<Card sx={styles.root}>
				<CardMedia
					component='img'
					height='300'
					image={defaultEstateImg}
					alt='green iguana'
				/>
				<CardContent sx={styles.contentBox}>
					<Box sx={styles.topBox}>
						<Box sx={styles.nameBox}>
							<Typography variant='h4' sx={styles.title}>
								{estate?.name}
							</Typography>

							<Box sx={styles.addressBox}>
								<FontAwesomeIcon icon={faLocationDot} style={styles.icon} />
								<Typography variant='h6' sx={styles.address}>
									{estate?.address}
								</Typography>
							</Box>
						</Box>

						<Box sx={styles.priceBox}>
							<Typography variant='h4' sx={styles.priceTypo}>
								€{estate?.price_rent}
							</Typography>

							<Typography variant='h6' sx={styles.priceMonth}>
								/ month
							</Typography>
						</Box>
					</Box>

					<Box sx={styles.chipsBox}>
						<UIChip
							label={`${estate?.surface}m²`}
							icon={faHospital}
							tooltipLabel='Surface'
							tooltipArrow
						/>
						<UIChip
							label={`${estate?.bedroom} Bedrooms`}
							icon={faHospital}
							tooltipLabel='Rooms'
							tooltipArrow
						/>
						<UIChip
							label={`${estate?.bathroom} Bathrooms`}
							icon={faHospital}
							tooltipLabel='Rooms'
							tooltipArrow
						/>
						{estate?.garage > 0 && (
							<UIChip
								label={`${estate?.garage} Garage`}
								icon={faHospital}
								tooltipLabel='Garage'
								tooltipArrow
							/>
						)}
						{estate?.pool > 0 && (
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

						<Typography variant='h6' sx={styles.details}>
							<ReadMore
								content={estate?.details}
								truncateLimit={limitDetails}
							/>
						</Typography>
					</Box>
				</CardContent>
			</Card>
		);
	}

	return <></>;
};

export default SingleEstateCard;
