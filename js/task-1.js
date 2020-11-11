import users from './users.js';

// Получить массив имен всех пользователей (поле name)
// const getUserNames = users => {
//    return users.map(user => user.name);
// };

const getUserNames = users =>
    users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]




// users.forEach(function (user) {
//   console.log(user.name);
// })

// users.forEach(user => console.log(user.name));

// const getUserNames = users.map(user => user.name);
// console.log(getUserNames);