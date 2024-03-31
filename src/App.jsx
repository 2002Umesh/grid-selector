import { useState } from "react";
import "./App.css";
import SelectableGrid from "./components/SelectableGrid";

function App() {
  const [size, setSize] = useState({
    row: 10,
    col: 10,
  });
 
  return (
    <>
      <h1 className="underline font-bold text-center mb-5 text-xl">
        Selectable Grid
      </h1>
      <div className="flex justify-center mb-5">
        <div className="p-4">
          <h2>Select no. of Rows :</h2>
          <input
            type="number"
            name="number"
            id="number"
            min={1}
            onChange={(e) =>
              setSize({
                ...size,
                row: e.target.value,
              })
            }
            className="border-2 border-gray-300 rounded-md p-1"
          />
        </div>
        <div className="p-4">
          <h2>Select no. of Columns :</h2>
          <input
            type="number"
            name="number"
            id="number"
            min={1}
            onChange={(e) =>
              setSize({
                ...size,
                col: e.target.value,
              })
            }
            className="border-2 border-gray-300 rounded-md p-1"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <SelectableGrid
          rows={size.row}
          cols={size.col}
          className="border-2 border-gray-300"
        />
      </div>
     
    </>
  );
}

export default App;
