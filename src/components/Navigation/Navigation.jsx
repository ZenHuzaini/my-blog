import React, { useState } from "react";
import { Link } from "react-router-dom";
import { headerClassType } from "../../constants/constants";
import { contextType } from "../../context/contextTypes";
import { OptionsContext } from "../../context/OptionsContextProvider";

const Navigation = ({ selectedHeaderType }) => {
	const { dispatch, isMobileMenuVisible, isSearchPopupVisible } = React.useContext(OptionsContext);

	const [isAboutExpanded, setIsAboutExpanded] = useState(false);
	const [isAdventureExpanded, setIsAdventureExpanded] = useState(false);

	return (
		<div>
			<header className={headerClassType[selectedHeaderType]}>
				<div className="main-box">
					<div className="auto-container clearfix">
						<div className="logo-box">
							<div className="logo">
								<Link to={"/"} style={{ textDecoration: "none" }}>
									<img src="/images/zen-logo.png" style={{ width: 50 }} alt="" title="Zen" />
								</Link>
							</div>
						</div>

						{/* <!--Nav Box--> */}
						<div className="nav-outer clearfix">
							{/* <!--Mobile Navigation Toggler--> */}
							<div
								onClick={() => {
									dispatch({ type: "SHOW_MOBILE_MENU", data: !isMobileMenuVisible });
								}}
								className="mobile-nav-toggler"
							>
								<span className="icon flaticon-menu"></span>
							</div>
							{/* <!-- Main Menu --> */}
							<nav className="main-menu navbar-expand-md navbar-light">
								<div className="navbar-header">
									{/* <!-- Togg le Button --> */}
									<button
										className="navbar-toggler"
										type="button"
										data-toggle="collapse"
										data-target="#navbarSupportedContent"
										aria-controls="navbarSupportedContent"
										aria-expanded="false"
										aria-label="Toggle navigation"
									>
										<span className="icon flaticon-menu-button"></span>
									</button>
								</div>

								<div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
									<ul className="navigation clearfix">
										<li className="">
											<Link to={"/"} style={{ textDecoration: "none" }}>
												<a href="contact.html">Home</a>
											</Link>
										</li>
										<li className="dropdown">
											<a href="about-us.html">About</a>
											<ul>
												<li>
													<a href="about-us.html">Me</a>
												</li>
												<li>
													<a href="pricing.html">Portofolio</a>
												</li>
											</ul>
										</li>
										<li className="dropdown current">
											<a href="schedule.html">Adventure</a>
											<ul>
												<li>
													<Link to={"/blog"} style={{ textDecoration: "none" }}>
														<a href="schedule.html">Cycling</a>
													</Link>
												</li>

												<li>
													<a href="event-detail.html">Trekking</a>
												</li>
												<li>
													<a href="buy-ticket.html">Camping</a>
												</li>
												<li>
													<a href="buy-ticket.html">Explore</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="contact.html">Contact</a>
										</li>
									</ul>
								</div>
							</nav>
							{/* <!-- Main Menu End--> */}

							{/* <!-- Outer box --> */}
							<div className="outer-box">
								{/* <!--Search Box--> */}
								<div className="search-box-outer">
									<div
										className="search-box-btn"
										onClick={() => {
											dispatch({
												data: !isSearchPopupVisible,
												type: contextType.SHOW_POP_UP_SEARCH,
											});
										}}
									>
										<span className="flaticon-search"></span>
									</div>
								</div>

								{/* <!-- Button Box --> */}
								<div className="btn-box">
									<a href="buy-ticket.html" className="theme-btn btn-style-one">
										<span className="btn-title">Login</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Mobile Menu  --> */}
				<div className="mobile-menu">
					<div className="menu-backdrop"></div>
					<div className="close-btn">
						<span className="icon flaticon-cancel-1"></span>
					</div>

					{/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
					<nav className="menu-box">
						<div className="nav-logo">
							<a href="index.html">
								<img src="images/logo-2.png" alt="" title="" />
							</a>
						</div>

						<ul className="navigation clearfix">
							{/* <!--Keep This Empty / Menu will come through Javascript--> */}
							<li className="current dropdown">
								<a href="index.html">Home</a>
							</li>

							<li className="dropdown">
								<a href="about-us.html">About</a>
								<ul style={{ display: isAboutExpanded ? "block" : "none", marginLeft: "5%" }}>
									<li>
										<a href="about-us.html">Me</a>
									</li>
									<li>
										<a href="pricing.html">Portofolio</a>
									</li>
								</ul>
								<div
									className="dropdown-btn"
									onClick={() => {
										setIsAboutExpanded(!isAboutExpanded);
									}}
								>
									<span className="fa fa-angle-down"></span>
								</div>
							</li>

							<li className="dropdown">
								<a href="about-us.html">Adventure</a>
								<ul style={{ display: isAdventureExpanded ? "block" : "none", marginLeft: "5%" }}>
									<li>
										<a href="about-us.html">Cycling</a>
									</li>
									<li>
										<a href="pricing.html">Trekking</a>
									</li>
									<li>
										<a href="pricing.html">Camping</a>
									</li>
									<li>
										<a href="pricing.html">Explore</a>
									</li>
								</ul>
								<div
									className="dropdown-btn"
									onClick={() => {
										setIsAdventureExpanded(!isAdventureExpanded);
									}}
								>
									<span className="fa fa-angle-down"></span>
								</div>
							</li>

							<li>
								<a href="contact.html">Contact</a>
							</li>
						</ul>
					</nav>

					<div
						className="close-btn"
						onClick={() => {
							dispatch({ type: "SHOW_MOBILE_MENU", data: !isMobileMenuVisible });
						}}
					>
						<span className="icon flaticon-cancel-music"></span>
					</div>
				</div>
				{/* <!-- End Mobile Menu --> */}
			</header>
		</div>
	);
};

export default Navigation;
