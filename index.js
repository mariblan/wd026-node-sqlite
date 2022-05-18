import express from 'express';

const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => res.send('Hello there!'));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
