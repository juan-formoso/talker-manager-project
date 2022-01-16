const fs = require('fs').promises;
const bodyParser = require('body-parser');
const express = require('express');
const { verifyToken, 
  verifyName, 
  verifyAge,
  verifyWatchedAt, 
  verifyRate, 
  verifyTalk,
} = require('./authentication');

const talker = './talker.json';

const talkers = async () => {
  const list = await fs.readFile(talker);
  const responseList = await JSON.parse(list);
  return responseList;
};

const router = express.Router();
router.use(bodyParser.json());
const HTTP_OK_STATUS = 200;
const HTTP_ERROR_STATUS = 404;

router.get('/search',
  verifyToken,
  async (request, response) => {
    const { q } = request.query;
    const listTalkers = await talkers();
    const findName = listTalkers.filter((e) => e.name.includes(q));
    return response.status(HTTP_OK_STATUS).json(findName);
});

router.get('/', async (_request, response) => {
  const listTalkers = await talkers();
  if (listTalkers.length === 0) return response.status(HTTP_OK_STATUS).json([]);
  return response.status(HTTP_OK_STATUS).json(listTalkers);
});

router.get('/:id', async (request, response) => {
  const { id } = request.params;
  const listTalkers = await talkers();
  const findTalker = listTalkers.find((elem) => elem.id === parseInt(id, 10));
  if (!findTalker) {
    return response.status(HTTP_ERROR_STATUS)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }
  return response.status(HTTP_OK_STATUS).json(findTalker);
});

router.post('/',
  verifyToken,
  verifyName,
  verifyAge,
  verifyTalk,
  verifyWatchedAt,
  verifyRate,
  async (request, response) => {
    const listTalkers = await talkers();
    const newTalker = { id: listTalkers.length + 1, ...request.body };
    listTalkers.push(newTalker);
    await fs.writeFile('./talker.json', JSON.stringify(listTalkers));
    return response.status(201).json(newTalker);
});

router.put('/:id',
  verifyToken,
  verifyName,
  verifyAge,
  verifyTalk,
  verifyWatchedAt,
  verifyRate,
  async (request, response) => {
    const { id } = request.params;
    const listTalkers = await talkers();
    const findTalker = listTalkers.findIndex((elem) => elem.id === parseInt(id, 10));
    listTalkers[findTalker] = { ...listTalkers[findTalker], ...request.body };
    await fs.writeFile('./talker.json', JSON.stringify(listTalkers));
    return response.status(HTTP_OK_STATUS).json(listTalkers[findTalker]);
});

router.delete('/:id',
  verifyToken,
  async (request, response) => {
    const { id } = request.params;
    const listTalkers = await talkers();
    const findTalker = listTalkers.findIndex((elem) => elem.id === parseInt(id, 10));
    listTalkers.splice(findTalker, 1);
    await fs.writeFile('./talker.json', JSON.stringify(listTalkers));
    return response.status(HTTP_OK_STATUS)
      .json({ message: 'Pessoa palestrante deletada com sucesso' });
});

module.exports = router;
