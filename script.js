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

// for( let i =100; i>0;i++){
//     console.log(i)
// }
// for( let i =100; i>0;i++){
//     if ( i%3==0){
//         alert(i);
//     }
// }
//----Перебор массива  в цикле -------
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for(let i of arr){
//     console.log(i)
// }
//-----Перебор элементов обьекта----
// let obj = {x: 1, y: 2, z: 3};
// for (let key in obj){
//     console.log(key) //--Выводит только ключи обьекта--
// }
// let obj = {x: 1, y: 2, z: 3};
// for (let key in obj){
//     console.log(obj[key]) //--Выводит все обьекты--
// }
//----while---------------
// let num = 50;
// while (num = 1000) {
// 	num = num * 2;
// }
// console.log(num)
// console.log(num)
// let i = 13;
// while (i <= 33) {
// 	console.log(i);
// 	i++;
// }
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 4; i < arr.length; i--) { 
// 	console.log(arr[i]);
// }
// let arr = ['a', 'b', 'c', 'd', 'e'];	
// for (let i = 0; i <= arr.length; 
// 	i++) { 
// 	console.log(arr[i]);
// 	}
// let arr=[1,2,3,4,5,6,7];
// for (let elem of arr){
//     if ( elem % 2 !=0 ){
//         console.log(elem)
//     }
// }
// let res =0 ;
// for(let i =1;i <=100;i++){
//     if(i %2===0){
//     res+=i;
// }
// }
// console.log(res)
// let res =0 ;
// for(let i =1;i <99;i++){
//     if(i %2!=0){
//     res+=i;
// }
// }
// console.log(res)
// let arr=[2,5,9,3,1,4];
// let res =0;
// for (let elem of arr){
//     res+=elem;
// }
// console.log(res)
// let arr=[2, 5, 9, 3, 1, 4];
// let res =0;
// for (let elem of arr){
//     if( elem %2===0){
//     res+=elem;   
//     }
// }
// console.log(res)
// let arr=[2, 5, 9, 3, 1, 4];
// let res =0;
// for (let i =0; i ,arr.length;i++){
//     res+=arr[i] * arr[i]; 
//     console.log(res)
// }
// let str ='-';
// for(let i =9;i>=1;i--){
//     str+=i
// }
// console.log(str)
//-----Перебор чисел циклом-----
// for( let i =1;i<=1000;i++){
//     let str = String(i);
//     if ( str[0] ==='5'&&str[1]==='5'){
//         console.log(i)
//     }
// }
//----Break-------
// let arr =[1,2,4,5,0,9,8];
// for ( let elem of arr){
//     if ( elem ==0 ){
//         console.log(elem+'  есть')
//         break; 
//     }
// }
// let arr=[1,2,3,3,4,5,-6,6];
// let res=0;
// for (let i =1; i<=arr.length;i++ ){
//     res+=arr[i]*arr[i];

//         console.log(res+'  элемент с отрицательным значением')
//         break;
// let res =0;
// let arr=[1,2,3,3,4,5,-6,6];
// let res=0;
//  for( let i =1;i<=1000;i++){
//         let str = String(i);
//         if ( str[0] && str[1]){
          
//             console.log(i)
//         }
//     }
    
// let arr = [3,22,5,6];
// function arraySum(array){
// let sum = 0;
// for(var i = 0; i < array.length; i++){
//     sum += array[i];
//     }
// console.log(sum);
// }
// arraySum(arr);
//---Инструкция continued---
// let arr=[1,2,3,4,5,6,7,8,9];
// for (let elem of arr ){
//     let result ;
//     if (elem % 2 ===0){
//         result =elem*elem;
//     } else if ( elem % 3 === 0){
//         result=elem*elem*elem;
//     }else {
//         continue;
//     }
//      console.log(result);
// }
// for ( let i =1;i <=9;i++){
//     for (let j =1;j<=3;j++)
//     document.write(i)
// }
// let arr = [];
// for(let i=1; i<=3; i++){
//   for(let j=1; j<=3; j++){
//     arr.push(String(i)+String(j));
//   }
// }
// console.log(arr)
//--- перебор Элементов через цикл----
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; 
// 	i++) { 
// 	arr[i] = arr[i] ** 10;
// }
// console.log(arr);
// let arr = [5, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; 
// 	i++) { 
// 	arr[i]--;
// }
// console.log(arr);
// let arr = [1,2,3,4,5];
// for ( let i = 0 ;i < arr.length;i++){
//   arr [i] +=10;
// }console.log( arr )
//----Заполнение обьектов чеорез цикл
// let keys = ['a', 'b', 'c', 'd', 'e',];
// let values = [1, 2, 3, 4, 5,6];
// let obj = {};
// for (let i = 0; i <= 5; i++) {   // короче тут мы добавили цифру 6 не имеюшую свой индекс тобиш абвг и вместе индекса будет андифандед
// 	let key = keys[i];
// 	let value = values[i];
// 	obj[key] = value;
// }
// console.log(obj);
// let obj = {};
// for (let i = 0; i <= 4; i++) {
// 	obj[keys[i]] = values[i];
// }
// console.log(obj);
// let keys = ['пн', 'вт', 'ср', 'чт', 
// 	'пт', 'сб', 'вс']; 
// let values = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};
// for (let i = 0; i <= 6; i++) {   
// 	let key = keys[i];
// 	let value = values[i];
// 	obj[key] = value;
// }
// console.log(obj)
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};   //корочу тут надо только четь кчисла вывести
// for ( let i = 0;i <= 4; i++){
// if (i %2===0 ){
//   console.log(i)
// } 
// }
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let arr = {};
// for ( let i =0 ;i <= 4 ;i++){
//   arr [key]= value ;
// }console.log( arr )
// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];
// let obj = {};
// for (let i = 0; i <= 4; i++) {
// 	obj[keys[i]] = values[i];
// }
// console.log(obj);
// for(let i=1; i<100; i++) {
// 	let ok = true;
// 	for(let  j=1; j<=10; j++) {
// 	if(i%j==0) { ok = false; 
// 	break; 
// 	}
// 	}if(!ok) continue;
// 	console.log(i);
// 	break;
// 	}
// let n = 12
// for (let i = 7; i <= n; i++) { 
// if (i % i === 0 || i % 1 ==0)
// alert( i );
// }
//-----Работа с флагами -----
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false;
// for ( let elem of arr ){
// 	if ( elem =='c' ){
// 		flag = true;
// 		break;
// 	}
// }if ( flag === true){
// 	console.log('+++')
// }else{
// 	console.log('---')
// }
// var arrayForF = [];
// ---- Короче это код нихуя не пашет ------
//     for(let i = 1; i < 10000000 ;i++){
//       let f1 = i / 1;
//       let f2 = i / 2;
//       let f3 = i / 3;
//       let f4 = i / 4;
//       let f5 = i / 5;
//       let f6 = i / 6;
//       let f7 = i / 7;
//       let f8 = i / 8;
//       let f9 = i / 9;
//       let f10 = i / 10;
//       let f11 = i / 11;
//       let f12 = i / 12;
//       let f13 = i / 13;
//       let f14 = i / 14;
//       let f15 = i / 15;
//       let f16 = i / 16;
//       let f17 = i / 17;
//       let f18 = i / 18;
// 	  let f19 = i / 19;
// 	  let f20 = i / 20;
//       if(f1%1 && f2%1 && f3%1 && f4%1 && f5%1 && f6%1 && f7%1 && f8%1 && f9%1 && f10%1 && f11%1 && f12%1 && f13%1 && f14%1 && f15%1 && f16%1 && f17%1 && f18%1 && f19%1 && f20%1 ){
//         arrayForF.push(i);
//       }
//     }
//         document.write(arrayForF);

