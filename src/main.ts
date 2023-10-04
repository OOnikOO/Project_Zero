import './style.css'


// Домашнее задание №1

// Курс:
// «Язык сценариев JavaScript и библиотека jQuery»»

// Модуль 1
// ТЕМА: ВВЕДЕНИЕ В JAVASCRIPT

// Задание
// Запрашивать данные у пользователя необходимо с помощью
// prompt(), а выводить результат с помощью alert().




//==== 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».



// let userName = prompt('Введите Ваше имя')
// alert('Привет, '+userName+'!') //---Вариант 1
// alert(`Привет, ${userName}!`) //---Вариант 2



//==== 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.



// const thisYear = 2023
//-------------------Вариант 1

// let yearOfBirth = +(prompt('Введите Ваш год рождения.') as string)
//alert('Вам ' + (thisYear - yearOfBirth) + ' лет.') 

//-------------------Вариант 2
// let yearOfBirth = prompt('Введите Ваш год рождения.') as any 
// alert(`Вам ${(thisYear - yearOfBirth)} лет.`)



//==== 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.



// let side = +(prompt('Введите длину стороны квадрата.') as string)
// alert('Периметр равен ' + side * 4)



//==== 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.



// let circleRadius = +(prompt('Введите радиус окружности.') as string)
// alert('Площадь круга равна ' + (circleRadius**2) * 3.14)



//==== 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.



// let distance = prompt('Введите расстояние в км между двумя городами.') as any
// let time = prompt('За сколько часов хотите добраться?') as any
// alert(`Чтобы успеть вовремя, Вам необходимо двигаться со скоростью ${distance / time} км/ч.`)



//==== 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.



// const rate = 0.92
// let numberOfDollars = +(prompt('Введите количество долларов.') as string)        
// alert(`В евро это будет ${(numberOfDollars * rate).toFixed(2)}.`) //---.toFixed еще не проходили :)



//==== 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.



// let flash = +(prompt('Укажите объем флешки в Гб.') as string)
// const fileSize = 820
// alert(`${(flash * 1024 - (flash * 1024) % fileSize) / fileSize} файла(ов) поместится.`)



//==== 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.



// let sum = +(prompt('Введите сумму денег в кошельке.') as string)
// let chocolatePrice = +(prompt('Введите цену одной шоколадки.') as string)
// alert(`Вы сможите купить ${((sum - (sum % chocolatePrice)) / chocolatePrice)} шоколадку(ок), а сдача составит ${sum % chocolatePrice}.`)



//==== 9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).



// let num = +(prompt('Введите трехзначное число.') as string)
// let a = num % 10
// let b = ((num - a) / 10) % 10
// let c = ((((num - a) / 10) - b) / 10) % 10
// alert(`Ваше число задом наперед ${a}${b}${c}.`)



//==== 10. Запросите у пользователя целое число и выведите в ответ, четное число или нет. В задании используйте логические операторы. В задании не надо использовать if или switch.


// let num = +(prompt('Введите целое число.') as string)
// const result = (num % 2 == 0 && 'Четное') || 'Не четное'
// alert(result)



// Вариант с if:

//let num = +(prompt('Введите целое число.') as string)
//if(num % 2 == 0) {
//alert('Число четное.')
//} else {
//alert('Число нечетное.')
//}



// Вариант с условным («тернарным») оператором:

//let num = +(prompt('Введите целое число.') as string) % 2 == 0 ? alert('Число четное.') : alert('Число нечетное.')

//===================================================================================================
//===================================================================================================

/*
Практическое задание №1

Модуль 1
ТЕМА: ВВЕДЕНИЕ В JAVASCRIPT

Задание 
Запрашивать данные у пользователя необходимо с помощью 
prompt(), а выводить результат с помощью alert().
*/


// 1. Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.

function exponentiate(a: number) {
  return a ** 2
}
console.log(exponentiate(2))
console.log(exponentiate(3))
console.log(exponentiate(4))
console.log(exponentiate(5))


