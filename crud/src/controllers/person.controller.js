const Person = require('../models/Person');

// CREATE - Data creation
exports.create = async (req, res) => {
  const { name, salary, approved } = req.body;

  // validations
  if (!name) {
    res.status(422).json({ msg: 'O nome é obrigátorio!' });
    return;
  }

  const person = {
    name,
    salary,
    approved,
  };

  try {
    // create person
    await Person.create(person);

    res.status(201).json({
      msg: 'Pessoa inserida no sistema com suscesso!',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Aconteceu um erro no servidor, tente nocamente mais tarde!',
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const people = await Person.find();

    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocorreu um erro, tente novamente mais tarde!',
    });
  }
};

exports.findOne = async (req, res) => {
  // Extract the request data
  const { id } = req.params;

  try {
    const person = await Person.findOne({ _id: id });

    if (!person) {
      res.status(422).json({ msg: 'O usuário não foi encontrado!' });
      return;
    }

    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ msg: 'Pessoa não encontrada!' });
  }
};

// UPDATE - Data update
exports.update = async (req, res) => {
  const { id } = req.params;

  const { name, salary, approved } = req.body;

  const person = {
    name,
    salary,
    approved,
  };

  try {
    const updatePerson = await Person.updateOne({ _id: id }, person);

    if (updatePerson.matchedCount === 0) {
      res.status(422).json({ msg: 'O usuário não foi encontrado!' });
    }

    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({
      msg: 'Algo deu errado, tente novamente mais tarde!',
    });
  }
};

// DELETE - Data delete
exports.delete = async (req, res) => {
  const { id } = req.params;

  const person = await Person.findOne({ _id: id });

  if (!person) {
    res.status(422).json({ msg: 'O usuário não foi encontrado!' });
    return;
  }

  try {
    await Person.deleteOne({ _id: id });

    res.status(200).json({ msg: 'Usuário removido com sucesso!' });
  } catch (error) {
    res.status(500).json({
      msg: 'Algo deu errado, tente novamente mais tarde!',
    });
  }
};
