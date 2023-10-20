import ResponsiveFilters from '@components/filters/responsive-filter/ResponsiveFilter';
import NoResult from '@components/no-result/NoResult';
import UIChip from '@components/ui/chip/Chip';
import Loader from '@components/ui/loader/Loader';
import UIPagination from '@components/ui/pagination/Pagination';
import { EstateTypeEnum } from '@enums/estate.enum';
import { BreakpointEnum } from '@enums/theme.enum';
import {
	faHospital,
	faHouseUser,
	faSquareParking,
} from '@fortawesome/free-solid-svg-icons';
import usePagination from '@hooks/usePagination';
import useTheme from '@hooks/useTheme';
import { Ifilter } from '@interfaces/hook.interface';
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	SelectChangeEvent,
	Typography,
} from '@mui/material';
import { formatPrice } from '@utils/index';
import {
	ChangeEvent,
	Dispatch,
	MouseEvent,
	SetStateAction,
	useState,
} from 'react';
import estateImg from '../../../assets/estate.jpg';
import { EstateType } from '../../../types/estate.type';
import useStyles from './style';

export type EstateListPropsType = {
	loading: boolean;
	estates: EstateType[];
	defaultFilters: Ifilter;
	filters: Ifilter;
	setFilters: (
		e:
			| SelectChangeEvent
			| MouseEvent<HTMLElement>
			| ChangeEvent<HTMLInputElement>
			| Event,
		isAdditionnal: boolean,
		updatedFilter: string,
		newFilterValue?: string | boolean,
	) => void;
	setActiveEstateId: Dispatch<SetStateAction<string | undefined>>;
	setModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

const EstateList = ({
	loading,
	estates,
	defaultFilters,
	filters,
	setFilters,
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
			{loading && <Loader />}
			{!loading && (
				<>
					<>
						<Box sx={styles.topBox(!!estates.length)}>
							{estates.length ? (
								<Typography variant='h5' sx={styles.titleSection}>
									Search Results ({estates.length})
								</Typography>
							) : null}

							<ResponsiveFilters
								breakpoint={BreakpointEnum.MD}
								estates={estates}
								defaultFilters={defaultFilters}
								filters={filters}
								setFilters={setFilters}
							/>
						</Box>

						{estates.length ? (
							<>
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

													<Box>
														<Typography variant='h6' sx={styles.cardTitle}>
															{estate.name}
														</Typography>

														<Typography
															variant='caption'
															sx={styles.cardAddress}
														>
															{estate.address}, {estate?.city}
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
															icon={faHouseUser}
															tooltipLabel='Surface'
															tooltipArrow
														/>
														{estate.garage && (
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
									<UIPagination
										count={count}
										page={page}
										onChange={handleChange}
									/>
								</Box>
							</>
						) : (
							<NoResult content='No Results found' />
						)}
					</>
				</>
			)}
		</Box>
	);
};

export default EstateList;