// 2. Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.

function getAverage(a: number, b: number) {
  return (a + b) / 2
}
console.log(getAverage(1, 2))
console.log(getAverage(10, 20))
console.log(getAverage(28, 0))
console.log(getAverage(100, 200))


// 3. Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

function findSquare(a: number) {
  return a * a
}
console.log(findSquare(10))

// 4. Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.

function convert(num: number) {
  const distance = 0.621371
  return distance * num
}
console.log(convert(10))

// 5. Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.

function getResult(a: number, b: number) {
  return (`сумма ${a + b}, вычитание ${a - b}, умножение ${a * b}, деление ${a / b}`)
}
console.log(getResult(10, 5))

// 6. Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.

function getResult_1(a: number, b: number) {
  return (`x = ${-b / a}`)
}
console.log(getResult_1(5, 10))

// 7. Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.
// 8. Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).
// 9. Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234). 
// 10. Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.


//===================================================================================================

// Практическое задание №2


// ■ Задания, в которых необходимо использовать IF.

// 1. Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.

function determineNumber(num: number) {
  if (num > 0) {
    return 'Положительное'
  } else if (num < 0) {
    return 'Отрицательное'
  } else {
    return 'Ноль'
  }
}
console.log(determineNumber(0))
console.log(determineNumber(1))
console.log(determineNumber(-1))

// 2. Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).

function checkData(num: number) {
  if (num < 120 && num > 0) {
    return 'Данные введены корректно'
  } else {
    return 'Данные введены НЕ корректно'
  }
}
console.log(checkData(-1))
console.log(checkData(0))
console.log(checkData(25))
console.log(checkData(125))

// 3. Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7).

function getModule(num: number) {
  if (num < 0) {
    return (`|${num * -1}|`)
  } else {
    return (`|${num}|`)
  }
}
console.log(getModule(1))
console.log(getModule(-2))

// 4. Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.
// 5. Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка. Необходимо учесть случаи попадания точки на оси X или Y или в начало координат.


//===================================================================================================
//===================================================================================================



/*
Домашнее задание №2

Курс:
«Язык сценариев JavaScript и библиотека jQuery»»

Модуль 1
ТЕМА: ВВЕДЕНИЕ В JAVASCRIPT

Задание
Вам необходимо самостоятельно решить, для какого задания
какой оператор ветвления лучше использовать: if, switch или
тернарный.
*/

// 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–12), подростком (12–18), взрослым (18-60) или пенсионером (60– ...).

/*
let userAge = +(prompt('Введите Ваш возраст') as string)
if (userAge > 0 && userAge <12) {
  alert('Ребенок')
} else if (userAge >= 12 && userAge <18) {
  alert('Подросток')
} else if (userAge >= 18 && userAge <60) {
alert ('Взрослый')
} else (userAge >= 60) {
  alert('Пенсионер')
}
*/

// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

/*
let num = +(prompt('Введите число от 0 до 9') as string)
switch (num) {
case 0:
  alert(')')
  break
case 1:
  alert('!')
  break
case 2:
  alert('@')
  break
case 3:
  alert('#')
  break
case 4:
  alert('$')
  break
case 5:
  alert('%')
  break
case 6:
  alert('^')
  break
case 7:
  alert('&')
  break
case 8:
  alert('*')
  break
case 9:
  alert('(')
  break
default:
  alert('Читайте внимательнее условие задания!')
}
*/

// 3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

/*
let num = +(prompt('Введите трехзначное число') as string)
let a = num % 10
let b = ((num - a) / 10) % 10
let c = ((((num - a) / 10) - b) /10) % 10
// debugger
if (a == b && a == c) {
  alert('Все цифры одинаковые')
} else if (c == b) {
  alert('Равны первая и вторая цифры')
} else if (a == c) {
  alert('Равны первая и третья цифры')
} else if (b == a) {
  alert('Равны вторая и третья цифры')
} else {
  alert('Все цифры разные')
}
*/

