import * as React from 'react';
import { MapContainer as LeafletMapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';

const AboutUs: React.FC = (): JSX.Element => {
	const { t } = useTranslation('about_us');
	const companyLocation: LatLngExpression = [52.462894, 13.508654];

	return (
		<div className="about-us-container">
			<div className="about-us-header">
				<h1>{t('about_us')}</h1>
			</div>
			<div className="about-us-content">
				<p>{t('welcome')}</p>
				<p>{t('about_us1')}</p>
				<p>{t('about_us2')}</p>
				<p>{t('about_us3')}</p>
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
