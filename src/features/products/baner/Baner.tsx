import * as React from 'react';

const Baner: React.FC = (): JSX.Element => {
	return (
		<section className="hero__slider--section slider__section3">
			<div className="hero__slider--inner hero__slider--activation swiper">
				<div className="hero__slider--wrapper swiper-wrapper">
					<div className="swiper-slide ">
						<div className="hero__slider--items home3__slider--bg">
							<div className="container-fluid">
								<div className="hero__slider--items__inner">
									<div className="row row-cols-1">
										<div className="col">
											<div className="slider__content">
												<p className="slider__content--desc desc1 mb-15">View auctions</p>
												<h2 className="slider__content--maintitle h1">
													{' '}
													Find new auction items <br />
													for yourself!!
												</h2>
												{/* <p className="slider__content--desc desc2 d-sm-2-none mb-40">
													Up To 40% Off Final Sale Items. <br />
													Caught in the Moment!
												</p> */}
												<a className="slider__btn primary__btn" href="shop.html">
													Show Auction
													<svg
														className="primary__btn--arrow__icon"
														xmlns="http://www.w3.org/2000/svg"
														width="20.2"
														height="12.2"
														viewBox="0 0 6.2 6.2"
													>
														<path
															d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z"
															transform="translate(-4 -4)"
															fill="currentColor"
														></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Baner;
