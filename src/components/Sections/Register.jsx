import React from "react";

const Register = () => {
	return (
		<div>
			{" "}
			<section className="register-section">
				<div className="auto-container">
					<div className="anim-icons full-width">
						<span className="icon icon-circle-3 wow zoomIn"></span>
					</div>
					<div className="outer-box">
						<div className="row no-gutters">
							<div className="title-column col-lg-4 col-md-6 col-sm-12">
								<div className="inner">
									<div className="sec-title light">
										<div className="icon-box">
											<span className="icon flaticon-rocket-ship"></span>
										</div>
										<h2>REGISTER NOW</h2>
										<div className="text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor
											incididunt labore et dolore magna.
										</div>
									</div>
								</div>
							</div>
							{/* <!--Register Form--> */}
							<div className="register-form col-lg-8 col-md-6 col-sm-12">
								<div className="form-inner">
									<form method="post" action="contact.html">
										<div className="form-group">
											<span className="icon fa fa-user"></span>
											<input type="text" name="username" placeholder="Full name" required="" />
										</div>

										<div className="form-group">
											<span className="icon fa fa-envelope"></span>
											<input
												type="email"
												name="email"
												value=""
												placeholder="Email address"
												required
											/>
										</div>

										<div className="form-group">
											<span className="icon fa fa-phone"></span>
											<input type="text" name="phone" placeholder="Phone" required="" />
										</div>

										<div className="form-group">
											<span className="icon fa fa-edit"></span>
											<textarea name="message" placeholder="Additional Message"></textarea>
										</div>

										<div className="form-group text-right">
											<button type="submit" className="theme-btn btn-style-four">
												<span className="btn-title">Register Now</span>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Register;
