import * as React from 'react';
import { MapContainer as LeafletMapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';

const ABOUT_US_COORDINATES: LatLngExpression = [52.462894, 13.508654];

const AboutUs: React.FC = (): JSX.Element => {
	const { t } = useTranslation('about_us');

	return (
		<div className="about-us-container">
			<div className="about-us-header">
				<h1 data-testid="about-us_header">{t('about_us')}</h1>
			</div>
			<div className="about-us-content" data-testid="about-us-content">
				<p data-testid="about-us_welcome">{t('welcome')}</p>
				<p data-testid="about-us_about_us1">{t('about_us1')}</p>
				<p data-testid="about-us_about_us2">{t('about_us2')}</p>
				<p data-testid="about-us_about_us3">{t('about_us3')}</p>
				<div className="about-us-map-container" data-testid="about-us-map-container">
					<div
						className="about-us-leaflet-map-container"
						data-testid="about-us-leaflet-map-container"
					>
						<LeafletMapContainer
							center={ABOUT_US_COORDINATES}
							zoom={13}
							style={{ height: '300px', width: '100%' }}
						>
							<TileLayer
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							/>
							<Marker position={ABOUT_US_COORDINATES}>
								<Popup data-testid="allcom_label_on_map">Allcom</Popup>
							</Marker>
						</LeafletMapContainer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
