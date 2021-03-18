import React, { useState } from "react";
import data from "./components/data";
import List from "./components/List";

function App() {
  const [isClear, setIsClear] = useState(false);

  function clearBirthdaysinfo() {
    setIsClear(true);
  }

  return (
    <main>
      <section className="container">
        {isClear ? (
          <h3>0 Grocery item</h3>
        ) : (
          <div>
            <h3>Today's Grocery List({data.length} items)</h3>{" "}
            <List people={data} />
          </div>
        )}
        <button onClick={clearBirthdaysinfo}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
