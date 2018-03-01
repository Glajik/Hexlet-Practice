# Simple practical tasks on ES2016.
Implementation of functions made by my own.
Tests and description I take from [Hexlet](https://ru.hexlet.io/?ref=161019) cources. 

All right reserved by Hexlet(c)

# Введение в программирование

## isHappyNumber.js - Счастливые числа
Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в единицу. Например:
```
7   => 7^2 = 49,
49  => 4^2 + 9^2 = 16 + 81 = 97,
97  => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10,
10  => 1^2 + 0^2 = 1.
```
Вывод: исходное число 7 - счастливое.

*isHappyNumber.js*
Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true, если число счастливое, и false, если нет. Количество итераций процесса поиска необходимо ограничить числом 10.

*Подсказки*
Воспользуйтесь вспомогательной функцией sumOfSquareDigits, которая принимает на вход число и возвращает "сумму квадратов цифр" этого числа.

## sumSquareDifference.js
Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.

## fizzBuzz.js
Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end. При этом, вывод происходит по следующим правилам:

+ Если число делится без остатка на 3 и на 5, то вместо числа выводится слово FizzBuzz
+ Если число делится без остатка на 5, то вместо него выводится слово Buzz
+ Если число делится без остатка на 3, то вместо него выводится слово Fizz
+ В остальных случаях выводится само число

Функция принимает два параметра (begin и end), определяющих ("включительно") начало и конец диапазона. Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.
Пример

*Вызов функции:*

`fizzBuzz(11, 20);`

*Вывод в терминале:*
```
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
```

## isHappyTicket.js
Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.

Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6
isHappyTicket.js

Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер может быть как в числового, так и строкового типа: см. примеры ниже). Функция должна возвращать true, если билет счастливый, или false, если нет.

*Пример:*
```
isHappyTicket(385916); // true
isHappyTicket(231002); // false
isHappyTicket(128722); // true
isHappyTicket('054702'); // true
```

## isPowerOfThree.js - Степень тройки
Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 это третья степень (3^3), а 81 это четвертая (3^4).

*Пример:*
```
isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)
```

## dnaToRna.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

*Пример:*
```
dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // null
```

## withoutTwoZeros.js - Без двух нулей

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два аргумента - количество нулей и количество единиц, и определяет сколько есть способов размещения этих нулей и единиц так, что бы не было двух нулей идущих подряд.

Например, определим все способы размещения двух нулей и двух единиц. Существует шесть возможных способов размещения: 0011, 0101, 0110, 1001, 1010, 1100. В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100. Вычитаем их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3.

Примеры использования:
```
import withoutTwoZeros from './solution';

withoutTwoZeros(2, 2); // 3
withoutTwoZeros(1, 1); // 2
withoutTwoZeros(1, 3), // 4
withoutTwoZeros(2, 4); // 10
```

## rational.js
Реализуйте абстракцию для работы с рациональными числами, используя пары:

+ Конструктор make(numer, denom).
+ Селекторы numer (числитель) и denom (знаменатель).
+ Функцию toString, возвращающую строковое представление рационального числа. Например для дроби 3/4 созданной так make(3, 4), строковым представлением будет 3 / 4.
+ Предикат isEqual, проверяющую равенство двух рациональных чисел. Например isEqual(make(1, 2), make(2, 4)).
+ Функцию add, выполняющую сложение дробей.
+ Функцию sub, выполняющую вычитание дробей.
+ Функцию mul, выполняющую умножение дробей.
+ Функцию div, выполняющую деление дробей.

Экспортируйте созданные функции.

Обратите внимание, что результатом любой арифметической операции над рациональным числом будет рациональное число.

*Пример:*
```
const rat1 = make(2, 3);
const rat12 = make(4, 6);
const rat2 = make(7, 2);

toString(rat12); // '4 / 6'
isEqual(rat1, rat12); // true

add(rat1, rat2); // 25/6
sub(rat2, rat1); // 17/6
mul(rat1, rat2); // 14/6
div(rat1, rat2); // 4/21
```

## isPerfect.js - Идеальные числа
Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.

## reverse.js - Переворот строки
Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.

*Например:*
```
import reverse from './reverse';

reverse('str'); // rts
reverse('hexlet'); // telxeh
```
Попробуйте решить эту задачу используя рекурсивный процесс. Для этого вам понадобится функция substr.

*Подсказки*

