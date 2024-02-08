import { FC, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, EffectCreative, Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import Timer from '../../../../components/Timer/Timer';
import Spinner from '../../../../components/Spinner/Spinner';

import 'swiper/css/pagination';
import {
	selectProductsOnePerCategory,
	selectLoadingProductsOnePerCategory,
} from '../../../products/selectors';
import { loadProductsOnePerCategory } from '../../../products/productsSlice';
import moment from 'moment';

const AUTOPLAY_DELAY = 2000;
const SPACE_BETWEEN_SLIDES = 50;
const SLIDES_PER_VIEW = 1;

const Poster: FC = (): JSX.Element => {
	const { t } = useTranslation('poster');

	const products = useAppSelector(selectProductsOnePerCategory);
	const loadProducts = useAppSelector(selectLoadingProductsOnePerCategory);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadProductsOnePerCategory());
	}, []);

	if (loadProducts) {
		return (
			<div className="text-center min-vh-100 d-flex align-items-center justify-content-center">
				<Spinner />
			</div>
		);
	}

	return (
		<>
			{products && (
				<Swiper
					autoplay={{ delay: AUTOPLAY_DELAY }}
					spaceBetween={SPACE_BETWEEN_SLIDES}
					slidesPerView={SLIDES_PER_VIEW}
					navigation={true}
					pagination={{
						dynamicBullets: true,
					}}
					modules={[EffectCoverflow, Pagination, Autoplay, EffectCreative, Navigation]}
					className="poster_swiper"
				>
					{products.map(
						({
							id,
							imageLinks,
							name,
							lastCreatedAuction: { currentPlannedEndAt, lastBetAmount },
						}) => (
							<SwiperSlide key={id} className="poster_col">
								{imageLinks.length != 0 && (
									<div className="poster_col__img">
										<img src={imageLinks[0]} alt="img_product" />
									</div>
								)}
								<div className="poster_col__info">
									<h1 className="poster_col__info--title">{name}</h1>
									<div className="poster_col__info--priceAndTimer">
										<span className="poster_col__info--price">{lastBetAmount} &euro;</span>
										{/* <Timer time={currentPlannedEndAt} /> */}
									</div>
									<button className="poster_col__info--btn">{t('bet_now')}</button>
								</div>
							</SwiperSlide>
						)
					)}
				</Swiper>
			)}
		</>
	);
};

export default Poster;
