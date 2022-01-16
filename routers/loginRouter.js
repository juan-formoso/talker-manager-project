/* Referência utilizada para geração de senha https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript/9719815

Documentação do pacote node: https://www.npmjs.com/package/generate-password

Outra opção plausível em outro arquivo: 
const crypto = require('crypto')
-----------------------------------------------------------------------------------------------------
const generatePassword = (
  length = 20,
  wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
) =>
  Array.from(crypto.randomFillSync(new Uint32Array(length)))
    .map((x) => wishlist[x % wishlist.length])
    .join('')

console.log(generatePassword()
-----------------------------------------------------------------------------------------------------
*/

const generator = require('generate-password');
const express = require('express');

// Referência para criação da Regex abaixo: dica do Gustavo Sant'Anna no slack
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const router = express.Router();

const emailValidation = (email) => {
  if (!email || email === '') {
    throw new Error('O campo "email" é obrigatório');
  } else if (!emailRegex.test(email)) {
    throw new Error('O "email" deve ter o formato "email@email.com"');
  }
};

const passwordValidation = (password) => {
  if (!password || password === '') {
    throw new Error('O campo "password" é obrigatório');
  } else if (password.length < 6) {
    throw new Error('O "password" deve ter pelo menos 6 caracteres');
  }
};

router.post('/', (req, res) => {
  const { email, password } = req.body;
  try {
    emailValidation(email);
    passwordValidation(password);
    res.status(200).json({ token: generator.generate({
      length: 16,
      numbers: true,
    }) });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
