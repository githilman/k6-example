import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  vus: 10,
  duration: '5s',
  ext: {
    loadimpact: {
      projectID: 3636170,
      // Test runs with the same name groups test runs together
      name: "Test Fitaja"
    }
  }
};
export default function () {
  http.get('http://test.k6.io');
  sleep(1);
}