//---------- Этот код выводит простые чисда которые делятся на себя и единицу ---- 2520 выводит----------
// for(let i=1; i<100000; i++) {
// let ok = true;
// for(let j=1; j<=10; j++) {
// 	if(i%j>0) { ok = false; break; }
// 	}
// 	if(!ok) continue;
// 	console.log(i);
// 	break;
// }
// function isPrimeNum(num){
//     for (var i = 2; i < num; i++) {
//         if (num%i==0){
//             return false;
//         }
//     };
//     return true;
// }
//-----Этот цикл прооверяет и выводит натуральные числа -----------

// const n = 100; 
// for (let i = 2; i <= n; i++) { 
//   for (let j = 2; j <= i; j++) { 
//     if (i % j === 0 && j < i) { 
//       break; 
//     } else if (j === i) { 
//       console.log(i); 
//     } 
//   } 
// }

// ------Подсчет элементов внутри массива---
// let arr =['a','b','c','d','a','d','a'];
// let count= 0;
// for ( let elem of arr ){
// 	if ( elem == 'a'){
// 	count++;
// }
// }
// console.log( count )
//-------- это пока что не до конца решенная задача -------

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter =0;
// let count=0 ;
// for ( let elem of arr){    //------подсчеть элементов в массиве 

//   if ( elem == 2){
//     counter++;
//   }else if ( elem ==3){
//     count++;
//   }
// }
// console.log( counter , count );
// let arr = ['a', 'b', 'c', 'a', 
// 	'a', 'b']; 
// let count = {a: 0, b: 0, c: 0};
// for ( let elem of arr){
//   count[elem]++;
// }
// console.log( count);
//-----Немного другая вариация --
// let arr = ['a', 'b', 'c','c', 'a', 'a', 'b']; 
// let count = {};
// for ( let elem of arr){
//   if ( count [elem] === undefined){
//     count [elem]=1;
//   }else{
//     count [elem]++;
//   }
// }
// console.log( count);
//----получение предыдушего эл массива---
// let arr =[1,2,3,4,5];
// for (let i = 1; i < arr.length;i++) {    //-- тут мы пулучаем два эл массива 
// 	console.log(arr[i - 2]);
// }
// let arr =[1,2,3,4,5];
// for (let i = 1; i < arr.length;i++) { 
// 	console.log(arr[i - 1]+ arr[i]);
// }
// let arr = [10, 20, 30, 40, 21, 32, 51];
// for (let i =0; i<arr.Length;i++){
//   b = String( arr [i]);
//   if (b[0]==1||b[0]==2){
//     console.log( arr[i])
//   }
// }
// let arr = ['21', '32', '34', '43', 
// 	'45', '54', '55']; 
// let sum = 0;

// for (let elem of arr) {
// 	if (+elem[0] === +elem[1] + 1) {
// 		sum += +elem; // исправляем
// 	}
// }
// console.log(sum)
//-----ошибки в коде---
// for (let i = 10; i> 0; i--) {
// 	console.log(i);
// }
// while (i < 10) {
//     i++;
//       console.log(i);
//   }
// let res=0;
// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }
// console.log(res);
// let arr = ['1', '2', '3', '4', '5' ];
// let sum = 0; 
// for (let elem of arr) {
// 	sum += +elem;
// }
// console.log(sum)
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i <= arr.length; i++) { 
//   console.log( '!')
// 	sum += +i;
// }
// console.log(sum);
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i < arr.length ; i++) { 
//   console.log('!!!')
// 	sum += +arr[i];
// }
// console.log(sum)
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i < arr.length; 
// 	i++) { 
// 	sum += +arr[i];
// }
// console.log(sum)
// let arr = [1, 2, 3, 4, 5];
// let elen=0;

// for (let elem of arr) {
//   console.log( '!!!')
// 	elen = elem ** 2;
// }
// console.log(elen);
//----заполняет массив чмслами от1 до 5
// for (let i = 1; i <= 5; i++) {
// 	arr.push();
// }
// console.log(arr);
//-----флаги тру фолс
// let arr = [1, 2, 6, 4, 5];
// let res = false;
// for (let elem of arr) {
// 	if (elem == 3) {
// 		res = true;
// 		break;
//   }
// }
// console.log(res);
//---- раздел обьектов только четные
// let arr = [1, 2, 3, 4, 5, 6];
// for (let elem of arr) {
// 	if (elem % 2 == 0) {
// 		console.log(elem);
// 	}
// }
// ---- Работа с массивами----
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
// let res=[ ] ;
// for (let elem of arr) {
// 	if (elem % 2 != 0) {   //тут мы находим нечетные от старого массива
// 		res.push(elem);   // тут мы с пущ кидаем нечет элементы в новый массив
// 	}
// }
// console.log(res);
// for ( let i =100; i >=1;i--){
//     console.log(i)   // обратный цикл от 100 до 1--
//   }
//--- заполнение пустого массива циклои
// let arr = []
// for (let i = 0; i < 10; i++) {
//   arr.push(i)   
// }console.log( arr)
// ------ работа с помошью функции -------
// const arr = [20, 40, 77, 53];
// const sum = 0;
// function count() {
// for (i = 0; i < arr.length; i++) {
// sum += arr[i];
// }
// return sum;   
// }
// console.log(count())
//--- нашли среднее арифмитическое массива----
// const arr = [1, 3, 5, 7, 9, 11];
// const getAverage = (numbers) => {
//   let sum = 0; // объявляем переменную, в которой будет храниться сумма всех чисел массива
//   for (let i = 0; i < numbers.length; i += 1) { // инициализируем цикл
//     sum += numbers[i]; // на каждой итерации прибавляем к сумме значение текущего элемента массива
//   }
//   return sum / numbers.length; // возвращаем среднее арифметическое
// };
// console.log(getAverage(arr)); // => 6
//---- выйдут лиш те числа которые начинаются на 1-2-5-------
// let arr = [10, 20, 30, 50, 235, 3000];
// let res
// for (let elem of arr) {
//   let el = String(elem)
// 	if (el[0] ==='1' || el[0] === '2' || el[0]==='5')
//     console.log(el)
// 	}
// let arr = [1, 2, 3, 4, 5,4,3,424,23,42];
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj={};
// for (let i = 0; i <= 6; i++) {   
// 	let key = arr1[i];
// 	let value = arr2[i];
// 	obj[key] = value;
// }
// console.log(obj)
//---увеличение зарплаты на 10%--------
// let obj = {	employee1: 100,	employee2: 200,	employee3: 300,	employee4: 400,	employee5: 500,	employee6: 600,employee7: 700,};
// let tallage = 0.10;
// for(let key in obj){
//   let sum = ( obj[key] *tallage)
//   console.log( sum + obj[key])
// }
//----зарплата увеличиться только для тех у кого она меньше 400
// let obj = {	employee1: 100,	employee2: 200,	employee3: 300,	employee4: 400,	employee5: 500,	employee6: 600,employee7: 700,};
// let tallage = 0.10;
// for(let key in obj){
//   if ( obj[key]<=400){
//   let sum = ( obj[key] *tallage)
//   console.log( sum + obj[key])
// }}
//-----мы записали ключ обьекта и ее значение в разные массивы---
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
// let arr =[] ;
// let orr= [];
// for ( let elem in obj ){
//   arr.push(elem)
//   orr.push( obj[elem])
// }
// console.log( arr)
// console.log( orr )
//----Мы тут записали в новый массив эелементы которого начинаются на 1 или 2
// const obj = {	1: 125,	2: 225,	3: 128,	4: 356,	5: 145,	6: 281,	7: 452,};
// const arr=[];    // новый пустой массив
// for ( let elem in obj ){
//     let values = String(obj[elem]) //метод стринг чтобы работал оператор сравнения
//     //console.log( values +'!!') // это просто проверочные столбы
//     if (values [0] =='1'||values [0]=='2' ){  // оператор сравнивает нулевой индекс равен ли он 1 или 2 
//       arr.push(values)   // с помошью пуш перебрасываем в новый массив числа которые начинаются на 1 или 2
//       // console.log(values)
// }}
// console.log( arr )   // вызываем уже заполненный массив арр 
//----обьединили два массива в один обьект--
// let arr1 = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = [1, 2, 3, 4, 5];
// let obj={};
// for (let i = 0; i <= 4; i++) {   
// 	let key = arr2[i];
// 	let value = arr1[i];
// 	obj[key] = value;
// }
// console.log(obj)
//-----здес тоже самое наоборот---
// let arr1 = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = [1, 2, 3, 4, 5];
// let obj={};
// for (let i = 0; i <= 4; i++) {   
// 	let key = arr1[i];
// 	let value = arr2[i];   // мы тут изменили имена массвов изза этого ключом будут буквы а не как в предыдушем цифры
// 	obj[key] = value;
// }
// console.log(obj)

//-----Многомерные массивы -------

// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];
// console.log( arr[1] [1] , arr[3][2], arr[2][0], arr[0][0]);
//---нашли сумму двумерного массива--
// let arr = [[1, 2], [3, 4], [5, 6]];
// let sum =0 ;
// sum =(arr[0][0]+arr[0][1]+arr[1][0]+arr[1][1]+arr[2][0]+arr[2][1])
// console.log(sum)
//--- трехмерный массив и его сумма ---
// let arr = [	[	[1, 2],	[3, 4],],  	[	[5, 6],	[7, 8],],];
// let sum= 0;
// sum = ( arr[0][0][0]+arr[0][0][1]+arr[0][1][0]+arr[0][1][1] + arr[1][0][0]+arr[1][0][1]+arr[1][1][0]+arr[1][1][1])
// console.log( sum)
// ----вывод всех элементов многомерного массива с фунцией и рекурсией--
// let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
// function foreachArr(arr) { //в ф-цию передаем массив
// arr.forEach(function(item) { //перебираем массив
//       //если элемент массива является вложенным массивом - вызываем нашу ф-цию (будет рекурсия)
// if (Array.isArray(item)) foreachArr(item);
// else document.write(item); //иначе - выводим элемент
//  });
// }
//   foreachArr(arr);
//---- сумма всех элементов многомерного массива без РЕКУРСИИ----
// let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
// let sum = 0;
// while (arr.length) {
//   let cur = arr.shift();
//   if (Array.isArray(cur)) {
//     arr.unshift(...cur);
//     continue;
//   }
//   sum += cur;
// }
// console.log(sum);
//-----заполнение массивов циклом
// let arr= [];
// for ( let i =0; i<3;i++){
//   arr[i]= [];
// for ( let j =0;j<5;j++){
//   arr[i].push(j+1);
// }
// }
// console.log( arr )
//----- заполнение массивов строками----
// let arr= [];
// let t = "x";
// for ( let i =0; i<3;i++){
//   arr[i]= [];
// for ( let j =0;j<5;j++){
//   arr[i].push(t);
// }
// }
// console.log( arr )
//-----заполнение многомерного масссива по порядку
// let arr = [];
// for (let i = 0, k = 1; i < 3; 
// 	i++) { 
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++);
// 	}
// }
// console.log(arr);

