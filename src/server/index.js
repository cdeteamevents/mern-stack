import express from 'express';
import path from 'path';
import cors from 'cors';

import routes from './routes';

const env = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();

app.use('/api', routes);

if (env === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
} else {
  app.use(cors());
}

app.listen(PORT, () => console.log('App listening on port ', PORT));
