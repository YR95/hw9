// Написати цикли, які роблять наступне:
//
//   Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5
//   21 21,5….).
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20,
// 30... 100 доларів.
//   Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат
//   яких не перевищує числа N.
//   Дане ціле число. З'ясувати, чи є воно простим (простим називається число,
//   більше 1, які не мають інших дільників крім 1 і себе).
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення
// числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

//task 1
console.log(`Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).`);
let res = '';
for (let i = 20; i < 31; i = i + 0.5) {
  res = res + i + '  ';
}
console.log(res);

//task 2
console.log(`Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.`);
let dolar = 27;
res = '';
for (let i = 10; i < 101; i = i + 10) {
  res = res + i * 27 + '  ';
}
console.log(res);

//task 3
console.log(`Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.`);
let number = parseInt(prompt('Input integer',
  '10'));
for (let i = 1; i < 101; i++) {
  if (number >= Math.pow(i,
    2)) {
    console.log(i);
  }

}

//task 4
console.log(`Дане ціле число. З'ясувати, чи є воно простим (простим називається число,
 більше 1, які не мають інших дільників крім 1 і себе).`);
number = parseInt(prompt('Input integer',
  '10'));
let count = 0;
if (number >= 1) {
  for (i = 0; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  count > 2 ? console.log(`парне`) : console.log(`непарне`);

}

//task5
console.log(`Дане деяке число. Визначити, чи можна одержати це число шляхом зведення
числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).`);
number = parseInt(prompt('Input integer',
  '9'));
res = Math.log(number) / Math.log(3);
(res.toFixed(1) % 1) > 0 ? console.log('не можна') : console.log(`можна`);

