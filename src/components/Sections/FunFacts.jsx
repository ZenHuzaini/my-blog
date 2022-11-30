import React from "react";

const FunFacts = () => {
	return (
		<div>
			<section className="fun-fact-section">
				<div className="auto-container">
					<div className="fact-counter">
						<div className="row clearfix">
							{/* <!--Column--> */}
							<div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
								<div className="count-box">
									<span className="icon icon_headphones"></span>
									<span className="count-text" data-speed="3000" data-stop="190">
										0
									</span>
									<h4 className="counter-title">Participants</h4>
								</div>
							</div>

							{/* <!--Column--> */}
							<div
								className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
								data-wow-delay="400ms"
							>
								<div className="count-box">
									<span className="icon icon_ribbon_alt"></span>
									<span className="count-text" data-speed="3000" data-stop="62">
										0
									</span>
									<h4 className="counter-title">Awards Win</h4>
								</div>
							</div>

							{/* <!--Column--> */}
							<div
								className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
								data-wow-delay="800ms"
							>
								<div className="count-box">
									<span className="icon icon_like"></span>
									<span className="count-text" data-speed="3000" data-stop="54">
										0
									</span>
									<h4 className="counter-title">Certified Teachers</h4>
								</div>
							</div>

							{/* <!--Column--> */}
							<div
								className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
								data-wow-delay="1200ms"
							>
								<div className="count-box">
									<span className="icon icon_book_alt"></span>
									<span className="count-text" data-speed="3000" data-stop="38">
										0
									</span>
									<h4 className="counter-title">Courses</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FunFacts;
