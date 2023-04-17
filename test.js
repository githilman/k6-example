import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  stages: [
    { duration: '10s', target: 50 },
    { duration: '1m10s', target: 100 },
    { duration: '30s', target: 50 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  http.get('https://tweet-app-tester-performance-test-aijk54j36a-et.a.run.app'); // Ganti dengan cloudrun URL
  sleep(1);
}