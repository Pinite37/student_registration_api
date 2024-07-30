const authService = require("../services/auth.service");

// ADD registration (students and univeristies) in auth controller

const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const { user, token } = await authService.register({ email, password, role });
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.login({ email, password });
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { register, login };

