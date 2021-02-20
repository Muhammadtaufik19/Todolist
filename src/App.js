import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { AuthProvider } from "./context/auth";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
