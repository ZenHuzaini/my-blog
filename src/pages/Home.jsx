import React, { useLayoutEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import About from "../components/Sections/About";
import Footer from "../components/Sections/Footer";
import Blog from "../components/Sections/Blog";
import { OptionsContext } from "../context/OptionsContextProvider";
import Scroller from "../components/Scroller/Scroller";
import Video from "../components/Sections/Video";
import SearchPopup from "../components/Search/Popup/SearchPopup";
import { contextType } from "../context/contextTypes";
import { headerType } from "../constants/constants";
import Map from "../components/Sections/Map/Map";
import SEO from "../components/SEO/Seo";
import { meta } from "../components/SEO/seoData";


const Home = () => {
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
		console.log("gyhgg ", isMobileMenuVisible)
		return () => window.removeEventListener("resize", checkWindowSize);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const mobileClassName = "mobile-menu-visible";
	return (
		<>
			<SEO description={meta.homepage.description} title={meta.homepage.title} link={meta.homepage.link} keywords={meta.homepage.keywords}  />
			<div className={isMobileMenuVisible ? mobileClassName : ""}>
				<div className="page-wrapper">
					{/* <div className="preloader"></div> */}

					{/* <!-- Main Header--> */}
					<Navigation selectedHeaderType={headerType.MAIN_HEADER} />

					{/* <!-- About Section --> */}
					<About />

					{/* <!-- Features Section Two --> */}
					{/* <!-- Fun Fact Section --> */}
					{/* <!-- schedule Section --> */}
					{/* <!-- Pricing Section --> */}

					{/* <!-- Why Join --> */}

					{/* <!--Clients Section--> */}

					{/* <!-- Register Section --> */}

					{/* <!-- Video Section --> */}
					<Video />

					{/* <!-- News Section --> */}
					<Blog />

					<Map />

					{/* <!-- Main Footer --> */}
					<Footer />
				</div>
				{/* <!--End pagewrapper--> */}

				{/* <!-- Color Palate / Color Switcher --> */}
				<div className="color-palate">
					<div className="color-trigger">
						<i className="fa fa-cog"></i>
					</div>
					<div className="color-palate-head">
						<h6>Choose Your Demo</h6>
					</div>
					<ul className="box-version option-box">
						<li>Full width</li> <li className="box">Boxed</li>
					</ul>
					<ul className="rtl-version option-box">
						<li>LTR Version</li> <li className="rtl">RTL Version</li>
					</ul>
					<div className="palate-foo">
						<span>
							You will find much more options for colors and styling in admin panel. This color
							picker is used only for demonstation purposes.
						</span>
					</div>
					<a href="/#" className="purchase-btn">
						Purchase now
					</a>
				</div>
				{/* <!-- End Color Switcher --> */}

				{/* <!--Search Popup--> */}
				<SearchPopup />

				{/* <!--Scroll to top--> */}
				<Scroller />
			</div>
		</>
	);
};

export default Home;
