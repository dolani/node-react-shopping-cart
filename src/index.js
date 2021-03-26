const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.json({
    message: 'Arise Oh yee Devs'
  });
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Application is currently running on ${port}`);
});
