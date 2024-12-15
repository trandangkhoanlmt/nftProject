import React from "react";
import Router from "./routing/Router";
import { AppProviders } from "./components/utils/AppProviders";
import "./styles/css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider>
      <AppProviders>
        <Router />
      </AppProviders>
    </ThirdwebProvider>
  );
}

export default App;
