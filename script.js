// document.body.innerHTML ='<h1> Hello from javaa script !!!</h1>'

//---Основы------

// №1------------
// alert("Привет мир !")
// // переменные------
// let num;
// num =123;
// alert (num);

// let n,u,m;
// n=1;
// u=2;
// m=3;
// alert(n)

// let a;
// a=10;
// alert(a)
// let s
// s=20
// alert(s)
//сложение------------
// let a = 44+4060;
// alert(a)
// Матем операции-------
// let a =10;
// let s=2;
// alert(a+s)

// let a=10;
// let v=5;
// let d=a-v;
// alert(d)

// let f=7;
// let result = f + d;
// alert(result);
//--дроби -----------
// let a =0.5;let s=0.7;
// alert(a+s)
//--лтрицательные элементы--
// let a=-100;
// alert(a)
// let a=100;
// alert(-a)
//--остаток деления-----
// let a = 13; let b = 5;
// alert(a%b)
// //---Степени----
// let a=2;
// alert(a**10)
//---строки------
// let a="Welcome to the comm zone"
// alert(a)
//--сложение строк
// let a='welcome to the -'; let s="comm zone !";
// alert(a+s)

// let a='hello'; let s=" world";
// alert(a+s)
//---Длина строки
// let a="welcome to the comme zone !!!"
// alert(a.length)
//--Шаблонные строки-----
// let str = `a
// s
// d`;
// alert(str)
//---Специальные значения 
// alert(10/0)
//---Консоль----
// let s=1945;
// console.log(s)
// let s=12; let a= 23; let d=34;
// console.log(s,a,d)
// console.log(456)
// alert(e)
//--Константы -----
// const PI=3.14;
// console.log(PI)
// let a = '5' - '2';
// alert(a);
//---Преобразавание чисел---
// let a=Number('10'); let s=Number('20')
// alert(a+s)

// let a='2'; let s='3';
// alert(+a + +s)
//---Выделение чисел ----
// let n= parseInt('5px');let u= parseInt('6px')
// alert(n+u);
// let num = parseFloat('5.5px');let n= parseFloat('6.25px')
// alert(num+n);
//--Преобразование в строку--
// let num1 = 12;
// let num2 = 21;
// alert(String(num1) + String(num2))
// let num = 12345;let n=5555555555;
// alert(String(num).length + String(n).length);
// alert('1' + true);
//----Строки----
// let str = 'abcde';let num = 3;
// alert(str[num])
//----Последний символ----
// let str = 'the dom slaer';
// alert(str[str.length - 1])
// let str = 'abcde';
//----сумма строки------
// let test = '12345'; 
// alert(Number(test[0]) + Number(test[1])+Number(test[2])+Number(test[3])+Number(test[4]));
// let test = String(12345); 
// alert(test[4],test[3],test[2],test[1],test[0]);
//---Сокрашения ---
// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);
//---Не точные вычисления
// alert(0.3 - 0.1);
//---pompt-----
// let name = prompt('Сколько вам лет?');
// alert('Ваш возраст: ' + name);
// let num1 = prompt('Введите первое число');
// let num2 = prompt('Введите второе число');
// alert(Number(num1) + Number(num2));
//--вывод текста ----
// document.write(12091)
// document.write('<b>text</b>');
// let str = 'text';
// Document.write(<i>str</i>)
// document.write('1<br>','2<br>','3<br>','4<br>','5<br>');
//---Практика на операции----
// alert(60 * 60);
// alert((60 * 60)*30);
// alert((60 * 60)*365);
// alert((60 * 24)*365);
// ---практика на формулы----
// let celsus = 10;
// let farengeit = celsus *1.8 + 32;
// alert(farengeit);
//вот формулы со сторонами квадрата это 3.14да пропустил

//---Массивы----

