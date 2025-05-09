import { PingServiceClient } from './generated/PingServiceClientPb';
import { PingRequest } from './generated/ping_pb';

const client = new PingServiceClient('http://localhost:8080');

window.sendPing = () => {
  const input = document.getElementById('message').value;

  const request = new PingRequest();
  request.setMessage(input);

  client.ping(request, {}, (err, response) => {
    if (err) {
      document.getElementById('response').textContent = `Error: ${err.message}`;
    } else {
      document.getElementById('response').textContent = `Response: ${response.getMessage()}`;
    }
  });
};
