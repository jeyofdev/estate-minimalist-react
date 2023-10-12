import UIChip from '@components/ui/chip/Chip';
import UIPagination from '@components/ui/pagination/Pagination';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
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
import { ChangeEvent, useState } from 'react';
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
					<Typography variant='h5'>
						Search Results ({estates.length})
					</Typography>

					<Box sx={styles.list}>
						{estatesByPage.map((estate, i) => (
							<Card key={i} sx={styles.card}>
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

										<Box sx={styles.chipsBox}>
											<UIChip label={estate.rooms} icon={faHospital} />
											<UIChip label={`${estate.surface}m²`} icon={faHospital} />
											<UIChip
												label={`${estate.garage} garage`}
												icon={faHospital}
											/>
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