// let arr = [1, 2, 2,3,4,];
// alert(arr)
// console.log(arr)
// let arr = ['a','s','d','f'];
// alert(arr)
// console.log(arr)
//---Получение элементов ----
// let arr = [1, 2, 3];
// alert(arr[0])
// alert(arr[1])
// alert(arr[2])
// let arr = [1, 2, 3];
// alert(Number(arr[0])+Number(arr[1])+Number(arr[2]))
// let arr = ['a', 'b', 'c', 'd'];
// alert(arr[0]+'+'+arr[1]+'+'+arr[2]+'+'+arr[3])
//---Длина массива---
// let arr = ['a', 'b', 'c','d'];
// console.log(arr.length)
// let arr = ['a', 'b', 'c','d'];
// console.log(arr.length-1)
//---изменения массива ---
// let arr = ['a', 'b', 'c'];
// arr[0] = '1';arr[1]='2';arr[2]='3'
// console.log(arr);
// let arr = ['8', '7', '2'];
// arr[0] += '3';arr[1] += '3'; arr[2] += '3';
// console.log(arr);
// let arr = [1, 2, 3];
// ++arr[0];++arr[1];++arr[2];
// console.log(arr);
//---добавление элементов по ключам----
// let arr=[];
// arr[0]='l';arr[1]='f';arr[2]='s';
// console.log(arr)
// let arr=[1,2,3];
// arr[3]='4';arr[4]='5';
// console.log(arr);
//---Разрежные массивы-----
// let arr = [];
// arr[3] = 'a';arr[8] = 'b';
// console.log(arr.length)
//---Добавление элементов через пуш---
// let arr = [1, 2, 3];
// arr.push('4');arr.push('5');
// console.log(arr);
//---Ключи массивов из переменных ---
// let arr = ['a', 'b', 'c'];
// let key = 2;
// console.log(arr[key])
// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;
// console.log(arr[key1]+arr[key2])
//---Операторы делит в массивах---
// let arr = ['a', 'b', 'c', 'd', 'e'];
// delete arr[1];delete arr[3];
// console.log(arr.length);
//--Исправление ошибок в коде---
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length-1);
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

//---Обьекты---№48-71----------------

