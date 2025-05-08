import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleClick = async () => {
    const res = await fetch('http://localhost:50051/ping', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>gRPC Ping</h1>
      <input value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={handleClick}>Send to gRPC</button>
      <p>Response: {response}</p>
    </div>
  );
}

export default App;