// let arr = [];
// let k = 1; // счетчик
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k); // записываем счетчик
// 		k++; // увеличиваем счетчик
// 	}
// }
// console.log(arr);
// let arr = [];
// for (let i = 0, k = 1; i < 4; 
// 	i++) { 
// 	arr[i] = [];
// 	for (let j = 0; j < 2; j++) {
// 		arr[i].push(k++);
// 	}
// }
// console.log(arr);
//--
// let arr = [];
// for (let i = 0,k=1 ; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++);
// 	}
// }
// console.log(arr);
// let arr = [];
// let k = 1;
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k++;
// 	}
// }
// console.log(arr);
// let arr = [];
// let k = 1;
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
// console.log(arr);
//-----перебор многомерного массива и нахождение ее суммы
// let obj = {
// 	key1: {a: 1, b: 2, c: {d: 3,e: 4,}, f: 5,},
// 	key2: {g: 6, h: 7,},}
// console.log(obj.key1['a']+obj.key1['b']+obj.key1['c']['d']+obj.key1['c']['e']+obj.key1['f']+ obj.key2['g']+obj.key2['h'])
//-----сумма  элементов многомерного обьекта с циклами
// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// let sum =0 ;
// for ( let key in obj ){
//   let subObj = obj[key];
//   for (let val in subObj){
//     console.log(subObj[val])  // Если убрать это то выведет только сумму всех обьектов .
//     sum += subObj[val]
//   }
// }
// console.log(sum)

// let students = {
    // 	'group1': ['name11', 'name12', 
    // 		'name13'], 
    // 	'group2': ['name21', 'name22', 
    // 		'name23'], 
    // 	'group3': ['name31', 'name32', 
    // 		'name33'], 
    // };
    // console.log( students ['group3'][0]);

    // let data = {
    //     1: [
    //         'data11',
    //         'data12',
    //         'data13',
    //     ],
    //     2: [
    //         'data21',
    //         'data22',
    //         'data23',
    //     ],
    //     3: [
    //         'data31',
    //         'data32',
    //         'data33',
    //     ],
    //     4: [
    //         'data41',
    //         'data42',
    //         'data43',
    //     ],
    // };
    // for ( let date in data){
    //   for ( let dot of data[date]){
    //     console.log(dot)
        
    //   }
    // }
//   ----- спомошью трех вложенных циклов вывели строки на консоль
    // let data = [
    //     {
    //         1: [
    //             'data111',
    //             'data112',
    //             'data113',
    //         ],
    //         2: [
    //             'data121',
    //             'data122',
    //             'data123',
    //         ],
    //     },
    //     {
    //         1: [
    //             'data211',
    //             'data212',
    //             'data213',
    //         ],
    //         2: [
    //             'data221',
    //             'data222',
    //             'data223',
    //         ],
    //     },
    //     {
    //         1: [
    //             'data411',
    //             'data412',
    //             'data413',
    //         ],
    //         2: [
    //             'data421',
    //             'data422',
    //             'data423',
    //         ],
    //     },
    // ];
    // for ( let date of data){
    //   for ( let key in date){
    //     for ( let obj of date[key])
    //     console.log(obj)
    //   }
    // }