// let obj={1:'Monday',2:'Tuesday',3:'Wenesday',4:'Thursday',5:'Friday',6:'Saturday',7:'Sunday'};
// console.log(obj)
//----Вывод всего обьекта----
// let h ={1:'december',2:'janiary',3:'febryary',4:'march',5:'april',6:'may',7:'june',8:'august',9:'september',10:'october',11:'novomber',12:'july'}
// console.log(h)
//---строковые ключи обьектов---
// let user ={name:'hitler ',surname:'adolf ',patronimic:'germani '}
// console.log(user)
//---свойства обьектов---
// let date={year:1,month:4,day:23}
// console.log(date)
//---Ключи и их особенности----
// let obj = {'1a': 1,'b2': 2,'с-с': 3,'d 4': 4,'e5': 5};
// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj[c-c]);
// console.log(obj['d 4']);
// console.log(obj.e5);
//-----изменение обьекта---
// let obj={x:1,y:2,z:3}
// console.log(obj['x']**3)
//---добавление элементов---
// let d={};
// d.w=11;d.e=33;d.v=44;
// console.log(d)
//---неупорядоченность в обьектах----
// let obj = {3: 'c', 1: 'a', 2: 'b'};
// console.log(obj[3])
//---массив ключей обьекта ----
// let a ={s:1,d:3,f:5};
// let keys =Object.keys(a)
// console.log(keys)
//---длина обекта------
// let obj = {x: 1, y: 2, z: 3,f:4};
// console.log(Object.keys(obj).length);
//----ключи обьектов из переменных------
// let a ={x:1,y:2,z:3};
// let key='z';
// console.log(a[key])
//---ошибка обрашения к ключу----
// let a={x:1,y:2,z:3}
// console.log(a["x"])
// let a={x:1,y:2,z:3};
// let key='z';
// console.log(a[key])
//---вычисляяемые свойства----
// let obj = {
// 	x: 1,
// 	y: 2,
// 	z: 3
// };
// let [key1]= 'x';
// let [key2] = 'y';
// let [key3] = 'z';
// console.log(key1)
//---оператор In-----
// let a={x:1,y:2,z:3}
// console.log('d' in a)
//---Типизация обьектов----
// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj['x'] );  // в даномм экземпляре выведет намбер поскольку мы обрашаемся к х а х это ключ обета 1-это число
// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj );    //  выведет обжект посколку obj-это обьект имееюший тип данных наз-обжект .. 
//----Массивы как обьекты --------оператор ---Typeof---не различает массивы от обьектов и доет им опр object----
// let arr = [0, '2', '3'];   // в этом случае мы сделали из изначально числовых обьектов массива в 'строчные эл по типу букв ' кроме одного  
// console.log( typeof arr[0] ); // тут мы вызываем первый эл тобиш - 0 -это не стринг эл с "" а намбер -цифа без "" --number
// console.log(typeof arr[1]);   //тут мы вызываем стринг элемент -" 2 " --string
//---Отличаем обьекты от массивов---Array.isArray
// console.log(Array.isArray([1,2,3]));    //Выведет trye --массив
// console.log(Array.isArray({x:1,y:2,z:3})); // выведет false --обьекты 
//----Обьекты и примитивы --- их -7 string--number--boolean--null--undefined--symbol--bigint---
// let test = {x: 1, y: 2, z: 3};
// console.log(test.x);  // это примитив посколку х это ключ - 1 
// let test = {x: 1, y: 2, z: 3};
// console.log(test);   //это обьект поскольку мы обрашаемся с целому обьекту test 
// let test = [1, 2, 3];
// console.log(test); // это обьект массива мы обрашаемся к массиву с элементами - котоый отеносится к сложным элемента
// let test = [1, 2, 3];
// console.log(test[1]);  .// это уже примитив поскольку мы обрашаемся не к массиву а к одному из его примитивных элементов
// let test1 = [1, 2, 3];
// let test2 = 1;
// console.log(test1[test2]);  //если честно хз но скорее всего это примитив поскольку мы из обекта переделали в простой примитив
// let test1 = [1, 2, 3];
// let test2 = 1;
// console.log(test1);   // тут однознано обект массива имеюший несколко примивных переменных у себя на борту
//---передача обьектов по ссылке---- 
//let a={ s:1,d:2,f:3};
// let w=a;
// w.s='!';
// console.log(a)
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// arr2[0] = 'b';
// console.log(arr2);  // выведет только значение ар2 посколку мы переопределили ар1 и присвоили ему значение ар2 теперь оба ини будут ссылатся на один и тот же обьект или я дэбил ниче не понял ??7
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// arr2[1] = 'b';
// console.log(arr1);  // тут вывыдется оба переделок посколку они не перебивают друг друга или я дэбил ??
//-----константы и о ее изменчивости--- короче изменять можно своства внутри константы но ее саму нельзя изменить
// const arr=['a','s','d'];
// arr[0]='!';
// console.log(arr)  //изменения работают поскольку мы изменили свойство внутри константы но ее саму не тронули
// const arr = ['a', 'b', 'c'];
// arr = [1, 2, 3];
// console.log(arr);  // мы меняем ее а не ее свойство соответственно выведет ошибку
// const arr = ['a', 'b', 'c'];
// arr = ['a', 'b', 'c'];
// console.log(arr); // тут примерно тоже самое
//-----ошибки---
// let obj = {x: 1, y: 2, z: 3};
// console.log(obj['x']);
// let obj = {x: 1, y: 2, z: 3};
// let sum = obj['x'] + obj['y'] + obj['x'];
// console.log(sum);
// let obj = {x: 1, y: 2, z: 3};
// console.log(obj.length);  //вообше безпонятия где ошибка ???

//----- Запросы 

