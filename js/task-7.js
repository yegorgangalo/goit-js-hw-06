import users from './users.js';

// Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//     return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
// };

const calculateTotalBalance = users =>
  users.reduce((totalBalance, {balance}) => totalBalance + balance, 0);

console.log(calculateTotalBalance(users)); // 20916