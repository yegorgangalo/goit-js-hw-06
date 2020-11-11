import users from './users.js';

// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  // твой код
    // const arrSkills = users
    //     .reduce((arraySkills, user) => arraySkills = [...arraySkills, ...user.skills], []);
    // return arrSkills
    //     .filter((skill, index) => arrSkills.indexOf(skill) === index)
    //     .sort();

    // const allSkillsArray = users
    //     .reduce((arraySkills, user) => arraySkills = [...arraySkills, ...user.skills], []);
    // return [... new Set(allSkillsArray)].sort();

    // const uniqueSkills = [...users]
    //     .reduce((arraySkills, user) => arraySkills = [...arraySkills, ...user.skills], [])
    //     .reduce((unique, skill) => unique.includes(skill) ? unique : [...unique, skill], [])
    //     .sort();
    // return uniqueSkills;

    const uniqueSkills = [...users]
        .reduce((arraySkills, {skills}) => arraySkills = [...arraySkills, ...skills], [])
        .reduce((unique, skill) => unique.includes(skill) ? unique : [...unique, skill], [])
        .sort();
    return uniqueSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure',
//'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]