// ------- сумма зрплат и перебор только одни цмклом посколку обьект внутри массива 

    // let employees = [
        // 	{
        // 		name: 'name1',
        // 		salary: 300,
        // 	},
        // 	{
        // 		name: 'name2',
        // 		salary: 400,
        // 	},
        // 	{
        // 		name: 'name3',
        // 		salary: 500,
        // 	},
        // ]
        // let sum =0 ;
        // for ( let user of employees){
        //   sum += user.salary
        // }console.log ( sum )
// ------ тут мы через иф выделили тех кому больще 30 и вывели сумму их зарплат.
        // let employees = [
        //     {
        //         name: 'name1',
        //         salary: 300,
        //         age: 28,
        //     },
        //     {
        //         name: 'name2',
        //         salary: 400,
        //         age: 29,
        //     },
        //     {
        //         name: 'name3',
        //         salary: 500,
        //         age: 30,
        //     },
        //     {
        //         name: 'name4',
        //         salary: 600,
        //         age: 31,
        //     },
        //     {
        //         name: 'name5',
        //         salary: 700,
        //         age: 32,
        //     },
        // ];
        // let sum =0 ;
        // let res = [] ;
        // for ( let user of employees){
        //   if ( user.age >= 30){
        //     sum += user.salary
        
        //   }
        // }console.log ( sum )
//---------- 
        // let months = {
            // 	'ru': [
            // 		'январь',
            // 		'февраль',
            // 		'март',
            // 		'апрель',
            // 		'май',
            // 		'июнь',
            // 		'июль',
            // 		'август',
            // 		'сентябрь',
            // 		'октябрь',
            // 		'ноябрь',
            // 		'декабрь',
            // 	],
            // 	'en': [
            // 		'january',
            // 		'february',
            // 		'march',
            // 		'april',
            // 		'may',
            // 		'june',
            // 		'july',
            // 		'august',
            // 		'september',
            // 		'october',
            // 		'november',
            // 		'december',
            // 	],
            // };
            // let lang = 'en';
            // let month = 5 ;
            // console.log(months[lang][month] )
        
            // let affairs = {
                // 	'2018': {
                // 		11: {
                // 			29: ['дело111', 'дело112', 'дело113'],
                // 			30: ['дело121', 'дело122', 'дело123'],
                // 		},
                // 		12: {
                // 			30: ['дело211', 'дело212', 'дело213'],
                // 			31: ['дело221', 'дело222', 'дело223'],
                // 		},
                // 	},
                // 	'2019': {
                // 		12: {
                // 			29: ['дело311', 'дело312', 'дело313'],
                // 			30: ['дело321', 'дело322', 'дело323'],
                // 			31: ['дело331', 'дело332', 'дело333'],
                // 		}
                // 	},
                // }
                // let day = '30';
                // let month ='12';
                // let year ='2019';
                // let doc = 2;
                // console.log( affairs[year][month][day][doc])

                // let employees = [
                //     {
                //       name: 'name1',
                //       salary: 300,
                //       age:28,
                //     },
                //     {
                //       name: 'name2',
                //       salary: 400,
                //       age: 29,
                //     },
                //     {
                //       name: 'name3',
                //       salary: 500,
                //       age:30,
                //     },
                //   ];
                //   employees.push( { 
                //   name: 'name4',
                //     salary: 600,
                //     age: 31,
                //   });
                //   console.log(employees)

//Стандартные методы--------------------------


// console.log(Math.pow(2,10)) //--возвел в квадрат 3 в  10 степень
// console.log(Math.sqrt(245)) //--нашли квадратный корень из 245
//-----тут мы нашли корень кубов-3 из суммы его элементов
// let arr = [4, 2, 5, 19, 13, 0, 10]
// let sum=0;
// for ( let ard of arr){ //--перебираем циклом
//   sum +=ard**3 ;//---находим сумму и квадратный корень кубов его элемента
//   console.log(ard)
// }console.log(sum)

// let nam=Math.sqrt( 587 )  //--нашли квадратный корень
// console.log(Math.ceil(nam))  //---Округлили результат в большую сторону
// console.log( Math.floor(nam))   //округлили результат в меньшуу сторону
// let obj={      //--создали обьект ключами которые являются Floor  и  ceil и сами обьекты это результаты прощлых мантпуляций
//   'floor':24,
//   'ceil':25
// }
// console.log(obj.floor)  //Выводим обьекты по ключу

// let nam=Math.sqrt( 587 )
// console.log(Math.ceil(nam))
// console.log( Math.floor(nam))
// let obj={
//   'floor':24,
//   'ceil':25
// }
// console.log(obj.floor)

// let arr = [];   // ---пустой массив
// for ( i =0; i<10;i++){  // ---- цикл от1 д 10
//   let a= Math.round(Math.random() * 100);   //---переманная а имеет рондомные числа от 1 до 100 с роуд мы округляем его к ближнему этот медот работаеть 10 раз также как и цикл.
//   arr.push(a)    //---пушим в пустой массив
// }console.log( arr)  //--- выводит 10 рандомных эл массива 
// ----Метод toUpperCase----------
// let str = 'Язык JavaScript';
// console.log(str.toUpperCase());  //-- преобразует простую строку в большие заглавный буквы 
//-------Метод toLowerCase----------
// let str = 'Язык JAVASCRIPT';
// console.log(str.toLowerCase());  //== преобразует строки в маленькие буквы
//------ Метод Math.aabs-----------
// console.log( Math.abs(-3,-4))  //отрицательный в положительный
//----------Метод substr--------
// let str = 'abcd';
// let sub = str.substr(0,3);  //-- отрезает строку от его индекса
// console.log(sub)
//------
// let str = 'abcde';
// let sub = str.substr(-3, 2);
// console.log(sub);

// let arr = [];
// for ( i =0; i<10;i++){
//   let a= Math.round(Math.random() * 100);
//   arr.push(a)
// }console.log( arr)

// let str = 'abcde';
// let sub = str.substr(-3, 2);
// console.log(sub);

// let str ='abcd';
// let sub= str.substring(1)
// console.log( sub )

// let str= 'я учу учу javascript';
// console.log(str.indexOf('учу',5))

// let str = 'Б..Б..Б';
// console.log(str.lastIndexOf('Б', 5));

// let tor = 'abcd';
// console.log(tor.indexOf('c'))

// var str = 'Быть или не быть, вот в чём вопрос.';
// console.log(str.startsWith('Быть'));        // true
// console.log(str.startsWith('не быть'));     // false
// console.log(str.startsWith('не быть', 9));  // true

// var str = 'Быть или не быть, вот в чём вопрос.';
// console.log(str.endsWith('вопрос.'));   // true
// console.log(str.endsWith('быть'));      // false
// console.log(str.endsWith('быть', 16));  // true

// let str = 'html-css-javascript';
// let arr = str.split('-',2);
// console.log(arr);

// let str = 'abcd';
// let arr =str.split('')
// console.log(arr)

// let str = '123456789';
// let arr1 = str.split('');
// let arr2 = arr1.reverse();  //--этот метод переворачивает элементы массива в обратном порядке 
// let result = arr2.join('');  //--этот метод обратно сливает изменненный массив обратно 
// console.log(result);

// let str = '12345';
// let arr = str.split('');
// let sum = 0;
// for (let i = 0; i < arr.length; i++) { 
// 	sum += Number(arr[i]);  //--преобразуем эти числа-строки  в настояшие числа
// }console.log(sum);

