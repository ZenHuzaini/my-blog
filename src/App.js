import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />

						<Route path="blog">
							<Route index element={<Blog />} />
							<Route path=":url" element={<Blog />} />
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
