"use strict" // Строгий режим (Современные функции JS присутствуют)
console.log('Hello world!');
let Value = "Value"; // let - ключевое слово для объявление пременной.
let Fist = "Text1",
	Second = "Text2",
	Third = "Text3"; // Переменные могут объявляться через запятую.
const enumInCSharp = { // В отличнии от C# списки констант объявляются с помощью "const", а не "enum".
	One: 1,
	Two: 2,
	Three: 3
}

let objectOfMine = {
	Name: null,
	Age: null
}
objectOfMine.Name = "Stive";
objectOfMine.Age = Number("5"); // "Number(String)" - преобразование в число. Boolean - для лог. переменных и т.д.

console.log("The name: ", objectOfMine.Name, ' ', "\nThe age: ", objectOfMine.Age);
(enumInCSharp.One <= enumInCSharp.Two) && console.log('Yes, one is less than two');
usingBeforeItWasDeclared = 15;

console.log(Value, "Enum.One: ", enumInCSharp.One, "Var", usingBeforeItWasDeclared);
console.log(typeof Value); // Тип данных присваивается переменной по значению в js.

Value = `There is a usingBeforeItWasDeclared in the string: ${usingBeforeItWasDeclared}`; // С помощью `` можно использовать специальные выражения.


var usingBeforeItWasDeclared = 30; // "Var" переменную можно использовать до того, как её объевили, но, желательно, обявить до использования.
// Так же, "Var" видна за пределами некоторых блоков (Например, "if", но не "function")

let name;
console.log(name ?? 'no name'); // Возвращает первый операнд, если он не "null" и не "undefined". В ином случае — второй.
name = "NAME";
console.log(name ?? 'no name');

let firstNumber = 0;
let secondNumber = 10n; // "n" — говорит компилятору использовать тип "bignumber" (Здесь он, конечно, не уместен).
(firstNumber < secondNumber) ? console.log("secondNumber is the biggest") : console.log("firstNumber is the biggest");
// Как и в C# конструкцию "if-else" можно заменить на тернарный оператор "?": "[условие] ? [если (true)] : [если (false)]".

// Функциональное выражение. (Отличие от обычной функции — наличие свойств переменной по вызову: может быть использовано до, но тогда не будет объявлена => 
// => функция не выполниться и т.д.)
let functionExpression = function() {
	console.log("Hello");
};
functionExpression();
// Оно может быть скопировано.
let copyOfAfunctionExpression = functionExpression;
functionExpression();

// Обычное объявление функционального выражения.
let someName = function () {
	// smth.
};
// Arrow function declaration (Стрелочное объявление функционального выражение).
// let anotherSomeName = (/*[параметры]*/) => /*[Выражение]*/;
// Пример
let expampleGetMessage = (firstString, secondString, thirdString) => console.log(firstString + secondString + thirdString); 
expampleGetMessage("You ", "are ", "amazing!");
// Второй пример
let expampleGetMessagef = (firstString, secondString, thirdString) => { 
	firstString += "| ";
	return firstString + secondString + thirdString
}; 
console.log(expampleGetMessagef("You ", "are ", "amazing!"));

setTimeout(expampleGetMessage, 3000, "It ", "took ", "3 seconds."); // Один раз вызывает функцию с задержкой (В мс).
// setInterval(expampleGetMessage, 3000, "It ", "took ", "3 seconds for each time."); // Много раз с интервалов (в мс).
// clearTimeOut(expampleGetMessage); // Прекращает "TimeOut".
// clearInterval(expampleGetMessage); // Прекращает "Interval".
