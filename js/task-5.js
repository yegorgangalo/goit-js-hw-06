import users from './users.js';

// Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
// };

// const getUserWithEmail = (users, email) =>
//   users.find(user => user.email === email);

const getUserWithEmail = (users, emailValue) =>
  users.find(({email}) => email === emailValue);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}