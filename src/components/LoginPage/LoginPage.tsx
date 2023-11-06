import * as React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-unresolved
import '/src/assets/scss/elements/_login.scss';

const LoginPage: React.FC = (): JSX.Element => {
	const { t } = useTranslation('LoginPage');

	return (
		<div className="login__section section--padding">
			<div className="container">
				<form action="#">
					<div className="login__section--inner">
						<div className="row row-cols-md-2 row-cols-1">
							<div className="col">
								<div className="login__account" style={{ height: '510px' }}>
									<div className="login__account--header mb-25">
										<h2 className="login__account--header__title h3 mb-10">{t('login')}</h2>
										<p className="login__account--header__desc">{t('header_desc')}</p>
									</div>
									<div className="login__account--inner ">
										<input
											className="login__account--input"
											placeholder={t('placeholder_email')}
											type="text"
										/>
										<input
											className="login__account--input"
											placeholder={t('placeholder_password')}
											type="password"
										/>
										<div className="login__account--remember__forgot mb-15 d-flex justify-content-between align-items-center">
											<div className="login__account--remember position__relative mb-15 d-flex justify-content-between align-items-center">
												<input className="checkout__checkbox--input" id="check1" type="checkbox" />
												<span className="checkout__checkbox--checkmark"></span>
												<label
													className="checkout__checkbox--label login__remember--label ms-3"
													htmlFor="check1"
												>
													{t('remember_me')}
												</label>
											</div>
											<button className="login__account--forgot" type="submit">
												{t('forgot_your_password')}
											</button>
										</div>
										<button className="login__account--btn primary__btn" type="submit">
											{t('login')}
										</button>
										<div className="login__account--divide p-5">
											<span className="login__account--divide__text text-black">{t('or')}</span>
										</div>
										<p className="login__account--signup__text">
											{t('dont_have_account')}
											<button className="ms-3" type="submit">
												{t('sign_up_now')}{' '}
											</button>
										</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="login__account register" style={{ height: '510px' }}>
									<div className="login__account--header mb-25">
										<h2 className="login__account--header__title h3 mb-10">
											{t('create_account')}
										</h2>
										<p className="login__account--header__desc">{t('register_here_text')}</p>
									</div>
									<div className="login__account--inner">
										<input
											className="login__account--input"
											placeholder={t('username')}
											type="text"
										/>
										<input
											className="login__account--input"
											placeholder={t('placeholder_email')}
											type="text"
										/>
										<input
											className="login__account--input"
											placeholder={t('placeholder_password')}
											type="password"
										/>
										<input
											className="login__account--input"
											placeholder={t('placeholder_confirm_password')}
											type="password"
										/>
										<button className="login__account--btn primary__btn mb-10" type="submit">
											{t('submit_register')}
										</button>
										<div className="login__account--remember position__relative d-flex justify-content-left">
											<div>
												<input className="checkout__checkbox--input" id="check2" type="checkbox" />
												<span className="checkout__checkbox--checkmark"></span>
											</div>
											<label
												className="checkout__checkbox--label login__remember--label ms-3"
												htmlFor="check2"
											>
												{t('i_have_read_text')}
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
