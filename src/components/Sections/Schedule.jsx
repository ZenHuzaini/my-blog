import React from "react";

const Schedule = () => {
	return (
		<div>
			<section className="schedule-section">
				<div className="anim-icons">
					<span className="icon icon-circle-4 wow zoomIn"></span>
					<span className="icon icon-circle-3 wow zoomIn"></span>
				</div>

				<div className="auto-container">
					<div className="sec-title text-center">
						<span className="title">About Conference</span>
						<h2>Schedule Plan</h2>
					</div>

					<div className="schedule-tabs tabs-box">
						<div className="btns-box">
							{/* <!--Tabs Box--> */}
							<ul className="tab-buttons clearfix">
								<li className="tab-btn active-btn" data-tab="#tab-1">
									<span className="day">Day 01</span>
									<span className="date">01</span>
									<span className="month">Jan</span> 2020
								</li>

								<li className="tab-btn" data-tab="#tab-2">
									<span className="day">Day 02</span>
									<span className="date">02</span>
									<span className="month">Jan</span> 2020
								</li>

								<li className="tab-btn" data-tab="#tab-3">
									<span className="day">Day 03</span>
									<span className="date">03</span>
									<span className="month">Jan</span> 2020
								</li>

								<li className="tab-btn" data-tab="#tab-4">
									<span className="day">Day 04</span>
									<span className="date">04</span>
									<span className="month">Jan</span> 2020
								</li>
							</ul>
						</div>

						<div className="tabs-content">
							{/* <!--Tab--> */}
							<div className="tab active-tab" id="tab-1">
								<div className="schedule-timeline">
									{/* <!-- schedule Block --> */}
									<div className="schedule-block">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													9.00 AM <br /> 10.00 AM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-1.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- schedule Block --> */}
									<div className="schedule-block even">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													10.00 AM <br /> 11.00 AM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-2.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- schedule Block --> */}
									<div className="schedule-block">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													11.00 AM <br /> 12.00 AM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-1.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- schedule Block --> */}
									<div className="schedule-block even">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													12.00 AM <br /> 01.00 PM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-2.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* <!--Tab--> */}
							<div className="tab" id="tab-2">
								<div className="schedule-timeline">
									{/* <!-- schedule Block --> */}
									<div className="schedule-block">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													9.00 AM <br /> 10.00 AM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-1.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- schedule Block --> */}
									<div className="schedule-block even">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													10.00 AM <br /> 11.00 AM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-2.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- schedule Block --> */}
									<div className="schedule-block">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													11.00 AM <br /> 12.00 AM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-1.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- schedule Block --> */}
									<div className="schedule-block even">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													12.00 AM <br /> 01.00 PM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-2.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* <!--Tab--> */}
							<div className="tab" id="tab-3">
								<div className="schedule-timeline">
									{/* <!-- schedule Block --> */}
									<div className="schedule-block">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													9.00 AM <br /> 10.00 AM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-1.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- schedule Block --> */}
									<div className="schedule-block even">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													10.00 AM <br /> 11.00 AM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-2.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- schedule Block --> */}
									<div className="schedule-block">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													11.00 AM <br /> 12.00 AM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-1.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- schedule Block --> */}
									<div className="schedule-block even">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													12.00 AM <br /> 01.00 PM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-2.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* <!--Tab--> */}
							<div className="tab" id="tab-4">
								<div className="schedule-timeline">
									{/* <!-- schedule Block --> */}
									<div className="schedule-block">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													9.00 AM <br /> 10.00 AM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-1.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- schedule Block --> */}
									<div className="schedule-block even">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													10.00 AM <br /> 11.00 AM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-2.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- schedule Block --> */}
									<div className="schedule-block">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													11.00 AM <br /> 12.00 AM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-1.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- schedule Block --> */}
									<div className="schedule-block even">
										<div className="inner-box">
											<div className="inner">
												<div className="date">
													12.00 AM <br /> 01.00 PM
												</div>
												<div className="speaker-info">
													<figure className="thumb">
														<img src="images/resource/thumb-2.jpg" alt="" />
													</figure>
													<h5 className="name">Ashli Scroggy</h5>
													<span className="designation">Founder & CEO</span>
												</div>
												<h4>
													<a href="event-detail.html">Modern Marketing Summit Sydney 2018</a>
												</h4>
												<div className="text">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmtempor incididunt labore et
												</div>
												<div className="btn-box">
													<a href="event-detail.html" className="theme-btn">
														Read More
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
		</div>
	);
};

export default Schedule;
