import React from "react";
import { HashRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import AppRoutes from "./router/routes";
import LayoutApp from './components/LayoutApp';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <LayoutApp>
          <AppRoutes />
        </LayoutApp>
      </AuthProvider>
    </Router>
  );
};

export default App;
