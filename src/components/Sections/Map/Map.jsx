import { RectangleRounded } from "@mui/icons-material";
import { Divider } from "@mui/material";
import React from "react";
import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet";
import data from "./data";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";

const Map = () => {
	let navigate = useNavigate();
	const distanceLat = data.maxLat - data.minLat;
	const bufferLat = distanceLat * 0.05;
	const distanceLong = data.maxLong - data.minLong;
	const bufferLong = distanceLong * 0.15;

	return (
		<>
			<div>
				<section className="video-section" style={{ backgroundImage: "url(/images/me/zen.jpg)" }}>
					<div className="auto-container">
						<div className="content-box">
							<div className="text">I was here!</div>
							<section class="map-section" style={{ paddingBottom: 0 }}>
								<div class="auto-container">
									<div class="map-outer">
										<MapContainer
											style={{ height: "600px", bottom: 0, width: "100%" }}
											zoom={4.5}
											center={[38, -100]} //US
											bounds={[
												[data.minLat - bufferLat, data.minLong - bufferLong],
												[data.maxLat + bufferLat, data.maxLong + bufferLong],
											]}
											attributionControl={false}
										>
											<TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

											{data.city.map((city, k) => {
												return (
													<>
														<CircleMarker
															key={k}
															center={[city["coordinates"][1], city["coordinates"][0]]}
															// radius={20 * Math.log(city["population"] / 10000000)}
															fillOpacity={0.7}
															stroke={false}
															color={city.isMalfunction ? "#D35400" : "green"}
															eventHandlers={{
																click: () => {
																	navigate(`/blog/the-title-of-the`);
																},
															}}
														>
															<div
																style={{ display: "flex", flexDirection: "column", width: "20%" }}
															>
																<Tooltip direction="right" offset={[-8, -2]} opacity={1}>
																	<div
																		className="up"
																		style={{
																			paddingLeft: 10,
																			paddingRight: 10,
																			height: "30px",
																			alignContent: "center",
																			alignItems: "center",
																			backgroundColor: "#30AAFF",
																			color: "white",
																			justifyContent: "space-between",
																			display: "flex",
																			flexDirection: "row",
																		}}
																	>
																		<div
																			className="sn"
																			style={{ fontSize: "2vh", fontWeight: 600 }}
																		>
																			{city.sn}
																		</div>
																		<div className="lockoutStatus" style={{ marginTop: 5 }}>
																			<RectangleRounded
																				color={city.isMalfunction ? "warning" : "success"}
																			/>
																		</div>
																	</div>
																	<div
																		className="down"
																		style={{
																			// justifyContent: "space-between",
																			gap: 10,
																			// fontSize: "0.5vw",
																			display: "flex",
																			flexDirection: "row",
																			alignContent: "center",
																			alignItems: "center",
																			marginTop: 1,
																		}}
																	>
																		<div
																			className="lockoutNotification"
																			style={{
																				// fontSize: "0.8vw",
																				display: "flex",
																				flexDirection: "column",
																				alignContent: "center",
																			}}
																		>
																			Lockout Notification
																			<div
																				className="number"
																				style={{
																					fontSize: 20,
																					color: "#0B63A1",
																					fontWeight: "bolder",
																				}}
																			>
																				{city.lockoutNotifictaion}
																			</div>
																		</div>

																		<Divider
																			sx={{ backgroundColor: "#ffd500", height: 30 }}
																			orientation="vertical"
																			variant="middle"
																			flexItem
																		/>

																		<div
																			className="lockoutNotification"
																			style={{
																				// fontSize: "0.8vw",
																				display: "flex",
																				flexDirection: "column",
																				alignContent: "center",
																			}}
																		>
																			Non Lockout Notification
																			<div
																				className="number"
																				style={{
																					fontSize: 20,
																					color: "#0B63A1",
																					fontWeight: "bolder",
																				}}
																			>
																				{city.nonLockoutNotifictaion}
																			</div>
																		</div>
																	</div>
																	<Divider
																		sx={{ margin: 1, backgroundColor: "#ffd500", width: "90%" }}
																	/>
																	<span>Location : {city["name"]}</span>
																	{city.isMalfunction ? (
																		<>
																			<br />
																			<span>Message: {city["message"]}</span>
																		</>
																	) : (
																		<></>
																	)}
																</Tooltip>
															</div>
														</CircleMarker>
													</>
												);
											})}
										</MapContainer>
									</div>
								</div>
							</section>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Map;
