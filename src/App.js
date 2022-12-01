import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pageType } from "./constants/constants";
import Home from "./pages/Home";
import Single from "./pages/Single";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />

						<Route path="blog">
							<Route index element={<Single type={pageType.BLOG_LIST_SEDEBAR} />} />
							<Route path=":url" element={<Single type={pageType.BLOG_CONTENT} />} />
						</Route>

						{/* not used */}
						<Route path="system-detail" element={<Home />}>
							<Route path=":address" element={<Home />} />
						</Route>

						<Route path="FaultAnalysis" element={<Home />}>
							<Route path=":bingId" element={<Home />} />
						</Route>
						<Route path="users">
							<Route index element={<Home />} />
							<Route path=":userId" element={<Home />} />
							<Route path="new" element={<Home />} />
						</Route>
						<Route path="homepage">
							<Route index element={<Home />} />
							<Route path=":productId" element={<Home />} />
							<Route path="new" element={<Home />} />
						</Route>
					</Route>

					<Route path="/v2">
						<Route path="view">
							<Route path="home" element={<Home />} />
							<Route path="system-detail" element={<Home />} />
							<Route path="system-parameter" element={<Home />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
