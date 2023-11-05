// import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
import { useState } from "react";

import Feature from "./components/Feature";

function App() {
  const [price1, setPrice1] = useState("90700");
  const [price2, setPrice2] = useState("0");
  const totalPrice = +price1 + +price2;

  return (
    <>
      <header>TESLA CONFIG</header>
      <main>
        <Feature data={data[0]} setPrice={setPrice1} />
        <Feature data={data[1]} setPrice={setPrice2} />
        <h1>{totalPrice} €</h1>
      </main>
    </>
  );
}

export default App;
