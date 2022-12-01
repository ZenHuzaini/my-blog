import React from "react";
import { Link } from "react-router-dom";

const ContentPreview = () => {
	return (
		<div class="news-block wow fadeInRight">
			<div class="inner-box">
				<div class="image-box">
					<figure class="image">
						<a href="blog-single.html">
							<img src="images/resource/blog-4.jpg" alt="" />
						</a>
					</figure>
				</div>
				<div class="lower-content">
					<ul class="post-info">
						<li>
							<span class="far fa-user"></span> Admin
						</li>
						<li>
							<span class="far fa-comments"></span> Comment 03
						</li>
					</ul>
					<h4>
						<a href="blog-single.html">International Conference on Art Business</a>
					</h4>
					<div class="text">
						Lorem ipsum dolor sit amet, consectetur do adipisicing sed do eiusmtempor incididunt
						labore dolore magna aliqu enim ad minim veniam quis nostrud exercitation.
					</div>
					<Link to={"/blog/xxxxxxxxx"} style={{ textDecoration: "none" }}>
					<div class="btn-box">
							<a href="contact.html" class="read-more">
								Read More
							</a>
					</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ContentPreview;
