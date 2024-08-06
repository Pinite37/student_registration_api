const bcrypt = require('bcryptjs');
const User = require('./models/user.model');
const { sequelize } = require('./utils/db');


sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log('PostreSQL connected');
    });
}).catch(err => {
    console.log(err);
});


async function createUser(email, password, role) {
  try {
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
      email,
      password: hashedPassword,
      role,
    });

    console.log('Utilisateur créé avec succès:', user);
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error);
  }
}

createUser('test1@example.com', 'password123', 'admin');