// ---if else----
// let t=1;
// if(t>10){
//     console.log('++++');
// }else{
//     console.log('----')
// }
// let t=1;
// if(10>t){
//     console.log('++++');
// }else{
//     console.log('----')
// }
// let t=10;
// if(10<=t){
//     console.log('++++');
// }else{
//     console.log('----')
// }
//---равество---
// let t=10;
// if(t==10){console.log('+++');
// }else{console.log('---')}
//----неравенство----
// let t =2;
// if(t!=10){
//     console.log('+++');
// }else{
//     console.log('---')
// }
// let t=1;
// let r=2;
// if(t>r){
//     console.log('t');
// }else{
//     console.log("r")
// }
// let t=2;
// let r=4;
// if(t==r){
//     console.log('+++');
// }else{
//     console.log("---")
// }
//----Равенство строк----
// let t='abcd';
// let r='abcdi';
// if(t==r){
//     console.log('+++')
// }else{
//     console.log("---")
// }
//---Равенство строк и чисел--
// let t='123';
// let r=123;
// if(t==r){
//     console.log('+++')
// }else{
//     console.log('---')
// }
//---- равенства по значению и типу ----
// let test1 = '3';
// let test2 = '3';
// if (test1 !== test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let test1 = 3;
// let test2 = '3';		
// if (test1 !== test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
//----Логическое И 
// let n =4;
// if(n=>0 && n<=5){
//     console.log('++++')
// }else{
//     console.log('----')
// }
// let n=12;
// if(n=>10 && n<=20){
//     console.log('++++')
// }else{
//     console.log('-----')
// }
// let n1=1;
// let n2=1;
// if(n1 <= 1 && n2 >= 3){
//     console.log('+++')
// }else{
//     console.log('---')
// }
// ----Логическое ИЛИ 
// let num = 1;
// if (num == 0 || num == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let num = 2;
// if (num == 0 || num == 1 || num 
// 	== 2) { 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
//----Приоритете логческих операторов--
// let n=3;
// if(n>0 && n <5 || n>10 && n<20){
//     console.log('++++')
// }else{
//     console.log('---')
// }      // ---выполнится ++ приоритет И-&& больше чем ИЛИ-||
// let num = 1 ;
// if (num == 0 || num > 1 && num 
// 	< 5 ) { 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let num1 = 3;
// let num2 = 5;
// if ( num1 > 0 && (num2 == 3 || num2 
// 	== 5) ) { 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let num = 3;
// if (num > 5 || num > 0 && num < 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let num = 9;
// if (num == 9 || num > 10 && num 
// 	< 20 || num > 20 && num < 30) { 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
//---- Инвертация кода---
// let num1=2;
// let num2=0;
// if (!(num1 >= 0 && num2 <= 10)) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
//--- Условия с булевыми значениями--
// let t =true;
// if(t==true){
//     console.log('+++')
// }else{
//     console.log('---')
// }
// let test = 1;	
// if (test == false) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let test = '';
// if (test == false) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let test;		
// if (test == true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let test = 3 * 'a';	
// if (test == true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
//----Сокрашеннная формула проверки --
// let test =true;
// if(test){
//     console.log('+++');
// }else(
//     console.log('---')
// )
//---Сокрашение на  ложь----
// let test = true;
// if(!test){
//     console.log('+++')
// }else{
//     console.log('----')
// }
// let test = true;
// if(!test){
//     console.log('+++')
// }else{
//     console.log('----')
// }
// let test = true;
// if(!test){
//     console.log('+++')
// }else{
//     console.log('----')
// }
// let test =true;
// if(!!test){       //// Тут короче надо было поставить два !!
//     console.log('+++')
// }else{
//     console.log('---')
// }
//---Обшая сокрашенная форма проверки--
// let test = 'abc';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let test = '';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let test = 3 * 'abc';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let test;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let test = -1;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
//---Сложные условия сокрашения---
// let test1 = false;
// let test2 = true;
// if (test1 && test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let test1=true;
// let test2=true;
// if(test1 && test2){
//     console.log('+++')
// }else{
//     console.log("---")
// }
// let test1 =true;
// let test2 =true;
// if(test1 && (!test2)){
//     console.log('+++')
// }else{
//     console.log('-----')
// }
// let test1 = true;
// let test2 = true;
// if (test1 === true && test2 !== 
// 	true) { 
// 	console.log('+++');
// } else {
// 	console.log('---'); /// сократить мне увы не удалось
// }
// let test1 = true;
// let test2 = true;
// if (!(test1 && test2)) { 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let test1 = true;
// let test2 = true;
// if (test1 &&(!!test2)) { 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let test1 = true;
// let test2 = true;
// let test3 = true;
// if (test1 && test2 &&test3) { 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let test1 = true;
// let test2 = true;
// let test3 = true;
// if (test1 &&(test2 && test3)) { 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
//----необезательная кострукция---
//  let test =10;
//  if(test ==10){
//     console.log('yes')
//  }
// if (test > 0) 
// 	console.log('+++');
// else 
// 	console.log('---');
//---- else if ее значени и свойства---
// let num = -15;
// if (num <=10) {
// 	console.log('value1');
// } else if (num <=20) {
// 	console.log('value2');
// } else if (num <=30) {
// 	console.log('value3');
// } else {
// 	console.log('неверное значение переменной num');
// }
// let num = -15;
// if (num >=1) {
// 	console.log('value1');
// } else if ( num <=31 &&num >=1){
//     console.log('value4');
// } else {
// 	console.log('неверное значение переменной num');
// }
// let num = 3;
// if (num >= 0) {
// 	if (num <= 5) {
// 		console.log('меньше или равно 5');
// 	} else {
// 		console.log('больше 5');
// 	}
// } else {
// 	console.log('меньше нуля');
// }

