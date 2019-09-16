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

mixpanel.track("viewed landing");

export default App;
