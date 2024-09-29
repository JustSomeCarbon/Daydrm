import React, { useEffect, useState } from "react";

function App() {
  const [backendUsers, setBackendUsers] = useState([{}]);

  useEffect(() => {
    fetch("/").then(
      response => {
        response.json()
      }
    ).then(
      data => {
        setBackendUsers(data)
      }
    );
  }, []);

  return (
    <div>
      <p>Hello, world!</p>
    </div>
  );
}

export default App;
