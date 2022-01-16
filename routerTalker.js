const fs = require('fs');
const express = require('express');

const talker = './talker.json';
const router = express.Router();
const HTTP_OK_STATUS = 200;

router.get('/', (_request, response) => {
  const data = JSON.parse(fs.readFileSync(talker));
  if (data.length === 0) return response.status(HTTP_OK_STATUS).json([]);
  return response.status(HTTP_OK_STATUS).json(data);
});

router.get('/:id', (request, response) => {
  const data = JSON.parse(fs.readFileSync(talker));
  const { id } = request.params;
  const findTalk = data.find((talk) => talk.id === parseInt(id, 10));
  return response.status(HTTP_OK_STATUS).json(findTalk);
});

module.exports = router;