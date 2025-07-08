import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import First from "./components/First";
import Second from "./components/Second";

function App() {
  return (
    <div className="w-full h-full p-6 flex flex-col items-center gap-4">
      <Nav />
      <Banner />
      <First />
      <Second n={6} />
    </div>
  );
}

export default App;
