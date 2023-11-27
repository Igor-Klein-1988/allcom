import * as React from 'react';
import { MapContainer as LeafletMapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './AboutUs.css';

const AboutUs: React.FC = (): JSX.Element => {
	const companyLocation: LatLngExpression = [52.462894, 13.508654];

	return (
		<div className="about-us-container">
			<div className="about-us-header">
				<h1>О Нас</h1>
			</div>
			<div className="about-us-content">
				<p>
					Добро пожаловать в Allcom, ваш первоклассный выбор для захватывающих аукционных продаж. В
					Allcom мы специализируемся на объединении покупателей и продавцов в динамичном и
					прозрачном рынке. Наша команда страстно относится к объединению людей с уникальными и
					ценными предметами через онлайн аукцион.
				</p>
				<p>
					Независимо от того, являетесь ли вы опытным коллекционером, ищущим редкие артефакты, или
					продавцом, заинтересованным в привлечении глобальной аудитории, Allcom предоставляет
					платформу, отвечающую вашим потребностям. Наши аукционы включают в себя разнообразные
					категории, включая искусство, антиквариат, ювелирные изделия, винтажные товары и многое
					другое.
				</p>
				<p>
					Так же наша компания в скором времени запустит возможность доставки, об этом мы сразу
					сообщим на сайте.
				</p>
				<p>
					Локация нашего склада указана на карте для удобства Вашего поиска. Находимся Мы в городе
					Berlin по адресу Wilhelminenhofstraße 93, 12459.
				</p>
				<div className="map-container">
					<div className="map-wrapper">
						<div className="leaflet-map-container">
							<LeafletMapContainer
								center={companyLocation}
								zoom={13}
								style={{ height: '300px', width: '100%' }}
							>
								<TileLayer
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								/>
								<Marker position={companyLocation}>
									<Popup>Allcom</Popup>
								</Marker>
							</LeafletMapContainer>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
