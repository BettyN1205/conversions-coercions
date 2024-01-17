console.log("Let the Conversions & Coercing Commence 🤷‍♂️");

/*
 * String Conversions
 */
console.log("String(1234): ", String(1234));
console.log("String([123, 'Mark']: ", String([123, "Mark"]));
let number = 1234;
console.log(typeof (1234 + ""));
console.log(typeof number.toString());

/*
 * Number Conversions
 */
console.log("Number('  123  '): ", Number("  123   "));
console.log("Number('  123  456'): ", Number("  123   456"));
console.log("Number([]): ", Number([]));
console.log("Number([1,2,3]): ", Number([1, 2, 3]));
console.log("NUmber({})", Number({}));
console.log("NUmber('-123')", Number("-123"));

/*
 * Object Comparisons
 *    - objects/arrays will need be equal just because they have the same properties/elements
 *    - they need to be references the same object in memory
 */
const obj1 = { name: "Mark", age: 1 };
const obj2 = { name: "Mark", age: 1 };
const obj3 = obj1;

obj3.hairColor = "brown";

console.log(obj1);
obj2.height = 12;
console.log(obj2);
console.log(obj3);

console.log(obj1 === obj2);
console.log(obj1 === obj3);

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

// console.log(arr1 === arr2);
// console.log(arr1 === arr3);

/*
 * Coercions
 */
const userName = "Mark";

// if (userName === "" || userName === undefined || userName === null)
if (userName) {
  console.log(`userName is ${userName}`);
} else {
  console.log("please add username");
}

if (!userName) {
  console.log("please add username");
} else {
  console.log(`userName is ${userName}`);
}

/*
 * the Or || Operator
 */
const fear = prompt("please enter greatest fear");

const greatestFear = fear || "JavaScript";

console.log(greatestFear);

/*
 * the And && Operator
 */
const mainElement = document.querySelector("main");
console.log(mainElement);

mainElement && (mainElement.style.background = "salmon");

/*
 * short-ciruiting with &&
 */
let person;
// person = { name: "Mark" };

if (person && person.name === "Mark") {
  console.log("person is mark");
}

/*
 * optional chaining with ?.
 */
console.log(person?.name);
