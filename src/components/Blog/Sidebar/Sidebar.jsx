import React from "react";
import { Categories } from "../SideComponents/Categories";
import LatestPost from "../SideComponents/LatestPost";
import Search from "../SideComponents/Search";
import Tag from "../SideComponents/Tag";

const Sidebar = () => {
	return (
		<div class="sidebar-side col-lg-4 col-md-12 col-sm-12">
			<aside class="sidebar padding-left">
				{/* <!-- Search --> */}
				<Search/>

				{/* <!-- Category Widget --> */}
                <Categories/>

				{/* <!-- Post Widget --> */}
				<LatestPost/>

				{/* <!-- Tags Widget --> */}
				<Tag/>
			</aside>
		</div>
	);
};

export default Sidebar;
