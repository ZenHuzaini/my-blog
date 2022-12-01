import React, { useLayoutEffect } from "react";
import BlogListSidebar from "../components/Blog/BlogListSidebar";
import Navigation from "../components/Navigation/Navigation";
import SearchPopup from "../components/Search/Popup/SearchPopup";
import Breadcrumb from "../components/Sections/Breadcrumb";
import Footer from "../components/Sections/Footer";
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
				behavior: 'smooth'
			})
			
		function checkWindowSize() {
			if(window.innerWidth >=768 ){
				//this will force to remove the mobile view visibility -> false
				dispatch({type: contextType.SHOW_MOBILE_MENU, data: false})
				dispatch({type: contextType.WINDOW_SIZE, data: [window.innerWidth, window.innerHeight]})

			}
		}
		dispatch({type: contextType.WINDOW_SIZE, data: [window.innerWidth, window.innerHeight]})

		window.addEventListener('resize', checkWindowSize);
		checkWindowSize()
		return () => window.removeEventListener('resize', checkWindowSize);
	  // eslint-disable-next-line react-hooks/exhaustive-deps
	  }, []);

	const mobileClassName = "mobile-menu-visible"

	let content;
	switch (type) {
		case pageType.BLOG_LIST_SEDEBAR:
			content = (
				<>
					<Breadcrumb />
					<BlogListSidebar/>
				</>
			);
			break;

		default:
			break;
	}
	return (
		<div className={isMobileMenuVisible? mobileClassName: ""}>
			<div class="page-wrapper">
				{/* <div class="preloader"></div> */}

				<span class="header-span"></span>

				<Navigation selectedHeaderType={headerType.HEADER_STYLE_2} />
				{content}

				{/* <!-- Main Footer --> */}
				<Footer />
				{/* <!-- End Footer --> */}

				{/* <!--Search Popup--> */}
			<SearchPopup/>
			</div>
		</div>
	);
};

export default Single;
