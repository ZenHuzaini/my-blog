/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ShareOption = () => {
	return (
		<div class="post-share-options clearfix">
			<div class="pull-left">
				<ul class="tags">
					<li>
						<a href="#">Eventa</a>
					</li>
					<li>
						<a href="#">Conference</a>
					</li>
					<li>
						<a href="#">Business</a>
					</li>
				</ul>
			</div>

			<div class="social-icon-three pull-right">
				<ul class="social-icon-three">
					<li>
						<a href="#">
							<span class="fab fa-facebook-f"></span>
						</a>
					</li>
					<li>
						<a href="#">
							<span class="fab fa-twitter"></span>
						</a>
					</li>
					<li>
						<a href="#">
							<span class="fab fa-vimeo-v"></span>
						</a>
					</li>
					<li>
						<a href="#">
							<span class="fab fa-linkedin-in"></span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ShareOption;
