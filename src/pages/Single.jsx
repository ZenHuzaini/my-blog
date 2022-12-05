import React, { useLayoutEffect } from "react";
import BlogContentOrListWithSidebar from "../components/Blog/BlogContentOrListWithSidebar";
import Navigation from "../components/Navigation/Navigation";
import Scroller from "../components/Scroller/Scroller";
import SearchPopup from "../components/Search/Popup/SearchPopup";
import Breadcrumb from "../components/Sections/Breadcrumb";
import Footer from "../components/Sections/Footer";
import SEO from "../components/SEO/Seo";
import { meta } from "../components/SEO/seoData";
import { headerType, pageType } from "../constants/constants";
import { contextType } from "../context/contextTypes";
import { OptionsContext } from "../context/OptionsContextProvider";

const Single = ({ type }) => {
	const { dispatch, isMobileMenuVisible } = React.useContext(OptionsContext);

	useLayoutEffect(() => {
		//this wroks as a scroller, if in other page and we are in the midle of that page, when we go to this homepage, it will scroll
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});

		function checkWindowSize() {
			if (window.innerWidth >= 768) {
				//this will force to remove the mobile view visibility -> false
				dispatch({ type: contextType.SHOW_MOBILE_MENU, data: false });
				dispatch({ type: contextType.WINDOW_SIZE, data: [window.innerWidth, window.innerHeight] });
			}
		}
		dispatch({ type: contextType.WINDOW_SIZE, data: [window.innerWidth, window.innerHeight] });

		window.addEventListener("resize", checkWindowSize);
		checkWindowSize();
		return () => window.removeEventListener("resize", checkWindowSize);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [type]);

	const mobileClassName = "mobile-menu-visible";

	let content;
	switch (type) {
		case pageType.BLOG_LIST_SEDEBAR:
			content = (
				<>
					<SEO
						description={meta.blogList.description}
						title={meta.blogList.title}
						link={meta.blogList.link}
						keywords={meta.blogList.keywords}
					/>
					<Breadcrumb />
					<BlogContentOrListWithSidebar contentType={pageType.BLOG_LIST_SEDEBAR} />
				</>
			);
			break;

		case pageType.BLOG_CONTENT:
			content = (
				<>
					<Breadcrumb />
					<BlogContentOrListWithSidebar contentType={pageType.BLOG_CONTENT} />
				</>
			);
			break;
		default:
			break;
	}
	return (
		<div className={isMobileMenuVisible ? mobileClassName : ""}>
			<div class="page-wrapper">
				{/* <div class="preloader"></div> */}

				<span class="header-span"></span>

				<Navigation selectedHeaderType={headerType.HEADER_STYLE_2} />
				{content}

				{/* <!-- Main Footer --> */}
				<Footer />
				{/* <!-- End Footer --> */}
			</div>
			{/* <!--Search Popup--> */}
			<SearchPopup />
			{/* <!--Scroll to top--> */}
			<Scroller />
		</div>
	);
};

export default Single;
