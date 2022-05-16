// Models
const User = require('../models/user.model');

// Private Route
exports.findOne = async (req, res) => {
  const { id } = req.params;

  // Check if user exists
  const user = await User.findById(id, '-password');

  if (!user) {
    return res.status(404).json({ msg: 'Usuário não encontrado' });
  }

  return res.status(200).json({ user });
};
