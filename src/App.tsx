import React from "react"
import { BrowserRouter } from "react-router-dom"
import AuthProvider from "./context/AuthContext"
import AppRoutes from "./router/routes"
import LayoutApp from './components/LayoutApp';

const App:React.FC = () => {
  return (
	<BrowserRouter>
		<AuthProvider>
			<LayoutApp>
				<AppRoutes />
			</LayoutApp>
		</AuthProvider>
	</BrowserRouter>
  )
}

export default App