// 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

/*
let year = +(prompt('Введите любой год') as string)
if ((year % 400 ==0) || (year % 4 == 0) && (year % 100 != 0)) {
alert("Високосный год")
} else {
  alert ("Год не високосный")
}
*/

// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

/*
const num = prompt('Введите пятиразрядное число')
if (num[0] == num[4] && num[1] == num[3]) {
  alert ('Палиндромом')
}  else alert (' Не палиндромом')
*/

/* Вариант #1 (Function Declaration)
const num1 = '12345'
const num2 = '12321'

function result (num) {
  if (num[0] == num[4] && num[1] == num[3]) {
    return 'Палиндромом'
  }  else {
    return 'Не палиндромом'
  }
}
console.log (result (num1))
console.log (result (num2))
*/

/* Вариант #2 (Function Expression + Стрелочная функция)
const resultArr = (num) => num[0] == num[4] && num[1] == num[3]?
  'Палиндромом':'Не палиндромом'
console.log (result (num1))
console.log (result (num2))
*/


// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.


/*
const rateEur = 0.9
const rateUah = 35.9
const rateAzn = 1.9

const sum = +(prompt ('Введите сумму в USD') as string)
const currency = prompt ('Выберете валюту для перевода: EUR, UAH, AZN')

if (currency === 'EUR') {
  alert('Сумма в EUR: ' + (sum * rateEur))
} else if (currency === 'UAH') {
  alert('Сумма в EUR: ' + (sum * rateUah))
} else if (currency === 'AZN') {
  alert('Сумма в EUR: ' + (sum * rateAzn))
} else {
  alert ('Не корректный ввод данных')
}
*/


// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

function purchaseResult(sum: any) {
  if (200 <= sum && sum < 300) {
    return 'К оплате со скидкой 3%   ' + (sum * 0.97);
  } else if (300 <= sum && sum < 500) {
    return 'К оплате со скидкой 5%:  ' + (sum * 0.95)
  } else if (500 <= sum) {
    return 'К оплате со скидкой 7%:  ' + (sum * 0.93)
  } else {
    return 'К оплатe без скидки  ' + sum
  }
}
console.log(purchaseResult(250))
console.log(purchaseResult(400))
console.log(purchaseResult(600))

// 8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

function define(circumference: any, perimeter: any) {
  if ((circumference / 2 / 3.14) < (perimeter / 4 / 2)) {
    return 'Поместится'
  } else {
    return 'Не поместится'
  }
}
console.log(define(5, 50))
console.log(define(50, 50))

// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.


/*
let counter = 0

const question1 = confirm('a?')
const question2 = confirm('b?')
const question3 = confirm('c?')

if (question1 == true) {
  counter += 2
}

const question4 = confirm('a?')
const question5 = confirm('b?')
const question6 = confirm('c?')

if (question4 == true) {
  counter += 2
}

const question7 = confirm('a?')
const question8 = confirm('b?')
const question9 = confirm('c?')

if (question7 == true) {
  counter += 2
}

alert('Количество набранных баллов ' + counter)
*/


// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.



//===================================================================================================
//===================================================================================================


// Практическое задание №3

// Задание
// Для вывода данных используйте alert() или document.write(). Для ввода данных используйте prompt() и confirm()

// ■ === Задания, в которых необходимо использовать WHILE.

// 1. Вывести # столько раз, сколько указал пользователь.

// let lattice = +(prompt ('Укажите сколько #') as string)
// let i = 0
// while (i < lattice){
//     i++
//     document.write ('#')
// }

function showLattice(num: number) {
  let a = ''
  for (let i = 0; i < num; i++) {
    a = a + '#'
  }
  return a + ` ${num}`
}
console.log(showLattice(13))
console.log(showLattice(14))
console.log(showLattice(15))

