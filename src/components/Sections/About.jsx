import React from "react";
import { colorPallete } from "../../constants/pallete";

const About = () => {
	return (
		<div style={{ backgroundSize:"cover", backgroundRepeat:"no-repeat",backgroundImage: `url(images/me/IMG_20221029_135432_2.jpg)` }}>
			<section
				className="about-section"
				style={{
					background: "rgb(241,255,95)",
					background: colorPallete.topHeaderGradients.blue.backgroundGradient,
				}}
			>
				<div className="anim-icons full-width">
					{/* <span className="icon icon-circle-blue wow fadeIn"></span> */}
					 <span className="icon icon-dots wow fadeInleft"></span>
					<span className="icon icon-circle-1 wow zoomIn"></span>
				</div>
				<div className="auto-container">
					<div className="row">
						{/* <!-- Content Column --> */}
						<div style={{paddingTop: 20, paddingBottom:20, paddingLeft:20, borderRadius:30, backgroundColor:"hsla(360, 100%, 100%, 0.6)"}} className="content-column col-lg-6 col-md-12 col-sm-12">
							<div className="inner-column">
								<div className="sec-title">
									<span className="title" style={{ color: "white" }}>
										About me
									</span>
									<h2>A free spirit wandering around the forest</h2>
									<div className="text" style={{ color: colorPallete.homepage.notEmphasizeText }}>
										Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et
										dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco
										laboris nisi ut aliquip exea commodo consequat.
									</div>
								</div>
								<ul className="list-style-one">
									<li>Multiple Announcements during the event.</li>
									<li>Logo & company details on the WordCamp.</li>
									<li>Dedicated blog post thanking each Gold.</li>
									<li>Acknowledgment and opening and closing.</li>
								</ul>
								<div className="btn-box">
									<a href="contact.html" className="theme-btn btn-style-three">
										<span className="btn-title">Register Now</span>
									</a>
								</div>
							</div>
						</div>

						{/* <!-- Image Column --> */}
						{/* <div className="image-column col-lg-6 col-md-12 col-sm-12">
							<div className="image-box">
								<figure className="image wow fadeIn">
									<img src="images/me/me.jpg" alt="" />
								</figure>
							</div>
						</div> */}
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
