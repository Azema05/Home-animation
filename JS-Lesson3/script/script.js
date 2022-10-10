// let age = prompt('вам есть 18 лет?')

// if (age >= 18) {
//     alert('добро пожаловать!')
// } else {
//     alert('рано еше')
// }


//========операторы сравнения========

// > ; < ; >= ; <= ; == ; === ; != ; !==

// console.log(100 > 100);
// console.log('a' > 'b');
// console.log('a' > 'A');
// console.log('Коты' > 'Коды');
// console.log('5' === 5);



// let a = '555'
// let A = '555'   две разные


// let num = 10
// num = -num
// console.log(num);




// console.log(0 == false);
// console.log('' == false);
// console.log(0 === false);


//Математические операторы
// + ; - ; * ; / ; % ; **


// const num1 = 5
// const num2 = 2
// console.log(num1 % num2);


// console.log(2 ** 2);
// console.log(3 ** 3);  степени


// const x = 10
// console.log(typeof (+x));


// console.log(+true); 1
// console.log(+''); 0
// console.log(+false); 0


// let n = 5
// n = n * 5
// n *= 5
// n = n / 5
// n /= 5
// n = n + 5
// n += 5
// n = n - 5
// n -= 5

// n = n + 1
// n++  ========= инкримент
// n = n - 1
// n--   ======== дикримент

// console.log(n);



// let n = 7
// if (n == 10){
//     console.log('Привет!');
// } else if (n == 5) {
//     console.log('Добрый день!');
// } else if (n == 7) {
//     console.log('До свидания!');
// } else {
//     console.log('Hola!!!');
// }


// let age = prompt('Вам есть 18?')

// if (age >= 21) {
//     console.log('Ты уже совсем большой!');
// } else if (age >= 18) {
//     console.log('Добро пожаловать!');
// } else {
//     console.log('Доступ запрещен!');
//     window.close()
// }


// let name = prompt('Введите логин')

// if (name == 'сотрудник') {
//     alert('Добро пожаловать');
// } else if (name == 'директор') {
//     alert('Здраствуйте');
// } else {
//     alert('Нет логина');
// }


let name = prompt('Кто там')

if (name == null) {
    alert('Отменено')

} else if (name == 'админ') {

    let pass = prompt('Пароль')

    if (pass == null) {
        alert('Отменено')

    } else if (pass == 'я главный') {
        alert('Здраствуйте!')

    } else {
        alert('Неверный пароль');
    }


} else {
    alert('Я вас не знаю');
}