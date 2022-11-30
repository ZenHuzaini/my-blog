import React from 'react'

const Feature = () => {
  return (
    <div>
        <section className="features-section-two">
					<div className="auto-container">
						<div className="anim-icons">
							<span className="icon twist-line-1 wow zoomIn"></span>
							<span className="icon twist-line-2 wow zoomIn" data-wow-delay="1s"></span>
							<span className="icon twist-line-3 wow zoomIn" data-wow-delay="2s"></span>
						</div>

						<div className="row">
							{/* <!-- Title Block --> */}
							<div className="title-block col-lg-4 col-md-12 col-sm-12 wow fadeInUp">
								<div className="inner-box">
									<div className="sec-title">
										<span className="title">Features</span>
										<h2>Our Feature</h2>
									</div>
								</div>
							</div>

							{/* <!-- Feature Block --> */}
							<div className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
								<div className="inner-box">
									<div className="icon-box">
										<span className="icon flaticon-lecture"></span>
									</div>
									<h4>
										<a href="about.html">Great Speakers</a>
									</h4>
									<div className="text">
										Dolor sit amet consectetur elit sed do eiusmod tempor incd.
									</div>
								</div>
							</div>

							{/* <!-- Feature Block --> */}
							<div className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
								<div className="inner-box">
									<div className="icon-box">
										<span className="icon flaticon-search"></span>
									</div>
									<h4>
										<a href="about.html">Experience</a>
									</h4>
									<div className="text">
										Dolor sit amet consectetur elit sed do eiusmod tempor incd.
									</div>
								</div>
							</div>

							{/* <!-- Feature Block --> */}
							<div
								className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
								data-wow-delay="400ms"
							>
								<div className="inner-box">
									<div className="icon-box">
										<span className="icon flaticon-diamond-1"></span>
									</div>
									<h4>
										<a href="about.html">Networking</a>
									</h4>
									<div className="text">
										Dolor sit amet consectetur elit sed do eiusmod tempor incd.
									</div>
								</div>
							</div>

							{/* <!-- Feature Block --> */}
							<div
								className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
								data-wow-delay="800ms"
							>
								<div className="inner-box">
									<div className="icon-box">
										<span className="icon flaticon-success"></span>
									</div>
									<h4>
										<a href="about.html">Party</a>
									</h4>
									<div className="text">
										Dolor sit amet consectetur elit sed do eiusmod tempor incd.
									</div>
								</div>
							</div>

							{/* <!-- Feature Block --> */}
							<div
								className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
								data-wow-delay="1200ms"
							>
								<div className="inner-box">
									<div className="icon-box">
										<span className="icon flaticon-employee"></span>
									</div>
									<h4>
										<a href="about.html">New People</a>
									</h4>
									<div className="text">
										Dolor sit amet consectetur elit sed do eiusmod tempor incd.
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
    </div>
  )
}

export default Feature