import React from "react";

const Pricing = () => {
	return (
		<div>
			<section className="pricing-section">
				<div className="anim-icons">
					<span className="icon icon-circle-green wow fadeIn"></span>
					<span className="icon icon-circle-blue wow fadeIn"></span>
					<span className="icon icon-circle-pink wow fadeIn"></span>
				</div>

				<div className="auto-container">
					<div className="sec-title text-center">
						<span className="title">Get Ticket</span>
						<h2>Choose a Ticket</h2>
					</div>

					<div className="outer-box">
						<div className="row">
							{/* <!-- Pricing Block --> */}
							<div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
								<div className="inner-box">
									<div className="icon-box">
										<div className="icon-outer">
											<span className="icon flaticon-paper-plane"></span>
										</div>
									</div>
									<div className="price-box">
										<div className="title"> Day Pass</div>
										<h4 className="price">$35.99</h4>
									</div>
									<ul className="features">
										<li className="true">Conference Tickets</li>
										<li className="true">Free Lunch And Coffee</li>
										<li className="true">Certificate</li>
										<li className="false">Easy Access</li>
										<li className="false">Free Contacts</li>
									</ul>
									<div className="btn-box">
										<a href="buy-ticket.html" className="theme-btn">
											BUY Ticket
										</a>
									</div>
								</div>
							</div>

							{/* <!-- Pricing Block --> */}
							<div
								className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
								data-wow-delay="400ms"
							>
								<div className="inner-box">
									<div className="icon-box">
										<div className="icon-outer">
											<span className="icon flaticon-diamond-1"></span>
										</div>
									</div>
									<div className="price-box">
										<div className="title">Full Pass</div>
										<h4 className="price">$99.99</h4>
									</div>
									<ul className="features">
										<li className="true">Conference Tickets</li>
										<li className="true">Free Lunch And Coffee</li>
										<li className="true">Certificate</li>
										<li className="true">Easy Access</li>
										<li className="false">Free Contacts</li>
									</ul>
									<div className="btn-box">
										<a href="buy-ticket.html" className="theme-btn">
											BUY Ticket
										</a>
									</div>
								</div>
							</div>

							{/* <!-- Pricing Block --> */}
							<div
								className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
								data-wow-delay="800ms"
							>
								<div className="inner-box">
									<div className="icon-box">
										<div className="icon-outer">
											<span className="icon flaticon-rocket-ship"></span>
										</div>
									</div>
									<div className="price-box">
										<div className="title">Group Pass</div>
										<h4 className="price">$199.99</h4>
									</div>
									<ul className="features">
										<li className="true">Conference Tickets</li>
										<li className="true">Free Lunch And Coffee</li>
										<li className="true">Certificate</li>
										<li className="true">Easy Access</li>
										<li className="true">Free Contacts</li>
									</ul>
									<div className="btn-box">
										<a href="buy-ticket.html" className="theme-btn">
											BUY Ticket
										</a>
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

export default Pricing;
