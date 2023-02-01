import { bootstrap } from './app/app.bootstrap';

if (document.readyState === 'complete') {
  bootstrap().catch((err) => console.error(err));
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}
