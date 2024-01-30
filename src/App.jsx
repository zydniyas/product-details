import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./routes/UserRouter";
import AdminRouter from "./routes/AdminRouter";
import { createContext, useState } from "react";

export const UserContext = createContext({});

function App() {
	const [userDetails, setUserDetails] = useState(null);

	return (
		<UserContext.Provider value={{ userDetails, setUserDetails }}>
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<UserRouter />} />
					<Route path="/admin/*" element={<AdminRouter />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App;
