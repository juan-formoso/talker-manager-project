const fs = require('fs').promises;
const bodyParser = require('body-parser');
const express = require('express');
const { 
  checkToken, 
  checkName, 
  checkAge, 
  checkWatchedAt, 
  checkTalk, 
  checkRate,
} = require('./authentication');

const talker = './talker.json';
const router = express.Router();
router.use(bodyParser.json());
const HTTP_OK_STATUS = 200;
const HTTP_ERROR_STATUS = 404;

const talkers = async () => {
  const list = await fs.readFile(talker);
  const responseList = await JSON.parse(list);
  return responseList;
};

router.get('/', async (_request, response) => {
  const data = await talkers();
  if (data.length === 0) return response.status(HTTP_OK_STATUS).json([]);
  return response.status(HTTP_OK_STATUS).json(data);
});

router.get('/:id', async (request, response) => {
  const data = await talkers();
  const { id } = request.params;
  const findTalk = data.find((talk) => talk.id === parseInt(id, 10));
  if (!findTalk) { 
    return response.status(HTTP_ERROR_STATUS)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }
  return response.status(HTTP_OK_STATUS).json(findTalk);
});

router.post('/', 
checkToken, 
checkName, 
checkAge,
checkWatchedAt,
checkRate,
checkTalk, async (request, response) => {
  const listTalkers = await talkers();
  const newTalker = { id: listTalkers.length + 1, ...request.body };
  listTalkers.push(newTalker);
  await fs.writeFile('./talker.json', JSON.stringify(listTalkers));
  return response.status(201).json(newTalker);
});

module.exports = router;
