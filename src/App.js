import React from "react";
import commonStyles from "./App.css"
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <AuthContext.Provider >
          <BrowserRouter>
              <AppRouter/>
          </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
