// Task 1

let name = prompt('Ваше имя'),
    age = prompt('Ваш возраст'),
    city = prompt('Ваш город проживания'),
    phone = prompt('Ваш телефон'),
    email = prompt('Ваш  e-mail'),
    company = prompt('Ваша компания');

console.log('Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city +
' и работаю в компании ' + company + '. Мои контактные данные: Телефон ' + phone + ' Почта ' + email + '.');


 // Task 2

 let currentYear = prompt('Какой сейчас год?'),
     birhtday = confirm('У вас уже был день рождения в текущем году?'),
     x = 1;

if (birhtday == true) {
    console.log(currentYear - age);
} else {
    console.log(currentYear - age - x);
}

(birhtday == true) ? console.log(currentYear - age) : 
                     console.log(currentYear - age - x);


 // Task 3 

let str = prompt('Ведите шестизначное число.'),
     sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
     sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

let sum0 = (sum == sum2) ? 'Да' : 'Нет';
console.log(sum0);



 // Task 4

let a = 1;

let message = (a > 0) ? 'Правильно' :
              (a < 0) ? 'Неправильно' : 'Равно 0';
console.log(message);

// Task 5

    a = 10;
let b = 2,
    c = a + b;

console.log(c);
console.log(a - b);
console.log(a / b);

let k = c > 1;
    switch (k) {
        case true:
            console.log(c ** 2);
        break;
        case false:
            console.log('Сумма меньше 1');
        break;
    }


// Task 6

if (2 < a < 11 || 14 > b >= 6) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}


// Task 7

let n = prompt('Введите минуту'),

    msg = (n < 15) ? 'Первая четверть часа' :
          (n <= 30) ? 'Вторая четверть часа' : 
          (n <= 45) ? 'Третья четверть часа' : 
          (n <= 59) ? 'Четвертая четверть часа' : 'ошибка';
console.log(msg); 



// Task 8

let day = prompt('Введите число.'),
    msg1 = (day <= 10) ? 'Первая декада' :
           (day <= 20) ? 'Вторая декада' :
           (day <= 31) ? 'Третья декада' : 'ошибка'; 
console.log(msg1);



// Task 9

let d = prompt('Напишите количество дней.'),
    year =  d / 365,
    month = d / 31,
    week = d / 7,
    hour = d * 24,
    min = d * 1440,
    sec = d * 86400;

   (d >= 365) ? console.log(year + ' лет (год)') : console.log('Меньше года');
   (d > 31) ? console.log(month + ' месяцев') : console.log('Меньше месяца');
   (d > 7) ? console.log(week + ' недель') : console.log('Меньше недели');
   (d >= 1) ? console.log(hour + ' часов(а)') : console.log('Меньше дня');
   (d >= 1) ? console.log(min + ' минут(ы)') : console.log('Меньше дня');
   (d >= 1) ? console.log(sec + ' секунд(ы)') : console.log('Меньше дня');
   


// Task 10


let msg4 = (day <= 31) ? 'Январь' :
           (day <= 59) ? 'Февраль' :
           (day <= 90) ? 'Март' :
           (day <= 120) ? 'Апрель' :  
           (day <= 151) ? 'Май' :
           (day <= 181) ? 'Июнь' :
           (day <= 212) ? 'Июль' :
           (day <= 243) ? 'Август' :
           (day <= 273) ? 'Сентябрь' :
           (day <= 304) ? 'Октябрь' :
           (day <= 334) ? 'Ноябрь' : 
           (day <= 365) ? 'Декабрь' : 'Нет такого месяца';
console.log(msg4);



/* не могу сделать через switch-case
    
if (day <= 243 && day > 151) {
    console.log('Лето');
} else if (243 < day && day <= 334) {
    console.log('Осень');
} else if (90 < day && day <= 151) {
    console.log('Весна');
} else if (334 < day && day <= 365) {
    console.log('Зима');
} else if  (day <= 59 && day >= 1) {
    console.log('Зима');
} else {
    console.log('Нет такого дня в году');
}

*/