// let num = 12345;
// let str = String(num);  //--тут мы преобразовали числа в строки 
// let arr = str.split('');  //--split - читает только строки - нудно заранее преобразовывать числа в стоки.
// console.log(arr)

// let num = '1-2-3-4-5';
// let arr = num.split('-')
// console.log(arr)

// let arr = [1,2,3];
// let str = arr.join('-');
// console.log( str )

// let arr = [1,2,3,4,5];
// let arr1 = arr.join('-');
// console.log(arr1)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.unshift('1', '2');  //--этот метот добавляет новые эл в начало массива
// console.log(arr);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let elem = arr.shift();  //--это метод удаляет первый эл массива а результатом возврашает удаленный элемент
// console.log(arr);  //--массив с удаленным эл
// console.log(elem);  //--удаленный элемент из массива

// let arr = ['1', '2', '3', '4', '5', '6']; 
// let result = [];
// while (arr.length > 0) { // массив уменьшается в цикле пока не достигнет нуля
// 	let first = arr.shift();
// 	let last  = arr.pop();
	
// 	let str = first + last; // тут будет 
// 		строка '16', потом '25', потом '34' 
// 	result.push(str);
// }
// // После цикла в result лежит массив 
// 	['16', '25', '34']. Сольем его в строку: 
// result = result.join('-');
// console.log(result);

// массив.slice(откуда отрезать, 
// 	[докуда отрезать]) 
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(0, 2);
// console.log(sub);

// массив.splice(откуда удаляем, сколько элементов удаляем, [вставить элемент], [вставить элемент]...);
// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(2, 1, '1', '2', '3');
// console.log(arr);

// let arr = [ 1,2,3,4,5];
// let result = arr.includes(3)  //это  метод проеыерять наличие жлемента в массиве
// console.log(result)

// let str = 'london';
// let res = str.slice(0,-1) + str.slice(5,6).toUpperCase() ;
// console.log(res)

// let str = 'london';
// let res =  str.slice(0,2).toUpperCase()+ str.slice(2);
// console.log(res)

// let str = 'word1 word2 word3';
// // Разобьем строку в массив слов:
// let words = str.split(' ');
// for (let i = 0; i < words.length; i++) { 
// 	// Увеличим регистр каждого слова:
// 	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1); 
// }
// // Сольем массив обратно в строку:
// let result = words.join(' ');
// console.log(result); // выведет 'Word1 Word2 Word3' 

// let stor = 'var_test_text';
// let words = stor.split('_');
// for ( let i = 0; i < words.length; i++){
//   words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// }
// let res = words.join(' ');
// console.log(res)

// let str = '12345';
// let result = str.split('').reverse().join('');
// console.log(result);

// let dor = 'dom slaer maza faka'
// let res =dor.split('').reverse().join('');
// console.log(res)

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let digit of arr) {
// 	sum += +digit;
// }
// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let digit of arr) {
// 	sum += Number(digit);
// }
// console.log(sum);

// --ПОЛЬЗОВАТЕЛЬСКИЕ ФУНКЦИИ------------

// function func(num){
//   if(num % 2 ==0){
//     console.log('++++')
//   }if( num % 2 !=0){
//     console.log( '----')
//   }
// }
// func(345);
// func(8);

// function func(num1 , num2){
//   console.log(num1 + num2)
// }
// func(5,5)

// function func(num=0){
//   console.log(num ** 2)
// }func(4)

// function func(num = 5){
//   console.log(num *num);
// }
// func(2)

// function func(num){
//   return num **2;
// }
// let res = func(4);
// console.log(res)

// function func(num){
//   console.log(Math.pow(num,3) )
// }
// let res = func(5);

// function func(num1 , num2){
//   console.log(Math.sqrt(num1)+Math.sqrt(num2))
// }
// let res = func(3,4)
// console.log(Math.sqrt(3))
// console.log(Math.sqrt(4))

// function func(num){
//   return num **2 ;
// }
// let res = func(func(2));
// console.log(res)

// function square(num){
//   return num ** 2;
// }
// function cube(num){
//   return num ** 3;
// }
// let res = cube(square(2));
// console.log(res)

// function square(num) {
// 	return num ** 2;
// }
// function sum(num1, num2) {
// 	return num1 + num2;
// }
// let res = sum(square(2), square(3));
// console.log(res)

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function round(num) {
// 	return num.toFixed(3);  // -- округляет дробьную часть до-3
// }
// let res = round(sqrt(2));
// console.log(res)

// function sqrt(num){
//   return Math.sqrt(num);
// }
// function sum(num1 , num2 , num3){
//   return num1 + num2 + num3
// }
// let res = sum(sqrt(2),sqrt(3),sqrt(4));
// console.log(res)
// console.log(Math.sqrt(2)+Math.sqrt(3)+Math.sqrt(4))

//--Модификация предыдушей части--
// function sqrt(num){
//   return Math.sqrt(num);
// }
// function sum(num1 , num2 , num3){
//   return num1 + num2 + num3
// }
// function round(num){
//   return num.toFixed(3);
// }
// let res = round(sum(sqrt(2),sqrt(3),sqrt(4)))
// console.log(res)

// function func(num) {
// 	return num;  //-- из-за ретерна функция завершена и дольше не читает
// 	let res = num ** 2;
// 	return res;
// }
// console.log( func(3) );

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num); // -- читает только отрицательные числа типа -5 и не смотрит на пол числа
// 	} else {
// 		return num ** 2;  // -- читает пол число и находит квадрат 10
// 	}
// }
// console.log( func(10) );
// console.log( func(-5) );

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}
// 	return num ** 2;
// }
// console.log( func(10) );
// console.log( func(-5) );

// function func(num) {
// 	let sum = 0;	
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 	}
//   return sum;
// }
// console.log( func(5) );

// function func(arr) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; 
// 		i++) { 
// 		sum += arr[i];
// 		// Если сумма больше или равна 10:
// 		if (sum >= 10) {
// 			return i + 1; // выходим из цикла и 
// 				из функции 
// 		}
// 	}
// }
// let res = func([1, 2, 3, 4, 5]);
// console.log(res);

//----ПРАКТИКА----------


//--сколько целых чисел нужно сложить от10 чтобы результат был больше 100
// function func() {
// 	let sum = 0;
// 	let i = 10;
// 	while (true) { // бесконечный цикл
// 		sum += i;
// 		if (sum >= 100) {
// 			return i; // цикл крутится пока 	не выйдет тут 
// 		}	
// 		i++;
//     console.log(i)
// 	}
// }
// console.log( func() );

// let count = 0;
// function func(num){
// while(true){
//   num = num / 2;   //--делим число на два 
//   if(num <=10) break;  //--пока число не станет меньше или равно 10 бреак чтобы цикл не стал бескн
//   count++;  //--счетчик считает кол-во выполненных операций
// }
// return count;  //--функция возврашает счетчик 
// }
// console.log('Кол-во итераций = '+ func(100))
// console.log(func(100)+'++++')

// function  func(num1, num2){
//   if ( num1 > 5 && num2 > 5){
//     return num1 * num2 ;
//   }else{
//     return num1 - num2
//   }
//   return 0;
// }console.log(func(3,2))

// function isPositive(arr) {
// 	for (let elem of arr) {
// 		if (elem % 2 != 0) {   //-- тут проверяем эл массива на чет - если не чета-false
// 			return false;
// 		}
// 	}
// 	return true;  //--- тут true если четное 
// }
// console.log(isPositive([2,6,4,4,8,6,10]))

