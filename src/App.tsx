import { useTranslation } from 'react-i18next';

import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import LoginPage from './components/LoginPage/LoginPage';

const locales = {
	en: { title: 'English' },
	de: { title: 'German' },
	ru: { title: 'Russian' },
};

function App(): JSX.Element {
	const { i18n } = useTranslation();

	return (
		<div>
			<ul>
				{Object.keys(locales).map((locale) => (
					<li key={locale}>
						<button
							style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }}
							type="submit"
							onClick={() => i18n.changeLanguage(locale)}
						>
							{locales[locale as keyof typeof locales].title}
						</button>
					</li>
				))}
			</ul>
			<LoginPage />
			<NotFound />
			<Footer />
		</div>
	);
}

export default App;
