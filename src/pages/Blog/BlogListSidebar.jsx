import React from "react";
import ContentPreview from "./MiddleComponents/ContentPreview";
import Pagination from "./MiddleComponents/Pagination";
import Sidebar from "./Sidebar/Sidebar";

const BlogListSidebar = () => {
    const contentPreview = Array.from({length: 3}).map(()=>{
        return <ContentPreview/>
    })
    
	return (
		<div class="sidebar-page-container">
			<div class="auto-container">
				<div class="row clearfix">
					{/* <!--Content Side / Blog Sidebar--> */}
					<div class="content-side col-lg-8 col-md-12 col-sm-12">
						<div class="blog-sidebar">
							{/* <!-- News Block Three --> */}
                            {contentPreview}
							

							{/* <!--Styled Pagination--> */}
							<Pagination/>
							{/* <!--End Styled Pagination--> */}
						</div>
					</div>

					{/* <!--Sidebar Side--> */}
					<Sidebar/>
				</div>
			</div>
		</div>
	);
};

export default BlogListSidebar;
