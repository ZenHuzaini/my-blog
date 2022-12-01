import React from "react";
import { pageType } from "../../constants/constants";
import BlogContent from "./BlogContent";
import ContentPreview from "./MiddleComponents/ContentPreview";
import Pagination from "./MiddleComponents/Pagination";
import Sidebar from "./Sidebar/Sidebar";

const BlogContentOrListWithSidebar = ({ contentType }) => {
	let blogContentSide;
	switch (contentType) {
		case pageType.BLOG_LIST_SEDEBAR:
			const contentPreview = Array.from({ length: 3 }).map(() => {
				return <ContentPreview />;
			});

			blogContentSide = (
				<div className="content-side col-lg-8 col-md-12 col-sm-12">
					<div className="blog-sidebar">
						{/* <!-- News Block Three --> */}
						{contentPreview}

						{/* <!--Styled Pagination--> */}
						<Pagination />
						{/* <!--End Styled Pagination--> */}
					</div>
				</div>
			);

			break;

		case pageType.BLOG_CONTENT:
			blogContentSide = <BlogContent/>
			break;

		default:
			break;
	}


	return (
		<div className="sidebar-page-container">
			<div className="auto-container">
				<div className="row clearfix">
					{/* <!--Content Side / Blog Sidebar--> */}
					{blogContentSide}

					{/* <!--Sidebar Side--> */}
					<Sidebar />
				</div>
			</div>
		</div>
	);
};

export default BlogContentOrListWithSidebar;
