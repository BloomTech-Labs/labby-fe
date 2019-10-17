import React from "react";
import "./App.css";
import mixpanel from "./helpers/mixpanel";

import Team from "./components/Team";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <Team />
      </header>
    </div>
  );
}

// any time a user interacts with this page a notification will be sent to mixpanel

mixpanel.track("viewed landing");

export default App;
