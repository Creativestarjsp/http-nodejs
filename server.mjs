import express from 'express';
import path from 'path';
const port = process.env.PORT || 3000;
const app = express();
const __dirname = path.resolve();

app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const data = {
    title: 'Sample EJS Page',
    message: 'Welcome to my EJS page!'
  };
  res.render('home', data);
});

const server = app.listen(port,() => {
  const address = server.address();
  console.log(`Server is listening on http://localhost:${address.port}/`);
});
