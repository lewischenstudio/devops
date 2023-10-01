
let txt = "Programming courses always starts with a hello world example."

let regex1 = new RegExp("hello");
let regex2 = /world/;

console.log(regex1.test(txt));
console.log(regex2.test(txt));

console.log(regex1.exec(txt));
console.log(regex2.exec(txt));

console.log(txt.match(regex1));
console.log(txt.match(regex2));

console.log(txt.search(regex1));
console.log(txt.search(regex2));

console.log(txt.split(regex1));
console.log(txt.split(regex2));

console.log(txt.replace(regex1, "hi"));
console.log(txt.replace(regex2, "Earth"));


regex1 = /\s/;
console.log(txt.split(regex1));

regex1 = /s\s/;
console.log(txt.match(regex1));

regex1 = /s\s/g;
console.log(txt.match(regex1));


txt = "Programming courses alwayS starts with a hello world example."
regex1 = /s\s/gi;
console.log(regex1.exec(txt));
console.log(regex1.exec(txt));
console.log(regex1.exec(txt));