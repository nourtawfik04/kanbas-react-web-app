import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Counter() {
  const [count, setCount] = useState(7);

  return (
    <div id="wd-counter-use-state" className="text-left mt-3">
      <h2>Counter: {count}</h2>
      <div className="d-flex justify-content-left gap-3">
        <button
          onClick={() => setCount(count + 1)}
          id="wd-counter-up-click"
          className="btn btn-success"
        >
          Up
        </button>
        <button
          onClick={() => setCount(count - 1)}
          id="wd-counter-down-click"
          className="btn btn-danger"
        >
          Down
        </button>
      </div>
      <hr />
    </div>
  );
}