// function isPositive(arr) {
// 	// for (let elem of arr) {
// 		if (arr % 2 != 0) { 
// 			return false;
// 		// }
// 	}
// 	return true;
// }
// console.log(isPositive(24))

//------ФУНКЦИЯ С МЕТОДАМИ -------------
// function even(x){
//   if (Number.isInteger(x) == true){  //---проверка условия через функцию
//     return x % 2 == 0
//   }else{return undefined}
// }console.log(even(67))
//--------------------------------------

// function func (arr){
// var ks=[];
// for(var value of arr){
//     ks[value] = (ks[value]||0)+1;
// }
// var arr2 =[];
// for(var i in arr) {
//   if ( ks[ arr[i] ] > 1 ) {
//         arr2.push(arr[i]);
//     return true;
//     }
// }
//  return false;
// // alert(arr2);
// }
// console.log(func([1,2,2,11,34,3,29]));

   // const arr = [1, 2, 3, 4, 5, 6, 1, 7, 1, 4, 9, 9, 9, 9, 9, 9, 10, 3]
   //  const uniqSet = new Set();
   //  for (let i = 0; i < arr.length; i++) {
   //      for (let j = 0; j < i; j++)
   //      if (arr[j] === arr[i]) {
   //          uniqSet.add(arr[i])
   //      }
   //  }
   //  const uniq = Array.from(uniqSet)
   //  console.log(uniq)
//--------------------------------------------------------

  // function func (a,b){
  //   return a==b
  // }console.log(func(3,4))
  
// function func (a,b){
//   return a!=b
// }console.log(func(3,3))

// function func (num){
//   return num >= 0;
// }console.log(func(-3))

// function getSum(arr){
//   let res = 0;
//   for ( let elem of arr){
//     res += elem;   //---туту находим сумму элементов
//   }
//   return res / arr.length;   //---тут мы разделили сумму эл на ее длину
// }console.log(Math.floor(getSum([1,2,2,3,3,34,4,4])))   //--тут мы округлилил результат в меньшую сторону

// function getRes (arr1, arr2){
//   let res1 = 0;
//   for( let elem of arr1){
//     res1 += elem;
//   }
//   let res2 = 0;
//   for ( let elem of arr2){
//     res2 += elem;
//   }
//   return res1 / res2; //-- делим рез1 на рез2
// }console.log(Math.round(getRes([1,2,23,3,4,4,4,4444,4],[22,3,3,34,4,44,4])))//округлили до ближайшего целого числа

// function getSum (arr){
//   let res = 0;
//   for ( let elem of arr){
//     res += elem;
//   }
//   return res;
// }console.log(getSum([1,2,23,3,34333,4,4])) //--нашли сумму всех эл в массиве
  
//---ПОИСК ОШИБОК -----

// function func1(){
//   return 4;
// }
// function func2(){
//   return 5;
// }console.log(func1()+func2())

// function getSum (arr){
//   let res = 0;
//   for (let elem of arr){
//     res += elem;
//   }
//   return res;
// }console.log(getSum([1,2,2,3,3,4,4]))

// console.log(sum([1, 2, 3, 4, 5]));
// function sum(arr) {
// 	let sun = 0;
// 	for (let elem of arr) {
// 		sun += elem;
// 	}
// 	return sun;
// }

// function add (num){
//   if (num <= 9){  //-- если число меньше или равно 9 то
//     return '0' + num; n // -- прибавляем 0 перед числом
//   }
//   return num;  // --- если число больше 9 то возврашаем его без изменений
// }console.log(add(66))


// let num ='12345';  //-- тут строка не число 
// let res = getDigitsSum(num);
// console.log(res);
// function getDigitsSum(num) {
//   let arr = num.split('');  // сплит режет только строчные эл
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += Number(elem);  // --- тут мы переделали строчный эл в число а то выводит-12345
// 	}
	
// 	return sum;
// }

//--вычмсляет простое ли число ---
// function isPrime (num){
//   for ( let i = 2; i < num; i++){
//     if ( num % i !== 0 ){
//       return true;
//     }else{
//       return false;
//     }
//   }
// }console.log(isPrime(18))

//--ПРАКТИКА НА ФУНКЦИЯХ -------

 // function getSum (arr){
 //   let sum = 0;
 //   for ( let elem of arr){
 //     sum += elem;
 //   }
 //   return sum;
 // }console.log(getSum([1,23,5,44,44]))  //--сумма эл массива

// function getArrDelete (num){
//   let arr = [];  //-- создаем пустой массив 
//   for (let i = 2; i * 2 <= num; i++){  //-- начали с одного чтобы исключит 1 и уножаем на два чтобы само число не выводилось
//     if (num % i == 0){
//       arr.push(i);  //--кидаем в массив все эл деляшие на число
//     }
//   }return arr;
// }console.log(getArrDelete(12))  //--возвр массив из обьектов деляшихся на число

// function onStr (str){  //--принимает строку 
//   let arr = [];
//   let dor = str.split('') и  //--делит строку 
//   for (let elem of dor){  // -- перебирает строку 
//     arr.push(elem)    //-- пушит строку в пустой массив
//   }
//   return arr;
// }console.log(onStr('12312434'))  //--массив из символов стоки

// function getReverse (str){
//   let rev = str.split('');  //-- разделим чтобы разместит каждый символ по отдельности
//   let res = rev.reverse();  //-- перевернем символы  с реверсе
//   let result = res.join('');  //-- сольем обратно с помошью жоинг 
//   return result;
// }console.log(getReverse('1234567890'))  //-- перевернутая строка 

// -- строки --

// function func(str){
//   let war = str.split(' ');  //-- разбили строку в массив слов
//   for (let i = 0; i < war.length; i++){
//     war[i] = war[i].slice(0,1).toUpperCase() + war[i].slice(1);  // увеличим регистр каждого слова -- war[i].slice(0,1).toUpperCase()-этот метод удаляет первый эл нулевого индекса и увеличиват его и прибавляем  -- war[i].slice(1)- тут мы просто удаляем первый элемент чтобы невыходила Ddoom Sslaer   
//   }
//   let res = war.join(' ');  //-- пинаем его обратно из массива в строчную переменную 
//   return res;
// }console.log(func('doom slaer'))

// function getStr(str){
//   let res =  str.slice(0,1).toUpperCase()+ str.slice(1);  //-увеличит певую бук строки
//   return res;
// }console.log(getStr('wermaht'))

// function func(str){
//   let res = str.slice(0,-1) + str.slice(6).toUpperCase() ;  //-увеличит последнюю бук строки
//   return res;
// }console.log(func('wermaht'))

// function func (num){
//   let res = [];
//   for ( let i = 1; i <= num ; i++ ){ //-- заполнит массив до задонного числа
//     res.push(i)
//   }
//   return res
// }console.log(func(120))

// function func(arr){
//   let res = Math.floor(Math.random() * arr.length )  //-выбирает из эл массива округляет к меньшему числу
//   return arr[res];
// }
// let arr = [1,22,33,4,5,66,67];
// console.log(func(arr))

//--вычисляет простое ли заданное число ----
// function func (num){
//   let res = 0;
//   for(let i = 2; i < num; i++){
//     if ( num % i !== 0 ){
//       return true;
//     }
//     return false;
//   }
// }console.log(func(22))

