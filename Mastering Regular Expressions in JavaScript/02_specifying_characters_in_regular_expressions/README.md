## Section 02: Specifying Characters in Regular Expressions

#### Table of Contents

- Understanding Metacharacters
- Using the Wildcard
- The dotAll Flag
- Escaping Metacharacters
- Matching Control Characters
- Quiz 1: Characters Quiz
- Exercise 1 Start
- Exercise 1 Finish

### Understanding Metacharacters

#### Matching Example

```js
let re = /hello/;
let text = "here help hello";
console.log(text.match(re));
```

```bash
Output:
[ 'hello', index: 10, input: 'here help hello', groups: undefined ]
```

#### Metacharacters

`^ $ . * + ? = ! : | / \ ( ) [ ] { }`

### Using the Wildcard

`.` -- wildcard metacharacter

```js
let re = /h.t/g;
let text = "how it that so hot?h@th t hoo h t h   t";
console.log(text.match(re));
```

```bash
Output:
[ 'hat', 'hot', 'h@t', 'h t', 'h t' ]
```

### The dotAll Flag

In the previous topic I mentioned that the wildcard character `.` represents any single character with the exception of some
control characters like new line. Well in ECMAScript release 2018 a new flag was added to regular expressions in JavaScript.
The new flag is the letter `s` and it called the "dotAll" Flag. This flag can be added to your regular expression if you
would like the wildcard character to match all characters.

The "dotAll" flag can be included with other flags such as global `g` or case insensitive `i`.

### Escaping Metacharacters

`\` -- escaping metacharacter

```js
re = /d\@/g;
text = "This could@ be the final word.";
console.log(text.match(re));
```

```bash
Output:
[ 'd@' ]
```

### Matching Control Characters

#### Control Characters

| `\t` | tab             |
| ---- | --------------- |
| `\v` | vertical tab    |
| `\n` | newline         |
| `\r` | carriage return |

```js
re = /h\nt/g;
text = "hot h t hit h\nt";
console.log(text.match(re));
```

```bash
Output:
[ 'h\nt' ]
```

### Quiz 1: Characters Quiz

#### Question 1: For the following regular expression and sample data identify where, if any, the match occurs.

```js
const re = /3.9/;
const text = "113-969-3993";
```

Answer: "3-9"

#### Question 2: For the following regular expression and sample data identify where, if any, the match occurs.

```js
const re = /5.9/g;
const text = "1589 North, Apt. 59";
```

Answer: "589".

#### Question 3: What does \t control character match?

Answer: Tab

#### Question 4: Given the following regular expression and string, how many matches occur?

```js
const re = /h.t/g;
const text = "He is holding his hat in his hand.";
```

Answer: 1 match -- "hat".

#### Question 5: Given the following regular expression and string, how many matches occur?

```js
const re = /h../g;
const text = "He is holding his hat in his hand.";
```

Answer: 5 matches -- "hol", "his", "hat", "his", "han"

#### Question 6: Given the following regular expression and string, how many matches occur?

```js
const re = /h../gi;
const text = "He is holding his hat in his hand.";
```

Answer: 6 matches -- "He ", "hol", "his", "hat", "his", "han"

#### Question 7: Which control character represents a carriage return?

Answer: `\r`

### Exercise 1

[02_specifying_characters_in_regular_expressions/Exercise1/app.js](/Mastering%20Regular%20Expressions%20in%20JavaScript/02_specifying_characters_in_regular_expressions/Exercise1/app.js)

```bash
node ./Exercise1/app.js

Output:
[
  '801-766-9754',
  '801-545-5454',
  '801-796-8010',
  '801-009-0909',
  '801-777-6655'
]
```