//----Пусть в переменной num хранится число. Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двухзначна.
// let num = 12;
// if (num > 10 && num < 99 ) {
// 	console.log( num);
// } else if ( num <=9 ){
//     console.log('Цумма однозначна ');
// } else {
// 	console.log('неверное значение переменной num');
// }
//---- switch case -------
// let num = 1;
// switch (num) {
// 	case 1:
// 		console.log('value1');
// 	break;
// 	case 2:
// 		console.log('value2');
// 	break;
// 	case 3:
// 		console.log('value3');
// 	break;
// 	default:
// 		console.log('incorrect value');
// 	break;
// }
// --- конструкция switch-case -----
// let lang = 'de';
// switch (lang){
//     case 'ru':
// 	console.log('рус');
// break ; 
//     case 'en':
// 	console.log('анг');
// break ;
//     case 'de':
// 	console.log('нем');
// break;
// default: 
// 	console.log('язык не поддерживается');
// }
//----Задачи ----
// let num = 1;
// let res;
// switch (num) {
// 	case 1:
// 	case 2:
// 		res = 'a';
// 	break;
// 	case 3:
// 		res = 'b';
// 	break;
// }
// console.log(res);
// let num = 1;
// let res;
// if (num == 1 || num == 2) {
// 	res = 'a';
// }
// if (num == 3) {
// 	res = 'b';
// }
// console.log(res);
//---- Тернарный оператор ---
// let age = 17;
// let adult = age >= 18 ? true: false;
// console.log(adult);
//----------
// let age = 17;
// let adult;
// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }
// console.log(adult);
//-----Задачи-----
// let num = 1;   .// ---Сокрашенный вид
// let res = num >=0 ? '1' :
// '2';
// console.log(res)

// let num = 1;
// let res;    // ---Не сокрашеный вид
// if (num >= 0) {
// 	res = '1';
// } else {
// 	res = '2';
// }
// console.log(res);
//--------------------------
// let a = 2 * (3 - 1);
// let b = 6 - 2;
// console.log(b==a)
//---
// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;
// console.log(a>b)
//----
// let a = 2 ** 4;
// let b = 4 ** 2;
// console.log(a!=b)
//----Окошка с запросами confirm----
// let ok = confirm('Вам есть 18 ?');
// if (ok) {
// 	console.log('Ты уже не ребенок ');
// } else {
// 	console.log('ты еше ребенок ');
// }
// let age =17;
// let adult;
// if(age>=18){
//     adult = true;
// }else{
//     adult= false;
// }
// console.log(adult)
// let age=18;
// let adult;
// if(age >=18){
//     adult=true;
// }else{
//     adult=false;
// }
// console.log(adult)
// let age=23;
// let res;
// if(age>=18){
//     if(age<=23){
//         res='от 18 до 23'
//     }else{
//         res='больше 23'
//     }
// }else{
//     res='Меньше 18'
// }
// console.log(res)
// let age =23;
// let res;
// if (age >=18){
    
