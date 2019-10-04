import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {text:34});
});

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log('running on port: ' + config.port);
});
