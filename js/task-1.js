// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
// В prototype функции - конструктора добавь метод getInfo(),
// который выводит в консоль значения полей login и email объекта который его вызвал.

//перший варіант зі змінними
// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// };

// Account.prototype.getInfo = function() {
//         console.log(`login: ${this.login}, email: ${this.email}`);
//     };

// console.log(Account.prototype.getInfo);

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// mango.getInfo();

// const poly = new Account('Poly', 'poly@mail.com');
// poly.getInfo();


//другий варіант з об'єктом
const Account = function (obj) {
    this.login = obj.login;
    this.email = obj.email;
};

Account.prototype.getInfo = function() {
        console.log(`login: ${this.login}, email: ${this.email}`);
    };

console.log(Account.prototype.getInfo);

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});
poly.getInfo(); // Login: Poly, Email: poly@mail.com