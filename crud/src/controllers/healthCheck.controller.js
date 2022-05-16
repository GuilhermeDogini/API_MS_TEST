exports.check = (req, res) => {
  res
    .status(200)
    .json({ msg: 'Bem vindo a nossa API - Aqui está tudo perfeito!' });
};
