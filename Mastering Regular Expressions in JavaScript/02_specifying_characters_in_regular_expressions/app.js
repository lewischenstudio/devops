let re = /hello/;
let text = "here help hello";
console.log(text.match(re));


re = /h.t/g;
text = "how it that so hot?h@th t hoo h t h   t";
console.log(text.match(re));


re = /d\@/g;
text = "This could@ be the final word.";
console.log(text.match(re));

re = /h\nt/g;
text = "hot h t hit h\nt";
console.log(text.match(re));