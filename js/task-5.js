// Напиши класс Car с указанными свойствами и методами.

class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
    static getSpecs(car) {
        console.log(`maxSpeed=${car.maxSpeed}, speed=${car._speed}, isOn=${car._isOn}, distance=${car._distance}, price=${car.price}`);
    }

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
    constructor(car) {
        this._speed = 0;
        this._price = car.price;
        this._maxSpeed = car.maxSpeed;
        this._isOn = false;
        this._distance = 0;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */

    get price() {
        return this._price;
    }

    set price(newPrice) {
        return this._price = newPrice;
    }

    get maxSpeed() {
        return this._maxSpeed;
    }

    set maxSpeed(newMaxSpeed) {
        return this._maxSpeed = newMaxSpeed;
    }
  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
    turnOn() {
        return this._isOn = true;
    }

    /*
    * Добавь код для того чтобы заглушить автомобиль
    * Записывает в свойство isOn значение false,
    * и сбрасывает текущую скорость в 0
    */
    turnOff() {
        this._isOn = false;
        this._speed = 0;
        // return [this._isOn, this._speed];
    }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
    accelerate(value) {
        if ((this._speed + value) <= this._maxSpeed) {
            return this._speed += value;
        }
    }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
    decelerate(value) {
      if ((this._speed - value) >= 0) {
            return this._speed -= value;
        }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
    drive(hours) {
        if (this._isOn) {
            return this._distance += hours * this._speed;
        }
    }
}


const mustang = new Car({ maxSpeed: 200, price: 2000 });

console.table(mustang);
// Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 0, price: 2000

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

console.table(mustang);

// console.log(mustang.__proto__.__proto__ === Car.prototype.__proto__);


class Track extends Car {
    constructor(car) {
        super(car);
        this._weight = car.weight;
        this._power = 0;
        this._isEmpty = car.isEmpty;
    }

    get power() {
        return this._power;
    }
    set power(newPower) {
        return this._power = newPower;
    }
}

const volvo = new Track({ maxSpeed: 120, price: 3200, weight: 30, isEmpty: false });

console.table(volvo);

volvo.power = 45;

volvo.turnOn();
volvo.accelerate(50);
volvo.drive(2);

volvo.decelerate(20);
volvo.drive(1);
volvo.turnOff();

console.table(volvo);