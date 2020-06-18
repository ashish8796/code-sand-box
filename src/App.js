import React, { useState } from "react";
import "./styles.css";
import shuffle from "lodash.shuffle";
import { Flipper, Flipped } from "react-flip-toolkit";
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function App() {
  const [data, setData] = useState(numArr);
  const suffleList = () => setData(shuffle(numArr));

  return (
    <Flipper flipKey={data.join("")}>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <button onClick={suffleList}>Suffle List</button>
        <>
          {data.map(num => (
            <Flipped flipId={num} key={num}>
              <h1>{num}</h1>
            </Flipped>
          ))}
        </>
      </div>
    </Flipper>
  );
}
