import users from './users.js';

// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//     return users.reduce((arrayUserNames, user) => {
//         if (user.friends.some(friend => friend===friendName)) {
//             arrayUserNames.push(user.name);
//         };
//         return arrayUserNames;
//     }, []);
// };

// const getUsersWithFriend = (users, friendName) =>
//      users.reduce((arrayUserNames, user) =>
//          user.friends.some(friend => friend === friendName)
//             ? [...arrayUserNames, user.name]
//             : arrayUserNames, []);

const getUsersWithFriend = (users, friendName) =>
     users.reduce((arrayUserNames, {name, friends}) =>
         friends.includes(friendName) ? [...arrayUserNames, name] : arrayUserNames, []);


console.time('time');
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.timeEnd('time');
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]