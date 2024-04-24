import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./routes/UserRouter";
import AdminRouter from "./routes/AdminRouter";
import { UserDataProvider } from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
	return (
		<>
			<Provider store={store}>
				<UserDataProvider>
					<BrowserRouter>
						<Routes>
							<Route path="/*" element={<UserRouter />} />
							<Route path="/admin/*" element={<AdminRouter />} />
						</Routes>
					</BrowserRouter>
				</UserDataProvider>
			</Provider>
			<ToastContainer />
		</>
	);
}

export default App;
