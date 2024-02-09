import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./routes/UserRouter";
import AdminRouter from "./routes/AdminRouter";
import { UserDataProvider } from "./contexts/UserContext";

function App() {
	return (
		<UserDataProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<UserRouter />} />
					<Route path="/admin/*" element={<AdminRouter />} />
				</Routes>
			</BrowserRouter>
		</UserDataProvider>
	);
}

export default App;
