const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// Register User
exports.register = async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  // validations
  if (!name) {
    return res.status(422).json({ msg: 'O nome é obrigatório!' });
  }

  if (!email) {
    return res.status(422).json({ msg: 'O email é obrigatório!' });
  }

  if (!password) {
    return res.status(422).json({ msg: 'A senha é obrigatório!' });
  }

  if (password !== confirmpassword) {
    return res.status(422).json({ msg: 'As senhas não conferem!' });
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(422).json({ msg: 'Por favor, utilize outro e-mail!' });
  }

  // create password
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  // create user
  const user = new User({
    name,
    email,
    password: passwordHash,
  });

  try {
    await user.save();
    return res.status(201).json({ msg: 'Usuário criado com sucesso!' });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      msg: 'Aconteceu um erro no servidor, tente nocamente mais tarde!',
    });
  }
};

// Login User
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Validations

  if (!email) {
    return res.status(422).json({ msg: 'O email é obrigatório!' });
  }

  if (!password) {
    return res.status(422).json({ msg: 'A senha é obrigatório!' });
  }

  // Check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(422).json({ msg: 'Usuário não encontrado!' });
  }

  // Check if password match
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(422).json({ msg: 'Senha inválida!' });
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );

    return res
      .status(200)
      .json({ msg: 'Autenticação realizada com sucesso', token });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      msg: 'Aconteceu um erro no servidor, tente nocamente mais tarde!',
    });
  }
};

exports.tokenValidation = async (req, res) => { 

  const {token} = req.body;

  if (!token) {
    return res.status(401).json({ isValidToken: false });
  }

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    return res.status(200).json({ isValidToken: true });
  } catch (error) {
    return res.status(400).json({ isValidToken: false });
  }
}