//     if(age<=23){
//         res=' От 18 до 23 '
//     }else{
//         res= 'Больше 23'
//     }
// }else{
//     res='Меньше 18'
// }
// console.log(res)

// let min = 60;
// if (min >= 0 && min <= 14) {
// 	console.log('1 четверть');
// }

// if (min >= 15 && min <= 29) {
// 	console.log('2 четверть');
// }

// if (min >= 30 && min <= 44) {
// 	console.log('3 четверть');
// }

// if (min >= 45 && min <= 60) {
// 	console.log('4 четверть');
// }
// let arr = [1, 2, 3];
// if( arr.length>=3){
//     console.log('больше ил равно трем')
// }else {
//     console.log('меньше трех ')
// }
// let arr = ['a','b','c','d']
// if (arr[0] == 'a' ){
//     console.log('начинается на А')
// }else {
//     console.log('не начинается на А')
// }
// let arr =['a','b','c','d','z']
// let last =arr[arr.length -1]
// if(last =='x' || last == 'z') {
//     console.log('Это Х или Z')
// }else{
//     console.log("Это не Х")
// }
// let num =13;
// let last =String(num)[1];
// if(last == 2 || last ==4 ||last==6 && last !=3 ){
//     console.log('Четное ')
// }else{
//     console.log('Нечетное')
// }

// let a =prompt('Сколько вам лет ?')
// let b = 18;
// let rest = a % b;
// if (rest === 0) {
// 	console.log('Четное число');
// } else {
// 	console.log('Не четное число '); 
// }
// let num1 = '1';
// let num2 = '2';
// if (Number(num1)+ num2 === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let str = "123";
// alert(typeof str); // string
// let num = Number(str); // становится числом 123
// alert(typeof num); // number
// let num =123;
// let last =String(num)[0];
// if(last == 1){
//     console.log('Четное ')
// }else{
//     console.log('Нечетное')
// }
// let num = 123;
// let first = String(num)[0];
// if (first == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let num = 12;
// let str = Number(num);
// if (str.length == 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let num = 12;
// if (String(num).length === 2) {  //--выводит +++ 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let first = 123033;   //--- не решен поностью---
// let num =String(first)[0]; 
// let sum1 = num[0] + num[1] + 
// 	num[2]; 
// let sum2 = num[3] + num[4] + 
// 	num[5]; 
// if (sum1 == sum2) {
// 	console.log('суммы равны');
// } else {
// 	console.log('суммы не равны');
// }

// let min = 1;
// if (min >= 1 && min <=3) {
// 	console.log('Весна');
// }
// if (min >= 4 && min <= 6) {
// 	console.log('Лето');
// }

// if (min >= 7 && min <= 9) {
// 	console.log('Осень');
// }

// if (min >= 10 && min <= 12) {
// 	console.log('Зима');
// }
// let num='dbcd'
// let dom =String(num)[0]     //----- работает первый символ и тп 
// if (dom=='a'){
//     console.log('равно А')
// }else{
//     console.log('Не А')
// }
// let arr = ['a','b','c','d']
// if (arr[0] == 'a' ){
//     console.log('начинается на А')
// }else {
//     console.log('не начинается на А')
// }
//---------------------------------------------
// let num =44;
// let last =String(num)[0];
// if(last == 1 || last ==2 ||last==3){
//     console.log('Да ')
// }else{
//     console.log('Нет ')
// }

//----- Циклы----------









