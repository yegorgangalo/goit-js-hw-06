import users from './users.js';

// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  // твой код
    return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]