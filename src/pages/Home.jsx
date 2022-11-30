import React, { useLayoutEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import About from "../components/Sections/About";
import Footer from "../components/Sections/Footer";
import Blog from "../components/Sections/Blog";
import { OptionsContext } from "../context/OptionsContextProvider";
import Scroller from "../components/Scroller/Scroller";
import Video from "../components/Sections/Video";


const Home = () => {
	const { dispatch, isMobileMenuVisible } = React.useContext(OptionsContext);
	const [windowSize, setWidnowSize] = React.useState([])

	useLayoutEffect(() => {
		function checkWindowSize() {
			if(window.innerWidth >=768 ){
				//this will force to remove the mobile view visibility -> false
				dispatch({type: "SHOW_MOBILE_MENU", data: false})
				setWidnowSize([window.innerWidth, window.innerHeight])
			}
		}
		setWidnowSize([window.innerWidth, window.innerHeight])

		window.addEventListener('resize', checkWindowSize);
		checkWindowSize()
		return () => window.removeEventListener('resize', checkWindowSize);
	  // eslint-disable-next-line react-hooks/exhaustive-deps
	  }, []);

	const mobileClassName = "mobile-menu-visible"
	return (
		<div className={isMobileMenuVisible? mobileClassName: ""}>
			<div className="page-wrapper">
				<div className="preloader"></div>

				{/* <!-- Main Header--> */}
                <Navigation/>
				

				{/* <!-- About Section --> */}
                <About/>

				{/* <!-- Features Section Two --> */}
				{/* <!-- Fun Fact Section --> */}
				{/* <!-- schedule Section --> */}
				{/* <!-- Pricing Section --> */}
				
				{/* <!-- Why Join --> */}

				{/* <!--Clients Section--> */}

				{/* <!-- Register Section --> */}

				{/* <!-- News Section --> */}
                <Blog/>

				{/* <!-- Video Section --> */}
				<Video/>
				{/* <!-- Main Footer --> */}
                <Footer/>
				
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
						You will find much more options for colors and styling in admin panel. This color picker
						is used only for demonstation purposes.
					</span>
				</div>
				<a href="/#" className="purchase-btn">
					Purchase now
				</a>
			</div>
			{/* <!-- End Color Switcher --> */}

			{/* <!--Search Popup--> */}
			<div id="search-popup" className="search-popup">
				<div className="close-search theme-btn">
					<span className="fas fa-window-close"></span>
				</div>
				<div className="popup-inner">
					<div className="overlay-layer"></div>
					<div className="search-form">
						<form method="post" action="index.html">
							<div className="form-group">
								<fieldset>
									<input
										type="search"
										className="form-control"
										name="search-input"
										value=""
										placeholder="Search Here"
										required
									/>
									<input type="submit" value="Search Now!" className="theme-btn" />
								</fieldset>
							</div>
						</form>

						<br />
						<h3>Recent Search Keywords</h3>
						<ul className="recent-searches">
							<li>
								<a href="/#">Seo</a>
							</li>
							<li>
								<a href="/#">Bussiness</a>
							</li>
							<li>
								<a href="/#">Events</a>
							</li>
							<li>
								<a href="/#">Digital</a>
							</li>
							<li>
								<a href="/#">Conferance</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* <!--Scroll to top--> */}
			<Scroller/>
		</div>
	);
};

export default Home;
