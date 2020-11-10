import users from './users.js';

// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  // твой код
    return users.reduce((arrayUserNames, user) => {
        if (user.friends.some(friend => friend===friendName)) {
            arrayUserNames.push(user.name);
        };
        return arrayUserNames;
    }, []);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]