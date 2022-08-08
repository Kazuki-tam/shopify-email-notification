import { app } from './app';

const blue = '\u001b[36m';
const reset = '\u001b[0m';

app.listen(3000, () => {
  console.log(`Express running: ${blue}http://localhost:4000${reset}`);
});