// 2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0.
// 3. Запросить число и степень. Возвести число в указанную степень и вывести результат.
// 4. Запросить 2 числа и найти все общие делители.
// 5. Посчитать факториал введенного пользователем числа.


// ■ === Задания, в которых необходимо использовать DO WHILE.

// 1. Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.
// 2. Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.

// ■ === Задания, в которых необходимо использовать FOR.

// 1. Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.
// 2. Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает минимальное и максимальное значения диапазона.
// 3. Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу.

//===================================================================================================
//===================================================================================================
// Домашнее задание №3

// Задание 
// Вам необходимо самостоятельно решить, для какого задания какой цикл лучше использовать: WHILE, DO WHILE или FOR.

// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне. 
// 2. Запросить 2 числа и найти только наибольший общий делитель.
// 3. Запросить у пользователя число и вывести все делители этого числа.
// 4. Определить количество цифр в введенном числе.
// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
// 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
// 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK. 
// 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
// 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
//===================================================================================================
//===================================================================================================


/*
1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.

let firstStr = 'abc'
let secondStr = 'abcd'
function compareLines (firstStr, secondStr) {

    if (firstStr.length > secondStr.length) {
        return 1
    } else if (firstStr.length < secondStr.length) {
        return -1
    }
    return 0
    
}
console.log(compareLines(firstStr,secondStr))
*/


//Задание 1
// Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.


// function randomInt(min: number, max: number) {
// return Math.floor(Math.random() * (max - min + 1) + min - 0.5)
// }

// let newArr = []
// for (let i = 0; i < 10; i++) {
// newArr[i] = randomInt(0, 20)
// }

//1. Функция принимает массив и выводит его на экран.
// function showArray(arr: any[]) {
// console.log(arr)
// }

