const axios = require('axios');

async function checkToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'Acesso negado!' });
  }

  const url = process.env.AUTH_URL || "node1:3000"

  try {
    const { data } = await axios.post(
      `http://${url}/api/auth/validation`,
      { token }
    );

    console.log(data);

    next();
    return false;
  } catch (error) {
    return res.status(400).json({ msg: 'Token inválido!' });
  }
}

module.exports = checkToken;
