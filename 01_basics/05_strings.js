const name = "uditi"
const repoCount = 50

//console.log(name + repoConst + "Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('udati-boss')

/*console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());*/
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "       uditi         "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://uditiraina.com/uditi%20raina"
console.log(url.replace('%20','-'));

console.log(url.includes('uditi'));
console.log(url.includes('hello'));
console.log(gameName.split('-'));