// function findDividers(start, end) {
//   let answ = [];
//   for (let i=start+1; i<end; i++){ //каждое число с 201 до 499
//     let sum = 0;
//     for (let j=1; j<=i; j++) { //каждая цифра с 1 до самого числа
//       if (i%j==0) { sum += j;} //если остаток от деления = 0, то складываем
//     }
//     answ.push(sum); //добавляем в массив сумму
//   }
//   return answ;
// }

// console.log('Answer:');
// console.log(findDividers(200, 500));

//++++++++++++++
//------ПРОВЕРКА ПАРУ ЧИСЕЛ НА ДРУЖЕСТВЕННОСТЬ--------
// function getDr(num , numb){
//   let arr1 = []; //-- пустой массив для всех эл деляшихся на число
//   let res1 = 0;  //-- пустая переменная для суммы делителей
//   for ( let i = 1; i * 2 <= num; i++){  //--преребирает число и его делители
//     if ( num % i == 0 ){  // находит его делители
   
//       res1 += i;  //-- сумма делителей 
//       arr1.push(i);  //-- массив со всеми делителями числа
     
//       console.log(res1)  // -- проверка
//     }
//   }
//     let arr2 = [];  //-- пустой массив для эл деляшихся на чмсло
//     let res2 = 0;  //-- пустая переменная для суммы делителей числа 
//     for ( let j = 1; j * 2 <= numb; j++){  // перебирает число 
//       if ( numb % j == 0 ){  //-- находит его делители
        
//         res2 += j;  //--сумма делителей
//         arr2.push(j);  // массив с делителями 
        
//         console.log(res2)  //-- проверка 
//       }
//     }
//   if (res1 == numb && res2 == num){ //--если сумма делителей первого заданного числа равна второму заданному числу И сумма делителей второго заданного числа равна первому заданному числу то выводит ТРУЕ
//     return true;
//   }
//   return false;  // Если условие выше не соответствует то выполняется ФОЛСЕ
//  }console.log(getDr(220 ,284))   //-- тут задается два числа которые будут проверены на ДРУЖЕСТВЕННОСТЬ
 
//-----------------------------------

//-- то что на вверху не совсем правильно фнкция должна выполнят лищ одно действие и все поетому мы разделили задачу на множество подфункций 
// console.log( isFriendly(2201 ,284));
// function isFriendly (num1 , num2 ){  //--функция сравнивает первое заданное число с суммой делителей второго заданного числа и второе зад число с суммой делителей первого зад числа
//   return getDivisorSum(num1)== num2 && getDivisorSum(num2)== num1;

//   // let sum1 = getDivisorSum(num1);         |
//   // let sum2 = getDivisorSum(num2);         |
//   // if ( sum1 == num2 && sum2 == num1){     |   вверху сокращенная версия этого кода
//   //   return true;                          |
//   // }else{                                  |
//   //   return false;                         |
//   // }                                       |

// }

// function getDivisorSum ( num ){  //-- функция принимает число и находит массив делителей и сумму делителей этого числа 
//   return getSum(getDivisor(num));
// }

// function getDivisor(num){  //--функция находит все делители заданного числа 
//   let arr = [];
//   for ( let i = 1; i < num; i++){
//     if ( num % i == 0){
//       arr.push(i)  //--пушит в массив чтобы найти сумму
//     }
//   }
//   return arr;
// }

// function getSum (arr){ //--функция находит сумму всех делителей заданного чтсла находяшихся внутри массива
//   let sum = 0;
//   for ( let i = 0; i < arr.length; i++){
//     sum += arr[i]
//   }
//   return sum;
// }

//--ЭТО МОДИФИКАЦИЯ ПРЕДЫДУШЕЙ ЗАДАЧИ ------
//---НАХОЖДЕНИЕ ДРУЖЕСТВЕННЫХ ЧИСЕЛ В ПРОМЕЖУТКЕ МЕЖДУ ДВУМЯ ЗАДАВАЕМЫМИ ЧИСЛАМИ------
// console.log( isFriendly(1 ,9000));
// function isFriendly (num1 , num2 ){ //--цикл между двумя числами
//   let arr1 = [];  //--пустой массив для дружественных элементов в промежутке от двух заданных чисел
//   let e;
//   for (let i = num1; i <= num2; i++){  //--цикл между двумя числами 
//     let a =getDivisorSum(i) , b = getDivisorSum(a);  
//     if (i === b && i != a && (e = !e ))  //--число должно быть равно сумме делитей второгочсила и не должно быть равно самому числу и (e = !e) это чтобы дрежественные числа не дублировались true, false,true сохроняем false пропускаем это чтобы при каждом цикле оно не дублировалос
//       arr1.push([i ,a])   //--пушим в массив дружественные числа
//   }return arr1;
// }

// function getDivisorSum ( num ){  //-- функция принимает число и находит массив делителей и сумму делителей этого числа 
//   return getSum(getDivisor(num));
// }

// function getDivisor(num){  //--функция находит все делители заданного числа 
//   let arr = [];
//   for ( let i = 1; i < num; i++){
//     if ( num % i == 0){
//       arr.push(i)  //--пушит в массив чтобы найти сумму
//     }
//   }
//   return arr;
// }

// function getSum (arr){ //--функция находит сумму всех делителей заданного чтсла находяшихся внутри массива
//   let sum = 0;
//   for ( let i = 0; i < arr.length; i++){
//     sum += arr[i]
//   }
//   return sum;
// }
 
//-------------------------------
  // function Freindly(min, max) {
//             const arr = [];
//             let e;
//             for (let i = min; i <= max; i++) {
//                 let a = getSum(i), b = getSum(a);
//                 if(i === b && i != a && (e = !e)) arr.push([i, a])
//             }
//             return arr
//         }
//         function getSum(num) {
//             let end = num/2,
//                 sum = 0;
//             for (let i = 1; i <= end; i++) {
//                 if (num % i === 0) sum += i;
//             }
//             return sum;
//         }
//         let x = Freindly(1, 10000);
//         console.log(JSON.stringify(x))
    

//---ПРОВЕРЯЯЕТ ЯВЛЯЕТСЯ ЛИ ЧИСЛО ИДЕАЛЬНЫМ ------ СОВЕРШЕННОЕ ЧИСЛО---
//--МЕТОД ДЛЯ МАЗОХИСТОВ-------------
// console.log(getPerfect(29))  
// function getPerfect(num1){  //--функция определяет явлется ли число ИДЕАЛЬНЫМ 
//   if (getDivisorSum(num1) === num1 && getDivisorSum(num1) !== 0){  //--сумма делителей числа должен быть равен самому числу 
//     return true;
//   }
//   return false;
// }
// function getDivisorSum(num){  //функция находит сумму заданного числа
//   return getSum(getDivisor(num));
// }
// // console.log(getDivisorSum(12))
// function getDivisor(num){ //--функция находит все делители заданного числа и
//   let arr = [];
//   for (let i = 1; i < num; i++){
//     if ( num % i == 0){
//       arr.push(i);   //--тут он пушит все делители в массив
//     }
//   }return arr;
// }

// function getSum(arr){  //--функция находит сумму всех делителей заданого числа которые находятся внутри массива
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
//   }return sum;
// }