//2. Функция принимает массив и выводит только четные элементы
// function showEven(arr: any[]) {
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] % 2 == 0) {
// console.log(arr[i])
// }
// }
// }

// showArray(newArr)


// Задание 1

// 1. Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

/*
function showPurchase() {
  if (purchasedOl) {
    purchasedOl.innerHTML = ``
  }
  for (let el of purchase) {
    if (!el.purchased) {
      if (purchasedOl) {
        purchasedOl.innerHTML += `<li>${el.name} необходимо купить ${el.count} штук</li>`
      }
    }
  }
  for (let el of purchase) {
    if (el.purchased) {
      if (purchasedOl) {
        purchasedOl.innerHTML += `<li>${el.name} куплено ${el.count} штук</li>`
      }
    }
  }
}

showPurchaseButton?.addEventListener('click', showPurchase)

*/

// 2. Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.



/*
addPurchaseButton?.addEventListener('click', addPurchase)

function addPurchase() {
  const name = prompt('Введите назавание покупки') as string
  const count = +(prompt('Введите количество') as string)
  let find = false
  for (let el of purchase) {
    if (el.name == name) {
      find = true
      el.count += count
    }
  }
  if (!find) {
    purchase.push({
      name,
      count,
      purchased: false
    })
  }
  showPurchase()
}
*/

// 3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

/*
function setPurchased() {
  const name = prompt('Введите назавание покупки') as string
  for (let el of purchase) {
    if (el.name == name) {
      el.purchased = true
    }
  }
  showPurchase()
}

setPurchasedButton?.addEventListener('click', setPurchased)
*/



// Задание 2
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции.

/*
const cheque = [
  {
    name: 'a',
    count: 1,
    price: '1$',
  },
  {
    name: 'b',
    count: 5,
    price: '5$',
  },
  {
    name: 'c',
    count: 10,
    price: '10$',
  },
  {
    name: 'd',
    count: 100,
    price: '100$',
  },
]
*/
// 1. Распечатка чека на экран.

/*
function showCheque(arr: any[]) {
   console.log(arr)
}

showCheque(cheque)
// 2. Подсчет общей суммы покупки.

function getSum(arr:any[]) {
  let sum = 0
  for (let el of arr) {
    sum += el.count*parseFloat(el.price)
  }
  return sum
}
getSum(cheque)
*/

// 3. Получение самой дорогой покупки в чеке.



// 4. Подсчет средней стоимости одного товара в чеке. 

// Задание 1
// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.


const purchase = [
  {
    name: 'a',
    count: 10,
    purchased: true,
  },
  {
    name: 'b',
    count: 5,
    purchased: false,
  },
  {
    name: 'c',
    count: 3,
    purchased: true,
  },
  {
    name: 'd',
    count: 1,
    purchased: false,
  },
]



//==============================================================

const Clock = (function (this: any, { template }: any) {

  let timer: any

  function render() {

    let date = new Date()

    let hours = date.getHours()
    let hoursStr = hours < 10 ? '0' + hours : hours

    let mins = date.getMinutes()
    let minsStr = mins < 10 ? '0' + mins : mins

    let secs = date.getSeconds()
    let secsStr = secs < 10 ? '0' + secs : secs

    let output = template
      .replace('h', hoursStr)
      .replace('m', minsStr)
      .replace('s', secsStr)

    console.log(output)
  }

  this.stop = function () {
    clearInterval(timer)
  }

  this.start = function () {
    render()
    timer = setInterval(render, 1000)
  }

}) as any

let clock = new Clock({ template: 'h:m:s' })
// clock.start()

const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
class MyClock {
  timerElement = document.getElementById('timer')
  template
  constructor({ template }: any) {
    this.template = template
  }

  timer: any

  render() {

    let date = new Date()

    let hours = date.getHours()
    let hoursStr = hours < 10 ? '0' + hours : hours

    let mins = date.getMinutes()
    let minsStr = mins < 10 ? '0' + mins : mins

    let secs = date.getSeconds()
    let secsStr = secs < 10 ? '0' + secs : secs

    let output = this.template
      .replace('h', hoursStr)
      .replace('m', minsStr)
      .replace('s', secsStr)

    if (this.timerElement) this.timerElement.innerText = output
  }

  stop() {
    clearInterval(this.timer)
  }

  start() {
    this.render()
    this.timer = setInterval(() => { this.render() }, 1000)
  }

}

class ExtendedMyClock extends MyClock {
  precision
  constructor({ template }: any, precision: number = 1000) {
    super({ template })
    this.precision = precision
  }
  start() {
    this.render()
    this.timer = setInterval(() => { this.render() }, this.precision)
  }
}

clock = new ExtendedMyClock({ template: 'h:m:s' })
startButton?.addEventListener('click', () => { clock.start() })
stopButton?.addEventListener('click', () => { clock.stop() })

//==============================================================



// Домашнее задание №4

// ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ. ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH.
// ВВЕДЕНИЕ В ОБЪЕКТНО-ОРИЕНТИРОВАННОЕ ПРОГРАММИРОВАНИЕ

// Задание 1


// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
  _radius: number

  constructor(radius: number) {
    this._radius = radius
  }

  get radius() {
    return this._radius
  }
  set radius(value: number) {
    this._radius = value
  }

  get diameter() {
    return this._radius * 2
  }

  calculateArea() {
    return Math.PI * (this._radius ** 2)
  }
  calculateLength() {
    return Math.PI * this.diameter
  }
}

const myCircle = new Circle(15)
console.log(myCircle.radius)
console.log(myCircle.diameter)
console.log(myCircle.calculateArea())
console.log(myCircle.calculateLength())
// ===========================================================

// Задание 2

