import React, { useEffect, useState } from "react";

function App() {
  const [backendUsers, setBackendUsers] = useState([{}]);
  
  // render when the component is loaded the first time
  useEffect(() => {
    fetch("/").then(
      response => response.json() // convert to json
    ).then(
      data => setBackendUsers(data) // store within state variable
    );
  }, []);

  return (
    <div>
      <p>Hello, world!</p>
    </div>
  );
}

export default App;
