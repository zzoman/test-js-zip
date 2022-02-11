import React from "react";
import JSZip from "jszip";

// TODO : Copy and paste a zip file inside of public folder.
const FILE_NAME = "test.zip";

const fetchZip = async () => {
  const request = new Request(`http://localhost:9000/${FILE_NAME}`, {
    method: "GET",
  });
  const response = await fetch(request);
  console.time("unzip");
  const result = await response.arrayBuffer();
  const unzip = await JSZip.loadAsync(result);
  console.timeEnd("unzip");
  console.log(unzip);
};

function App() {
  const handleClick = async () => {
    await fetchZip();
  };
  return (
    <div className="App">
      <button onClick={handleClick} type="button">
        Get unzip!
      </button>
    </div>
  );
}

export default App;
