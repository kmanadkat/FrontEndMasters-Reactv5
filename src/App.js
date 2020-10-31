import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
// import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Alex" animal="Dog" breed="Havanese" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
      <Pet name="Stuart" animal="Mouse" breed="Lunar" /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
