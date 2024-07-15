const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const { generateToken } = require("../utils/jwt");

const register = async ({ email, password, role }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashedPassword, role });
  return { user };
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("Unvalid email or password");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }
  const token = generateToken({ id: user.id, role: user.role });
  return { token };
};


module.exports = {
  register,
  login,
};