Чтобы узнать длину строки, используйте функцию length из модуля strings:
``
import { length } from './strings';

length('welcome'); // 7
``
Чтобы получить подстроку из строки, используйте функцию substr из модуля strings:
``
import { substr } from './strings';

substr('foo', 1, 2); // 'oo';
`

# JS: Функции

## Композиция функций

# JS: Последовательности

## take.js - Первые n элементов
Реализуйте и экспортируйте по умолчанию функцию take, которая возвращает список, состоящий из первых n (значение передается первым параметром) элементов исходного (переданного вторым параметром) списка.
Остальные детали работы функции демонстрирует нижеприведённый код:

*Пример:*
```
take(3, l()); // ()
take(3, l(1, 2)); // (1, 2)
take(1, l(7, 2)); // (7)
```

## zip.js - Молния
Напишите и экспортируйте по умолчанию функцию zip, которая принимает на вход два списка и возвращает третий, в котором каждый элемент это список элементов исходных списков, стоящих на тех же позициях.

*Пример:*
```
const list1 = l(1, 5, 3, 8, 9);
const list2 = l(2, 3, 2, 1);

//  ((1, 2), (5, 3), (3, 2), (8, 1))
const result = zip(list1, list2);
```

## pair.js - Пары без функций
Как видно из примера, если списки различаются по длине, то длина результирующего списка равна длине короткого списка.

Пары неотрицательных чисел можно представить числами и арифметическими операциями. Можно считать, что пара чисел a и b – это 2^a * 3^b.

Функции car и cdr при этом будут просто вычислять значения a и b (кратности двойки и тройки, соответственно), раскладывая аргумент на множители.

Например, имея пару 5, 8 в виде числа 209952 (2^5 * 3^8), можно получить первый элемент пары, разложив число на множители и вычислив факторизацию для числа 2, а второй элемент пары – разложив число на множители и вычислив факторизацию для числа 3.
pairs.js

Реализуйте и экспортируйте следующие функции в соответствии с алгоритмом выше:
+ cons
+ car
+ cdr

Пример:
```
const pair = cons(5, 8);	// 2^5 * 3^8 = 209952
car(pair); // 5
cdr(pair); // 8
```
*Подсказки*
+ Пара – это число, поэтому, чтобы получить из него исходные значения a и b, нужно раскладывать число на множители.

## sameParity.js - Одинаковая четность
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список и возвращает новый, состоящий из элементов, у которых такая же четность, как и у первого элемента входного списка.

*Пример:*
```
sameParity(l(-1, 0, 1, -3, 10, -2)); // (-1, 1, -3)

sameParity(l()); // ()
```

## union.js - Уникальное объединение
Напишите и экспортируйте функцию по умолчанию union, которая принимает на вход два списка и возвращает третий, являющийся объединением уникальных значений двух исходных списков.

*Пример:*
```
const list1 = l(2, 3, 2, 1, 7);
const list2 = l(1, 5, 3, 5, 8, 9);

const result = union(list1, list2);
// (2, 3, 1, 7, 5, 8, 9)
```

## flatten.js - Выравнивание
Реализуйте и экспортируйте по умолчанию функцию flatten, которая делает плоским вложенный список.

*Пример:*
```
const list = l(1, 2, l(3, 5), l(l(4, 3), 2));

