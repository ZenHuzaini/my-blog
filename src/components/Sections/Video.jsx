import React from "react";

const Video = () => {
	return (
		<div>
			<section
				className="video-section"
				style={{ backgroundImage: "url(/images/me/IMG_20210531_174820.jpg)" }}
			>
				<div className="auto-container">
					<div className="content-box">
						<div className="text">CHECK MY LATEST VIDEO</div>
						<h2>
							New Video on Every Adventure <br />
							Please Subscribe, Comment and Share :D
						</h2>
						<a
							href="https://www.youtube.com/watch?v=oa0plYfZAMw"
							className="play-now"
							data-fancybox="gallery"
							data-caption=""
						>
							<i className="icon flaticon-play-button-3" aria-hidden="true"></i>
							<span className="ripple"></span>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Video;