// Реализовать класс, описывающий html элемент.
// Класс HtmlElement должен содержать внутри себя:
// ■ название тега;
// ■ самозакрывающийся тег или нет;
// ■ текстовое содержимое;
// ■ массив атрибутов;
// ■ массив стилей;
// ■ массив вложенных таких же тегов;
// ■ метод для установки атрибута;
// ■ метод для установки стиля;
// ■ метод для добавления вложенного элемента в конец текущего элемента;
// ■ метод для добавления вложенного элемента в начало текущего элемента;
// ■ метод getHtml(), который возвращает html код в виде строки, включая html код вложенных элементов.
// С помощью написанного класса реализовать следующий блок и добавить его на страницу с помощью document.write().

class HtmlElement {
  tag: string
  single: boolean
  text: string
  atrs: string[] = []
  styles: string[] = []
  elements: HtmlElement[] = []
  constructor(tag: string, single: boolean, text: string) {
    this.tag = tag
    this.single = single
    this.text = text
  }

  setAtr(atr: string) {
    this.atrs.push(atr)
  }
  setStyle(style: string) {
    this.styles.push(style)
  }
  appendElement(element: HtmlElement) {
    this.elements.push(element)
  }
  prependElement(element: HtmlElement) {
    this.elements.unshift(element)
  }

  getHtml() {
    if (this.single) {
      return `<${this.tag} ${this.atrs.join(' ')} value = '${this.text}'>`
    } else {
      const begin = `<${this.tag} ${this.atrs.join(' ')}>${this.text}`
      const end = `</${this.tag}>`
      return begin + this.elements.map(el => el.getHtml()).join('') + end
    }
  }
}

const imgElement = new HtmlElement('img', true, '')
imgElement.setAtr('style="width:100%"')
imgElement.setAtr('src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfgE908Eo7iZP0sfO7cv0f3RqbTwmr8Dy6Xd8eaP2IdENABKMTWq-7xkFR4oSB6SCoOAc&usqp=CAU"')

