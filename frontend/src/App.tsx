import React, { useState } from 'react';
import { PingServiceClient } from './generated/PingServiceClientPb.ts'; // removed .ts
import { PingRequest } from './generated/ping_pb'; // removed .d.ts

import './App.css';

const client = new PingServiceClient('http://localhost:8080');

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendPing = () => {
    const request = new PingRequest();
    request.setMessage(message);

    client.ping(request, {}, (err, res) => {
      if (err) {
        setResponse(`Error: ${err.message}`);
      } else {
        setResponse(`Response: ${res.getMessage()}`);
      }
    });
  };

  return (
    <div className="App">
      <h1>gRPC Ping Client</h1>
      <input
        type="text"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={sendPing}>Send Ping</button>
      <p id="response">{response}</p>
    </div>
  );
}

export default App;
