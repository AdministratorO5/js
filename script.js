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



