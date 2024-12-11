import React, { useState } from "react";
import StarRating from "./components/StarRating/StarRating";

function App() {
  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(null);

  return (
    <div style={{ margin: "50px", fontFamily: "sans-serif" }}>
      <h1>React Star Rating Demo</h1>
      <StarRating
        count={5}
        value={rating}
        allowHalf={true}
        allowClear={true}
        onChange={(val) => {
          console.log("Rating changed:", val);
          setRating(val);
        }}
        onHoverChange={(val) => {
          setHoverValue(val);
        }}
        character="★"
        direction="ltr"
      />
      <p>Current Rating: {rating}</p>
      <p>Hover Value: {hoverValue !== null ? hoverValue : "None"}</p>

      <h2>Disabled Example</h2>
      <StarRating
        count={5}
        value={3}
        disabled={true}
        character="★"
        direction="ltr"
      />
    </div>
  );
}

export default App;
