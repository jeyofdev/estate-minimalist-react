import ResponsiveFilters from '@components/filters/responsive-filter/ResponsiveFilter';
import UIChip from '@components/ui/chip/Chip';
import UIPagination from '@components/ui/pagination/Pagination';
import { EstateTypeEnum } from '@enums/estate.enum';
import { BreakpointEnum } from '@enums/theme.enum';
import { faHospital, faSquareParking } from '@fortawesome/free-solid-svg-icons';
import usePagination from '@hooks/usePagination';
import useTheme from '@hooks/useTheme';
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import estateImg from '../../../assets/estate.jpg';
import { EstateType } from '../../../types/estate.type';
import useStyles from './style';

export type EstateListPropsType = {
	loading: boolean;
	estates: EstateType[];
	setActiveEstateId: Dispatch<SetStateAction<string | undefined>>;
	setModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

const EstateList = ({
	loading,
	estates,
	setActiveEstateId,
	setModalIsOpen,
}: EstateListPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const [page, setPage] = useState(1);

	const { estatesByPage, jumpToPage, count } = usePagination(estates);

	const handleChange = (_e: ChangeEvent<unknown>, newPage: number) => {
		setPage(newPage);
		jumpToPage(newPage);
	};

	return (
		<Box sx={styles.root}>
			{loading && <Typography>...loading</Typography>}
			{!loading && (
				<>
					<Box sx={styles.topBox}>
						<Typography variant='h5' sx={styles.titleSection}>
							Search Results ({estates.length})
						</Typography>

						<ResponsiveFilters
							breakpoint={BreakpointEnum.MD}
							estates={estates}
						/>
					</Box>

					<Box sx={styles.list}>
						{estatesByPage.map((estate, i) => (
							<Card
								key={i}
								sx={styles.card}
								onClick={() => {
									setActiveEstateId(estate.id);
									setModalIsOpen(true);
								}}
							>
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

											{estate.type === EstateTypeEnum.RENT && (
												<Typography variant='h6' sx={styles.priceMonth}>
													/ month
												</Typography>
											)}
										</Box>

										<Box>
											<Typography variant='h6' sx={styles.cardTitle}>
												{estate.name}
											</Typography>

											<Typography variant='caption' sx={styles.cardAddress}>
												{estate.address}
											</Typography>
										</Box>

										<Box sx={styles.chipsBox}>
											<UIChip
												label={estate.rooms}
												icon={faHospital}
												tooltipLabel='Rooms'
												tooltipArrow
											/>
											<UIChip
												label={`${estate.surface}m²`}
												icon={faHospital}
												tooltipLabel='Surface'
												tooltipArrow
											/>
											{estate.garage > 0 && (
												<UIChip
													label={`${estate.garage} Garage`}
													icon={faSquareParking}
													tooltipLabel='Garage'
													tooltipArrow
												/>
											)}
										</Box>
									</CardContent>
								</CardActionArea>
							</Card>
						))}
					</Box>

					<Box sx={styles.paginationBox}>
						<UIPagination count={count} page={page} onChange={handleChange} />
					</Box>
				</>
			)}
		</Box>
	);
};

export default EstateList;