// (1, 2, 3, 5, 4, 3, 2)
flatten(list);
```


# JS: Деревья

# JS: Коллекции

## difference.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход два множества и возвращает множество, составленное из таких элементов, которые есть в первом множестве, но нет во втором.
*Пример*
```
difference(new Set([2, 1]), new Set([2, 3]));
// → [1]
```


# JS: Прототипы

## magic.js
Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:

Принимает на вход любое число аргументов и возвращает функцию, которая, в свою очередь, принимает на вход любое количество аргументов и так до бесконечности (привет, рекурсия ;)).
Результат вызова этой функции при проверке на равенство должен быть равен сумме всех аргументов всех подфункций.
```
magic() == 0; // true
magic(5, 2, -8) == -1; // true
magic(1, 2)(3, 4, 5)(6)(7, 10) == 38; // true
magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) == 13; // true
```
*Подсказки*
Объекты в js по умолчанию имеют метод valueOf, который вызывается автоматически в тех местах, где требуется преобразование к числовому значению (контекст арифметических операций и операций нестрогого сравнения). В ситуации выше, во время сравнения, js вызовет valueOf для нашей функции. Этим можно воспользоваться для того, чтобы возвращать сумму через valueOf.
```
const obj = {}
obj + 3; // '[object Object]3'
obj.valueOf = () => 3;
obj + 7; // 10
```

-----------------------------
sortDeps.js Деревья

Реализуйте и экспортируйте по умолчанию функцию sortDeps, которая принимает на вход список зависимостей и возвращает список (массив) отсортированных узлов.

Пример:

const deps1 = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: [],
};

console.log(sortDeps(deps1));
// => ['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'];

Независимые библиотеки и цепочки библиотек должны появляться в том порядке, в котором они встречались в исходной структуре.
Подсказки

    Об алгоритме: топологическая сортировка

-------------------------

intersection.js

Реализуйте и экспортируйте функцию по умолчанию, которая находит пересечение двух массивов. Пересечение двух массивов A и B — это массив только с теми элементами A и B, которые одновременно принадлежат обоим массивам, без дублей.

intersection([2, 1], [2, 3]);
// → [2]

intersection([3, 1, 3], [3, 3, 2]);
// → [3]

intersection(
      ['kirill', 'rakhim', 'alex', 'dima', 'dzhamshut'],
      ['ippolit', 'rakhim', 'dima', 'schtirlitz', 'kirill', 'alex', 'alibaba'],
    );
// → ['kirill', 'rakhim', 'alex', 'dima']

---------------------------

reverse.js

Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.

Например:

import reverse from './reverse';

reverse('str'); // rts
reverse('hexlet'); // telxeh

Попробуйте решить эту задачу используя рекурсивный процесс. Для этого вам понадобится функция substr.
Подсказки

Чтобы узнать длину строки, используйте функцию length из модуля strings:

import { length } from './strings';

length('welcome'); // 7

Чтобы получить подстроку из строки, используйте функцию substr из модуля strings:

import { substr } from './strings';

substr('foo', 1, 2); // 'oo';

------------------------

without.js

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и элементы, которые должны отсутствовать в возвращаемом массиве.

without([2, 1, 2, 3], 1, 2, 5);
// → [3]

---------------------------

nestedAccess.js

Добавьте в Object.prototype функцию hash, которая позволяет извлекать вложенные значения из объекта.

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

obj.hash('car'); // undefined
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined

-------------------

findIndexOfNearest.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив чисел и искомое число. Задача функции — найти в массиве ближайшее число к искомому и вернуть его индекс в массиве.

findIndexOfNearest([], 2); // null
findIndexOfNearest([15, 10, 3, 4], 0) // 2

--------------------

isPerfect.js

Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.

Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.

    Совершенное число (википедия)
    Список совершенных чисел

----------------------------

chunk.js

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и число, которое задает размер чанка (куска). Функция должна вернуть массив, состоящий из чанков указанной размерности.

chunk(['a', 'b', 'c', 'd'], 2);
// → [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// → [['a', 'b', 'c'], ['d']]


--------------------------

difference2.js

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход два массива, а возвращает массив, составленный из элементов первого, которых нет во втором.

difference([2, 1], [2, 3]);
// → [1]

-------------------------

Задача о восьми ферзях — широко известная задача по расстановке фигур на шахматной доске. Исходная формулировка: "Расставить на стандартной 64-клеточной шахматной доске 8 ферзей так, чтобы ни один из них не находился под боем другого". Подразумевается, что ферзь бьёт все клетки, расположенные по вертикалям, горизонталям и обеим диагоналям.

// из материалов Википедии

Задачу можно обобщить следующим образом: "На шахматной доске со стороной N, расставить N ферзей так, чтобы ни один из них не находился под боем другого".
isSafeQueens.js

Реализуйте и экспортируйте по умолчанию isSafeQueens, которая принимает комбинацию ферзей в виде списка и проверяет, является ли данная расстановка решением задачи.

Комбинации передаются следующим образом:

(2, 4, 1, 3)

где числа - это позиция ферзя по вертикали, а порядок числа в списке - позиция ферзя по горизонтали.

Для примера выше, доска будет выглядеть так:

     1   2   3   4
    ___ ___ ___ ___
1  |___|___|_*_|___|
2  |_*_|___|___|___|
3  |___|___|___|_*_|
4  |___|_*_|___|___|

Пример работы:

const queens = l(2, 4, 1, 3);

isSafeQueens(queens); // true

-----------------------------------------

Частой задачей при работе с деревьями (особенно html), является необходимость выбрать список узлов по определенному критерию.

Пара примеров из реальной жизни:

XPath

/bookstore/book/price[text()]
price/@exchange/total
book[excerpt]/author[degree]

JQuery

$("ul > li:first-child")
$("p.class1, #p1")

selectionBySelector.js

Реализуйте и экспортируйте по умолчанию функцию select, которая возвращает список нод в соответствии с запросом. Запрос это список из имен тегов, в котором каждый следующий тег это тег, вложенный в предыдущий. Порядок, в котором ноды возвращаются - не важен.

У нас есть такой html:

<h1>scheme</h1>
<p>is a lisp</p>
<p>
  <ul>
    <li>item 2</li>
    <li>item 1</li>
  </ul>
</p>
<ol>
  <li>item 2</li>
  <li>item 1</li>
</ol>
<p>is a functional language</p>
<ul>
  <li>item</li>
</ul>
<div>
  <p>another text</p>
</div>
<div>
  <div>
    <p>
      <span>text</span>
    </p>
  </div>
</div>
<div>
  <a>
    <div>
      <p>
        <span>text</span>
      </p>
    </div>
  </a>
</div>
<h1>prolog</h1>
<p>is about logic</p>

Строим html следующим образом:

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const children1 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom4 = append(dom3, node('p', l(node('ul', children1))));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children2));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children3 = l(node('li', 'item'));
const dom7 = append(dom6, node('ul', children3));
const dom8 = append(dom7, node('div', l(node('p', 'another text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', l(node('span', 'text'))))))));
const dom10 = append(dom9, node('div', l(node('a', l(node('div', l(node('p', l(node('span', 'text'))))))))));
const dom11 = append(dom10, node('h1', 'prolog'));
dom = append(dom11, node('p', 'is about logic'));

Пример работы функции, где для наглядности показано какой она будет возвращать результат если выводить его на экран (htmlToString):

select(l('p', 'ul', 'li'), dom);
// <li>item 1</li><li>item 2</li>

select(l('div', 'div', 'p'), dom);
// <p><span>text</span></p>

select(l('div', 'p'), dom);
// <p>another text</p><p><span>text</span></p><p><span>text</span></p>

select(l('div'), dom));
// <div><a><div><p><span>text</span></p></div></a></div><div><p><span>text</span></p></div><div><div><p><span>text</span></p></div></div><div><p><span>text</span></p></div><div><p>another text</p></div>

Алгоритм работы функции

    Список тегов для поиска будем называть словом query.
    query ищется с любого уровня дерева, а не только с верхнего. Например, если наш query это p, то будут найдены все p на всех уровнях.
    Производится поиск только подряд идущих тегов, например, если запрос l('ul', 'li'), то будут найдены только те li, которые идут сразу за ul.

Подсказки

    hasChildren - функция, которая проверяет, есть ли потомки у элемента
    children - функция, которая возвращает список потомков

P.S. В целом, эта функция достаточно сложна и, если вы сможете решить эту задачу самостоятельно, то вас смело можно брать на работу).

-------------------------------

С точки зрения математики, композиция функций f и g - новая функция z = f(g(x)).
compose.js

Реализуйте и экспортируйте по умолчанию функцию compose, которая принимает на вход две других одноаргуметных функции и возвращает новую функцию. Эта новая функция, также принимает на вход один параметр и при вызове применяет его последовательно к переданным функциям в обратном порядке.

const f = compose(Math.sqrt, Math.abs);
f(-4); // => 2

compose(v => v, v => v)(10); // => 10
compose(v => v + 2, v => v)(10); // => 12
compose(v => v, v => v - 2)(10); // => 8
compose(v => v ** 2, v => v - 2)(2); // => 0
compose(v => v - 2, v => v ** 2)(2); // => 2

-------------------------------

sort.js

Реализуйте и экспортируйте по умолчанию функцию sort, которая сортирует переданный массив по возрастанию

sort(l(3, 3, 0, -1, 0, 4, -5));
// (-5, -1, 0, 0, 3, 3, 4)

Алгоритм

Быстрая сортировка, сортировка Хоара (англ. quicksort), часто называемая qsort (по имени в стандартной библиотеке языка Си) — широко известный алгоритм сортировки, разработанный английским информатиком Чарльзом Хоаром во время его работы в МГУ в 1960 году.

Общая идея алгоритма состоит в следующем:

    Выбрать из списка элемент, называемый опорным. Это может быть любой из элементов списка или же число, вычисленное на основе значений элементов.
    Сравнить все остальные элементы с опорным и переставить их в списке так, чтобы разбить список на три непрерывных отрезка, следующих друг за другом: «меньшие опорного», «равные» и «большие».
    Для отрезков «меньших» и «больших» значений выполнить рекурсивно ту же последовательность операций, если длина отрезка больше единицы.

На практике список обычно делят не на три, а на две части: например, «меньшие опорного» и «равные и большие»; такой подход в общем случае эффективнее, так как упрощает алгоритм разделения.

----------------------

findOdd.js

Дан массив чисел. Каждое число в массиве встречается четное количество раз, кроме одного.

Реализуйте и экспортируйте функцию по умолчанию, которая принимает массив чисел и возвращает число, которое встречается нечетное количество раз.

const numbers = [1, 2, 4, 2, 4, 1, 5, 3, 3];

// 5
findOdd(numbers);

------------------------

convert.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив определенной структуры, и возвращающей объект полученный из этого массива.

Массив устроен таким образом, что с помощью него можно представлять ассоциативные массивы. Каждое значение внутри него это массив из двух элементов, где первый элемент - ключ, а второй значение. В свою очередь если значение массив, то считается что это вложенное представление ассоциативного массива. Другими словами любой массив внутри исходного массива всегда рассматривается как данные которые нужно конвертировать в объект.

convert([]); // => {}
convert([['key', 'value']]); // { key: 'value' }
convert([['key', 'value'], ['key2', 'value2']]); // { key: 'value', key2: 'value2' }

convert([
  ['key', [['key2', 'anotherValue']]],
  ['key2', 'value2']
]);
// { key: { key2: 'anotherValue' }, key2: 'value2' }

------------------------------

Query String (строка запроса) - часть адреса страницы в интернете содержащая константы и их значения. Она начинается после вопросительного знака и идет до конца адреса. Пример:

# query string: page=5
https://ru.hexlet.io/blog?page=5

Если параметров несколько, то они отделяются амперсандом &

# query string: page=5&per=10
https://ru.hexlet.io/blog?per=10&page=5

buildQueryString.js

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список параметров и возвращает сформированный query string из этих параметров:

import bqs from '../buildQueryString';

bqs({ per: 10, page: 1 });
// page=1&per=10

Имена параметров в выходной строке должны располагаться в алфавитном порядке (то есть их нужно отсортировать)

-----------------

formattedTime.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм.

Пример:

formattedTime(5); // 00:05
formattedTime(15); // 00:15
formattedTime(60); // 01:00
formattedTime(67); // 01:07
formattedTime(175); // 02:55
formattedTime(600)); // 10:00
formattedTime(754); // 12:34

Подсказки

    Используйте функцию Math.floor(number) для округления до нижней границы

----------------------

Функция Аккермана — простой пример вычислимой функции, которая не является примитивно рекурсивной.

Она принимает два неотрицательных целых числа в качестве параметров и возвращает натуральное число, обозначается A(m,n). Эта функция растёт очень быстро, например, число A(4,4) настолько велико, что количество цифр в порядке этого числа многократно превосходит количество атомов в наблюдаемой части Вселенной.

Функция Аккермана определяется рекурсивно для неотрицательных целых чисел m и n следующим образом:

Akkerman.js

Реализуйте и экспортируйте по умолчанию функцию Аккермана ackermann(m, n).

Примеры использования:

import ackermann from './solution';

ackermann(0, 0); // 1
ackermann(2, 1); // 5
ackermann(2, 3); // 9

------------------

flattenArray.js

Реализуйте и экспортируйте по умолчанию функцию flatten, которая делает плоским вложенный массив.

const list = [1, 2, [3, 5], [[4, 3], 2]];

// [1, 2, 3, 5, 4, 3, 2]
flatten(list);

------------------------

NRZI код (Non Return to Zero Invertive) — один из способов линейного кодирования. Код формируется путем инверсного состояния при поступлении на вход кодирующего устройства логической единицы, при поступлении логического нуля состояние потенциала не меняется.

nrzi.js

Реализуйте и экспортируйте по умолчанию функцию принимающую в качестве параметра строку в виде линейного сигнала и возвращающую строку с бинарным кодом.

Пример использования:

const signal = "_|¯|____|¯|__|¯¯¯";
nrzi(signal); // "011000110100"

------------------------

reverseInt.js

Реализуйте и экспортируйте по умолчанию функцию reverseInt, которая переворачивает цифры в переданном числе и возвращает новое число.

reverseInt(13); // 31
reverseInt(-123); // -321

---------------------------

Необходимо реализовать набор функций для работы со списками, построенными на базе строк. Данный вид списка представляет собой текст, где каждая строчка - это элемент списка, например:

hello
world

Это пример списка с двумя элементами hello и world.

Подразумевается что интерфейс работы этой абстракции, абсолютно точно такой же как и то что использовался в курсе. Другими словами можно безболезненно переписать реализацию тех функций которые делались в курсе, и весь код использующий списки, будет работать как ни в чем не бывало.
list.js

Реализуйте и экспортируйте следующие функции:

l(...items) - функция-конструктор. Уже реализована.

const list = l('foo', 'bar', 'baz');

toString(list) - возвращает строковое представление списка

const list = l('foo', 'bar', 'baz');
toString(list); // (foo, bar, baz)

head(list) - возвращает первый элемент списка

const list = l('foo', 'bar', 'baz');
const first = head(list); // 'foo'

tail(list) - возвращает "хвост" списка (все элементы, кроме первого)

const list = l('foo', 'bar', 'baz');
const rest = tail(list); // l('bar', 'baz')

isEmpty(list) - проверяет, является ли список пустым

const list = l('foo', 'bar', 'baz');

console.log(isEmpty(list)); // false
console.log(isEmpty(l()));  // true

cons(item, list) - добавляет элемент в начало списка и возвращает новый список

const list = l('foo', 'bar', 'baz');
const newList = cons('bas', list); // l('bas', 'foo', 'bar', 'baz')

filter(predicate, list) - фильтрует список, используя предикат

const list = l('foo', 'bar', 'baz');
const filteredList = filter(item => item[0] === 'b', list); // l('bar', 'baz')

map(callback, list) - преобразует список, используя callback-функцию

const list = l('foo', 'bar', 'baz');
const mappedList = map(item => item[0], list); // l('f', 'b', 'b')

reduce(callback, init, list) - производит свертывание списка

const list = l('foo', 'bar', 'baz');
const result = reduce((item, acc) => acc ? `${acc},${item}` : item, '', list);
console.log(result); // foo,bar,baz

Подсказки

    Функций перечисленных в импорте достаточно для реализации списков
    Решение учителя на 100% функциональное

---------------------------

fromPairs.js

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив, состоящий из массивов-пар и возвращает объект, полученный из этих пар.

fromPairs([['fred', 30], ['barney', 40]]);
// → { 'fred': 30, 'barney': 40 }

----------------

wrap.js

Добавьте в Function.prototype функцию wrap, которая работает согласно примеру:

function speak(name) {
   return `Hello ${name}`;
}

const newSpeak = speak.wrap((original, yourName, myName) => {
  const greeting = original(yourName);
  return `${greeting}, my name is ${myName}`;
});

newSpeak('Mary', 'Kate'); // Hello Mary, my name is Kate

----------------------

detect.js

Реализуйте и экспортируйте по умолчанию функцию detect, которая возвращает первый результат, который не был ошибкой. Функция detect должна запускать колбек на выполнение сразу для всех входящих параметров, а не последовательно. Это значительно увеличивает скорость ее выполнения.

async.detect(['file1','file2','file3'], (filePath, callback) => {
  fs.access(filePath, err => {
    callback(null, !err)
  });
}, (err, result) => {
    // result now equals the first file in the list that exists
});

-----------------------

sortByAsyn.js

Реализуйте и экспортируйте по умолчанию функцию sortBy.

sortBy(['file1', 'file2', 'file3'], (file, callback) => {
  fs.stat(file, (err, stats) => {
    callback(err, stats.mtime);
  });
}, (err, results) => {
  // results is now the original array of files sorted by
  // modified date
});

// By modifying the callback parameter the
// sorting order can be influenced:

// ascending order
sortBy([1, 9, 3, 5], (x, callback) => {
  callback(null, x);
}, (err,result) => {
  // result callback
});

// descending order
sortBy([1, 9, 3, 5], (x, callback) => {
  callback(null, x * -1); //<- x*-1 instead of x, turns the order around
}, (err, result) => {
  // result callback
});
