let re = /gr[ae]y/g;
let text =
  "Make the outline for the square gray and the fill for the circle grey";
console.log(text.match(re));


re = /[123]/g;
text =
  "Make the outline for the square 123 gray and the fill for the 456 circle grey";
console.log(text.match(re));

re = /[1-6][1-6]/g;
text = "I have tried 42 times, but I'll try 5 more times.";
console.log(text.match(re));

re = /[1-6a-zA-Z]/g;
text = "I have tried 42 times, but I'll try 5 more times.";
console.log(text.match(re));

re = /0x[A-Z][A-Z]/g;
text = "Exception 0xAF902Z";
console.log(text.match(re));

re = /0x[^0-9A-F][0-9A-F]/g;
text = "Exception 0xF89F";
console.log(text.match(re));

re = /[^a-z]/g;
text = "abcdefghijklmnopqrstuvwxyz!";
console.log(text.match(re));

re = /\d/g;
text =
  "A string that contains numbers (12345) \nA second line _  (12345)      3 Tabs.";
console.log(text);
console.log(text.match(re));

re = /\w/g;
text =
  "A string that contains numbers (12345) \nA second line _  (12345)      3 Tabs.";
console.log(text.match(re));

re = /\D/g;
text =
  "A string that contains numbers (12345) \nA second line _  (12345)      3 Tabs.";
console.log(text.match(re));

re = /\W/g;
text =
  "A string that contains numbers (12345) \nA second line _  (12345)      3 Tabs.";
console.log(text.match(re));

re = /\S/g;
text =
  "A string that contains numbers (12345) \nA second line _  (12345)      3 Tabs.";
console.log(text.match(re));

re = /\w\w\w/g;
text = "He is holding his hat in his hand.";
console.log(text.match(re));

re = /[ .a-z]/g;
text = "He is holding his hat in his hand.";
console.log(text.match(re).length);