const pElement = new HtmlElement('p', false, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.")
const h3Element = new HtmlElement('h3', false, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")

const divElement = new HtmlElement('div', false, '')
divElement.setAtr('style="width:300px; margin:10px"')
const wrapperElement = new HtmlElement('div', false, '')
wrapperElement.setAtr('id="wrapper"')
wrapperElement.setStyle('display: flex')
wrapperElement.setStyle('padding: 40px')
wrapperElement.setAtr(`style="${wrapperElement.styles.join(';')}"`)
wrapperElement.appendElement(divElement)
wrapperElement.appendElement(divElement)
divElement.appendElement(pElement)
divElement.appendElement(h3Element)
divElement.appendElement(imgElement)


// ===========================================================

// Задание 3

// Реализовать класс, который описывает css класс.
// Класс CssClass должен содержать внутри себя:
// ■ название css класса;
// ■ массив стилей;
// ■ метод для установки стиля;
// ■ метод для удаления стиля;
// ■ метод getCss(), который возвращает css код в виде строки.

class CssClass {
  name: string
  styles: string[] = []
  constructor(name: string) {
    this.name = name
  }
  setStyle(style: string) {
    this.styles.push(style)
  }
  delStyle(style: string) {
    const id = this.styles.findIndex((el) => { el == style })
    if (id != -1) this.styles.splice(id, 1)
  }
  getCss() {
    return `.${this.name} {${this.styles.join(';')}}`
  }
}

const colorRed = new CssClass('colorRed')
colorRed.setStyle('color:red')
const colorGreen = new CssClass('colorGreen')
colorGreen.setStyle('color:green')
colorGreen.setStyle('font-size:20px')

// Задание 4

// Реализовать класс, описывающий блок html документ.
// Класс HtmlBlock должен содержать внутри себя:
// ■ коллекцию стилей, описанных с помощью класса CssClass;
// ■ корневой элемент, описанный с помощью класса HtmlElement;
// ■ метод getCode(), который возвращает строку с html кодом (сначала теги style с описанием всех классов, а потом все html содержимое из корневого тега и его вложенных элементов).
// С помощью написанных классов реализовать следующий блок (см. рис. 2) и добавить его на страницу с помощью document.write().

class MainBlockHtml {
  cssArray: CssClass[]
  htmlObject: HtmlElement
  constructor(c: CssClass[], h: HtmlElement) {
    this.cssArray = c
    this.htmlObject = h
  }
  getCode() {

    const head = document.querySelector('head')
    head.innerHTML += `<style>${this.cssArray.map((el) => el.getCss()).join('\n')}</style>`

    document.body.insertAdjacentHTML('beforeend', this.htmlObject.getHtml())
  }
}

const page = new MainBlockHtml([colorRed, colorGreen], wrapperElement)
page.getCode()

//!!! ==== Задачи из учебника на тему "Дата и время" ==== !!!

// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

let dateForTask = new Date(2012, 1, 20, 3, 12)
console.log(dateForTask)

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

function getWeekDay(date: any) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  return days[date.getDay()]
}
let nowDate = new Date
console.log(getWeekDay(new Date))

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

function getLocalDay(date: any) {
  let day = date.getDay()
  if (day == 0) {
    day = 7
  }
  return day
}
let date = new Date(2012, 0, 3)
console.log(getLocalDay(date))
console.log('Сегодня', getWeekDay(new Date))

// ==============================
// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

// Пример объекта options:
// --
// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
// showNotification({
//   top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//   right: 10, // 10px от правого края окна (по умолчанию 0px)
//   html: "Hello!", // HTML-уведомление
//   className: "welcome" // дополнительный класс для div (необязательно)
// });

// Используйте CSS-позиционирование для отображения элемента в заданных координатах. Исходный документ имеет необходимые стили.
// ==============================

function showNotification({ top = 0, right = 0, className, html }) {
  let notification = document.createElement('div')
  notification.className = 'notification'
  if (className) {
    notification.classList.add(className)
  }
  notification.style.top = top + 'px'
  notification.style.right = right + 'px'
  notification.innerHTML = html
  document.body.append(notification)

  setTimeout(() => notification.remove(), 30000)
}

showNotification({
  top: 10,
  right: 10,
  html: 'Hello',
  className: 'welcome',
})


// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
document.getElementById('text').style.width = '200px'
document.getElementById('text').style.textAlign = 'center'
document.getElementById('text').style.margin = '10px 200px'
document.getElementById('text').style.fontSize = '40px'
document.getElementById('text').style.color = 'rgb(5, 5, 245)'
document.getElementById('text').style.border = '2px solid black'
document.getElementById('text').style.borderRadius = '10px'


function hideText() {
  document.getElementById('text').style.display = 'none'
  setTimeout(() => document.getElementById('text').style.display = 'block', 2000)
}

document.getElementById('hide_text').addEventListener("click", hideText)

// Создайте кнопку, которая будет скрывать себя по нажатию.

function hideYourself() {
  document.getElementById('hide_yourself').style.display = 'none'
  setTimeout(() => document.getElementById('hide_yourself').style.display = 'block', 2000)
}

document.getElementById('hide_yourself').addEventListener("click", hideYourself)


// Поймайте переход по ссылке
// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.


const contents = document.createElement('div')
contents.id = "contents"
contents.innerHTML = '<p>Как насчёт того, чтобы прочитать <a href="https://wikipedia.org">Википедию</a> или посетить <a href="https://w3.org"><i>W3.org</i></a> и узнать о современных стандартах?</p>'
contents.addEventListener('click', (event) => {
  const target = (event.target as HTMLElement | null)?.closest('a')
  if (target && !confirm('Перейти по ссылке ' + target.href + '?')) {
  event.preventDefault()
  }
})
document.body.append(contents)

const newsContainer = document.getElementById('container')

newsContainer?.addEventListener('click', (e)=>{
if ((e.target as HTMLElement).className != 'remove-button') return
const pane = (e.target as HTMLElement).closest('.pane')
pane.remove()
}, {passive: true})

