import React from "react";

const CommentForm = () => {
	return (
		<div class="comment-form">
			<div class="group-title">
				<h3>Leave a comment</h3>
			</div>
			<form method="post" action="blog.html">
				<div class="row clearfix">
					<div class="col-lg-6 col-md-12 col-sm-12 form-group">
						<input type="text" name="username" placeholder="Name" required="" />
					</div>

					<div class="col-lg-6 col-md-12 col-sm-12 form-group">
						<input type="email" name="email" placeholder="Email" required="" />
					</div>

					<div class="col-lg-12 col-md-12 col-sm-12 form-group">
						<textarea name="message" placeholder="Your Comments"></textarea>
					</div>

					<div class="col-lg-12 col-md-12 col-sm-12 form-group">
						<button class="theme-btn btn-style-one" type="submit" name="submit-form">
							<span class="btn-title">Post Comment</span>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CommentForm;
