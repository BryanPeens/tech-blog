const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
  {
    username: 'testuser',
    email: 'test@example.com',
    password: 'password123'
  },
  {
    username: 'testuser1',
    email: 'testuser1@example.com',
    password: 'password123'
  },
  {
    username: 'testuser2',
    email: 'testuser2@example.com',
    password: 'password123'
  },
];

const postData = [
  {
    title: 'Why MVC is so important',
    content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    user_id: 1
  },
  {
    title: 'First Post',
    content: 'This is the content of the first post',
    user_id: 1
  },
  {
    title: 'Second Post',
    content: 'This is the content of the second post',
    user_id: 2
  }
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
