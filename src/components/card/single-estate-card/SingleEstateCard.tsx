import UIChip from '@components/ui/chip/Chip';
import Loader from '@components/ui/loader/Loader';
import ReadMore from '@components/ui/read-more/ReadMore';
import { EstateTypeEnum } from '@enums/estate.enum';
import {
	faBath,
	faBed,
	faHouseUser,
	faLocationDot,
	faPersonSwimming,
	faSquareParking,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetchEstate from '@hooks/useFetchEstate';
import useTheme from '@hooks/useTheme';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { formatPrice } from '@utils/index';
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
		return <Loader />;
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
									{estate?.address}, {estate?.city}
								</Typography>
							</Box>
						</Box>

						<Box sx={styles.priceBox}>
							<Typography variant='h4' sx={styles.priceTypo}>
								$
								{estate.type === EstateTypeEnum.RENT
									? formatPrice(estate.price_rent, 'en-US')
									: formatPrice(estate.price_buy, 'en-US')}
							</Typography>

							{estate.type === EstateTypeEnum.RENT && (
								<Typography variant='h6' sx={styles.priceMonth}>
									/ month
								</Typography>
							)}
						</Box>
					</Box>

					<Box sx={styles.chipsBox}>
						<UIChip
							label={`${estate?.surface}m²`}
							icon={faHouseUser}
							tooltipLabel='Surface'
							tooltipArrow
						/>
						<UIChip
							label={`${estate?.bedroom} Bedrooms`}
							icon={faBed}
							tooltipLabel='Bedrooms'
							tooltipArrow
						/>
						<UIChip
							label={`${estate?.bathroom} Bathrooms`}
							icon={faBath}
							tooltipLabel='Bathrooms'
							tooltipArrow
						/>
						{estate?.garage && (
							<UIChip
								label='1 Garage'
								icon={faSquareParking}
								tooltipLabel='Garage'
								tooltipArrow
							/>
						)}
						{estate?.pool && (
							<UIChip
								label='1 Pool'
								icon={faPersonSwimming}
								tooltipLabel='Pool'
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
