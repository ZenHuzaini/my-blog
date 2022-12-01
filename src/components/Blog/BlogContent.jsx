import React from "react";

import CommentForm from "./Single/CommentForm";
import Comments from "./Single/Comments";
import MainContent from "./Single/MainContent";
import ShareOption from "./Single/ShareOption";

const BlogContent = () => {
	return (
		<div class="content-side col-lg-8 col-md-12 col-sm-12">
			<div class="blog-single">
				{/* <!-- News Block Three --> */}
				<MainContent />

				{/* <!-- Other Options --> */}
				<ShareOption />

				{/* <!-- Comments Area --> */}
				<Comments />

				{/* <!--Comment Form--> */}
				<CommentForm />
			</div>
		</div>
	);
};

export default BlogContent;