//---ПРОВЕРЯЯЕТ ЯВЛЯЕТСЯ ЛИ ЧИСЛО ИДЕАЛЬНЫМ ------ МОДЕРНИЗАЦИЯ----
//--МЕТОД ДЛЯ МАЗОХИСТОВ-------------
// console.log(getPerfect(1, 1000))  
// function getPerfect(num1 , num2){  //--функция определяет явлется ли число ИДЕАЛЬНЫМ 
//      let arr1 = [];  //--пустой массив для идеальных чисел в промежутке от двух заданных чисел
//   for (let i = num1; i <= num2; i++){  //--цикл между двумя числами 
//     if ( getDivisorSum(i) === i && getDivisorSum(i) !== 0 ){
//       arr1.push(i) }  //--пушим в массив идеальные числа
//   }return arr1;
// }
// function getDivisorSum(num){  //функция находит сумму заданного числа
//   return getSum(getDivisor(num));
// }
// // console.log(getDivisorSum(12))
// function getDivisor(num){ //--функция находит все делители заданного числа и
//   let arr = [];
//   for (let i = 1; i < num; i++){
//     if ( num % i == 0){
//       arr.push(i);   //--тут он пушит все делители в массив
//     }
//   }return arr;
// }

// function getSum(arr){  //--функция находит сумму всех делителей заданого числа которые находятся внутри массива
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
//   }return sum;
// }


//--  СЧАСТЛИВЫЕ БИЛЕТЫ -----
// function func(numb){
//   let num = String(numb)  //--ПРЕВРАША6ЕМ В СТРОКУ
//   let arr1 = num.split('',3) , arr2 = num.split('',6); //РАСБИВАЕМ СТРОКУ В МАССИВ СТОРОК
//   arr2 = arr2.slice(3,6); //--режет из массива обьекты в указонном промежутке и ссылает на него
//   let sum1 = 0;
//   let sum2 = 0;
//   for ( let i =0; i <3; i++){  //-- перебирает массив от 0 до 3
//     sum1 +=parseInt(arr1[i]); //--метод PARSEINT-ПРЕОБРАЗУЕТ СТРОКУ В ЧИСЛО 
//     sum2 +=parseInt(arr2[i]);  //--ПРЕОБРАЗОВАЛИ СТРОКУ В ЧИСЛО И УЗНАЛИ СУММУ ОБЬЕКТОВ
//   }
//   if (sum1 == sum2){
//     return true
//   }
//   return false;
// }console.log(func(163046))


// var
// 	getNextArr = function(prevArr){ // функция для построения следующего массива из предыдущего
// 		var 
// 			newLen =  prevArr.length + 9, // длинна следующего массива будет больше на 9
// 			arr = []; // заготовка результата
// 		for(var i=0; i<newLen; i++){
// 			var q = 0; // заготовка нового значения
// 			for(j=0; j<10; j++) // берем 10 нужных значений
// 				if(prevArr[i-j]) // ...если они существуют в предыдущем массиве
// 					q+=prevArr[i-j]; // добавляем
// 			arr[i] = q; // или arr.push(q);
// 		}
// 		return arr;
// 	},
// 	luckyTickets = function(num){ // собственно сам  счетчик
// 		var
// 			arr = [], // первый массив
// 			result = 0; // то, что мы вернем
// 		for(i=0;i<10;i++) arr.push(1); // впихиваем в первый массив 10 единиц
// 		for(i=0;i<(num/2-1);i++) // нужное количество раз
// 			arr = getNextArr(arr); // строим следующие массивы
// 		arr.forEach(function(v){ result+=Math.pow(v,2); }); // сводим квадраты значений в получившемся массиве
// 		return result;
// 	};


//---ФУНКЦИЯ ПРИНИМЕТ ДВА ЧИСЛА И ВОЗВРАШАЕТ МАССИВ ИХ ОБШИХ ДЕЛИТЕЛЕЙ
// function func ( num1 , num2){
//   let arr = [];  //-- создаем пустой массив 
//   let arr1 = [];
//   for (let i = 2; i * 2 <= num1; i++){  //-- начали с одного чтобы исключит 1 и уножаем на два чтобы само число не выводилось
//     if (num1 % i == 0){
//       arr.push(i);   }//--кидаем в массив все эл деляшие на число
//   }
//       for ( let j = 2; j * 2 <= num2; j++){
//         if ( num2 % j == 0 ){
//           arr1.push(j);
//         }
//   }
  //---ТУТ МЫ ПЕРЕБИРАЕМ ОБА МАССИВА НА СХОЖИЕ ЭЛЕМЕНТЫ
//   let res = [];

//   for ( let l = 0; l <arr.length; l++){
//     for ( let j = 0; j<arr1.length; j ++){
//       if ( arr[l] === arr1[j]){
//         res.push(arr[l])
//       }
//     }
//   }
//   return res;
// }console.log(func(30 , 40))


//--ФУНКЦИЯ ДЕЛАЕТ ТРАНСЛИТ ТЕКСТА-----------------
// function translit(word){
// 	var answer = '';
// 	var converter = {
// 		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
// 		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
// 		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
// 		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
// 		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
// 		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
// 		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
// 		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
// 		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
// 		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
// 		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
// 		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
// 		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
// 		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
// 	};
 
// 	for (var i = 0; i < word.length; ++i ) {
// 		if (converter[word[i]] == undefined){
// 			answer += word[i];
// 		} else {
// 			answer += converter[word[i]];
// 		}
// 	}
 
// 	return answer;
// }console.log ( translit('дом который построил джек'))

//--------ФУНКЦИЯ ВОЗВРАШАЕТ ЧИСЛО В СТРОКОВОМ ВЫРАЖЕНИИ---------
// function textNumber(number) {
//   let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
//   let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
//   let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
//   if (number > 0 && number <= 9) {
//     return first[number - 1];
//   }
//   if (number >= 10 && number <= 20) {
//     return second[number - 10];
//   }
//   if (number > 20 && number <= 99) {
//     let str = `${number}`;
//     str = str.split('');
//     let firstNumber = str[0];
//     let secondNumber = str[1];
   
//     return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
//   }
// }
// console.log(textNumber(2));
// console.log(textNumber(32));
// console.log(textNumber(55));


//--МОДИФИКАЦИЯ ДО СОТЕН ТЕПЕРЬ ФУНКЦИЯ ПРИНИМАЕТ СОТНИ ------
// function textNumber(number) {
//   let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
//   let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
//   let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
//   let hundreds =['Сто', 'Двести', 'Триста', 'Четыреста', 'Пятсот', 'Шестьсот', 'Семьсот', 'Восемьсот', 'Девятьсот',];
//   if (number > 0 && number <= 9) {
//     return first[number - 1];
//   }
//   if (number >= 10 && number <= 20) {
//     return second[number - 10];
//   }
//   if (number > 20 && number <= 99) {
    
//     let str = `${number}`;
//     str = str.split('');
//     let firstNumber = str[0];
//     let secondNumber = str[1];
   
//     return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
//   }
//   if ( number > 99 && number <= 999){
//     let string = `${number}`;
//     string = string.split('');
//     let firstNumber = string[0];
//     let secondNumber = string[1];
//     let hundredsNumber = string[2];
//     // let thirdNumber = string[1]
    
//    return `${hundreds[firstNumber - 1]} ${third[ secondNumber -2]} ${first[hundredsNumber -1]}`;
//   }
// }
// console.log(textNumber(2));
// console.log(textNumber(32));
// console.log(textNumber(999));



//--ПРОДВИНУТАЯ ТЕОРИЯ НА ФУНКЦИЯХ-----







