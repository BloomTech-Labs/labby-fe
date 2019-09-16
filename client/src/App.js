import React from "react";
import "./App.css";
import mixpanel from "./helpers/mixpanel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello From Labby</p>
      </header>
    </div>
  );
}

// any time a user interacts with this page a notification will be sent to mixpanel

mixpanel.track("viewed landing");

export default App;
