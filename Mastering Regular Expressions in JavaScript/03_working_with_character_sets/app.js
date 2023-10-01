let re = /gr[ae]y/g;
let text =
  "Make the outline for the square gray and the fill for the circle grey";
console.log(text.match(re));


re = /[123]/g;
text =
  "Make the outline for the square 123 gray and the fill for the 456 circle grey";
console.log(text.match(re));