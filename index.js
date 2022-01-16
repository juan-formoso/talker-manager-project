const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const HTTP_OK_STATUS = 200;
const PORT = '3000';
const talkerRouter = require('./routers/talkerRouter');
const loginRouter = require('./routers/loginRouter');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(bodyParser.json());

app.use('/talker', talkerRouter);

app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log('Online');
});
