## Section 03: Working with Character Sets

#### Table of Contents

- Using Character Sets
- Specifying a Range in a Character Set
- Excluding a Character Set
- Escaping Metacharacters in a Character Set
- Using Shorthand for Character Sets
- Quiz 2: Quiz 2
- Exercise 2 Start
- Exercise 2 Finish

### Using Character Sets

#### Matching Characters

`[]` -- character set

#### Example 1

```js
let re = /gr[ae]y/g;
let text =
  "Make the outline for the square gray and the fill for the circle grey";
console.log(text.match(re));
```

```bash
Output:
[ 'gray', 'grey' ]
```

#### Example 2

```js
re = /[abcd][ i]/g;
text = "Make the outline for the square gray and the fill for the circle grey";
console.log(text.match(re));
```

```bash
Output:
[ 'd ', 'ci' ]
```

#### Example 3

```js
re = /[123]/g;
text =
  "Make the outline for the square 123 gray and the fill for the 456 circle grey";
console.log(text.match(re));
```

```bash
Output:
[ '1', '2', '3' ]
```

### Specifying a Range in a Character Set

#### Specifying a Range

`/[1-4]/`

`/[\-.]/`

#### Example 1

```js
re = /[1-6][1-6]/g;
text = "I have tried 42 times, but I'll try 5 more times.";
console.log(text.match(re));
```

```bash
Output:
[ '42' ]
```

#### Example 2

```js
re = /[1-6a-zA-Z]/g;
text = "I have tried 42 times, but I'll try 5 more times.";
console.log(text.match(re));
```

```bash
Output:
[
  'I', 'h', 'a', 'v', 'e', 't', 'r',
  'i', 'e', 'd', '4', '2', 't', 'i',
  'm', 'e', 's', 'b', 'u', 't', 'I',
  'l', 'l', 't', 'r', 'y', '5', 'm',
  'o', 'r', 'e', 't', 'i', 'm', 'e',
  's'
]
```

#### Example 3

```js
re = /0x[A-Z][A-Z]/g;
text = "Exception 0xAF902Z";
console.log(text.match(re));
```

```bash
Output:
[ '0xAF' ]
```

### Excluding a Character Set

`^` -- excluding a character set

#### Example 1

```js
re = /0x[^0-9A-F][0-9A-F]/g;
text = "Exception 0xF89F";
console.log(text.match(re));
```

```bash
Output:
null
```

#### Example 1

```js
re = /[^a-z]/g;
text = "abcdefghijklmnopqrstuvwxyz!";
console.log(text.match(re));
```

```bash
Output:
[ '!' ]
```

### Escaping Metacharacters in a Character Set

`^ $ . * + ? = ! : | / \ ( ) [ ] { }`

### Using Shorthand for Character Sets

| **Shorthand** | **Common Use**  | **Description**                                |
| ------------- | --------------- | ---------------------------------------------- |
| `\d`          | `[0-9]`         | Any number                                     |
| `\w`          | `[a-zA-Z0-9_]`  | Any letter or number or `_`                    |
| `\s`          | `[\t\r\n]`      | Any space or carriage return or tab            |
| `\D`          | `[^0-9]`        | Any string but numbers                         |
| `\W`          | `[^a-zA-Z0-9_]` | Any string but letter or number or `_`         |
| `\S`          | `[^\t\r\n]`     | Any string but space or tab or carriage return |

#### Example 1

```js
re = /\d/g;
text =
  "A string that contains numbers (12345) \n A second line    (12345)     3 Tabs.";
console.log(text.match(re));
```

```bash
Output:
[
  '1', '2', '3', '4',
  '5', '1', '2', '3',
  '4', '5', '3'
]
```

#### Example 2

```js
re = /\w/g;
text =
  "A string that contains numbers (12345) \n A second line    (12345)     3 Tabs.";
console.log(text.match(re));
```

```bash
Output:
[
  'A', 's', 't', 'r', 'i', 'n', 'g', 't',
  'h', 'a', 't', 'c', 'o', 'n', 't', 'a',
  'i', 'n', 's', 'n', 'u', 'm', 'b', 'e',
  'r', 's', '1', '2', '3', '4', '5', 'A',
  's', 'e', 'c', 'o', 'n', 'd', 'l', 'i',
  'n', 'e', '_', '1', '2', '3', '4', '5',
  '3', 'T', 'a', 'b', 's'
]
```

#### Example 3

```js
re = /\s/g;
text =
  "A string that contains numbers (12345) \n A second line    (12345)     3 Tabs.";
console.log(text.match(re));
```

```bash
Output:
[
  ' ', ' ',  ' ', ' ', ' ',
  ' ', '\n', ' ', ' ', ' ',
  ' ', ' ',  ' ', ' ', ' ',
  ' ', ' ',  ' ', ' '
]
```

#### Example 4

```js
re = /\D/g;
text =
  "A string that contains numbers (12345) \n A second line    (12345)     3 Tabs.";
console.log(text.match(re));
```

```bash
Output:
[
  'A', ' ', 's', 't', 'r', 'i', 'n', 'g',  ' ',
  't', 'h', 'a', 't', ' ', 'c', 'o', 'n',  't',
  'a', 'i', 'n', 's', ' ', 'n', 'u', 'm',  'b',
  'e', 'r', 's', ' ', '(', ')', ' ', '\n', 'A',
  ' ', 's', 'e', 'c', 'o', 'n', 'd', ' ',  'l',
  'i', 'n', 'e', ' ', '_', ' ', ' ', '(',  ')',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T',  'a',
  'b', 's', '.'
]
```

#### Example 5

```js
re = /\W/g;
text =
  "A string that contains numbers (12345) \n A second line    (12345)     3 Tabs.";
console.log(text.match(re));
```

```bash
Output:
[
  ' ', ' ', ' ', ' ',  ' ',
  '(', ')', ' ', '\n', ' ',
  ' ', ' ', ' ', ' ',  '(',
  ')', ' ', ' ', ' ',  ' ',
  ' ', ' ', ' ', '.'
]
```

#### Example 6

```js
re = /\S/g;
text =
  "A string that contains numbers (12345) \n A second line    (12345)     3 Tabs.";
console.log(text.match(re));
```

```bash
Output:
[
  'A', 's', 't', 'r', 'i', 'n', 'g', 't', 'h',
  'a', 't', 'c', 'o', 'n', 't', 'a', 'i', 'n',
  's', 'n', 'u', 'm', 'b', 'e', 'r', 's', '(',
  '1', '2', '3', '4', '5', ')', 'A', 's', 'e',
  'c', 'o', 'n', 'd', 'l', 'i', 'n', 'e', '_',
  '(', '1', '2', '3', '4', '5', ')', '3', 'T',
  'a', 'b', 's', '.'
]
```

### Quiz 2: Quiz 2

#### Question 1: For the following regular expression, identify which password string will produce a match.

`/[a-e][  -][p-z][1-9]/`

Answer: "a-s1mpl3pass". It has a match: "a-s1"

#### Question 2: For the following regular expression, identify which password string will produce a match.

`/\w\w\w\w\w/`

Answer: "3asy\*p@ss". It has a match: "3asy\_"

#### Question 3: For the following regular expression, identify which password string will produce a match.

`/\w\w\w\d\d/`

Answer: "012345t". It has a match: "01234".

#### Question 4: For the following regular expression, identify which password string will produce a match.

`/\w\w\w\s\d\d/`

Answer: No match.

#### Question 5: Which character is not considered a word character when using the the shorthand \w?

Answer: Newline.

#### Question 6: Given the following regular expression and string, how many matches occur?

`/\w\w\w/g`

"He is holding his hat in his hand."

Answer: 6. `[ 'hol', 'din', 'his', 'hat', 'his', 'han' ]`

#### Question 7: Given the following regular expression and string, how many matches occur?

`/[ .a-z]/g` The first character is a space

"He is holding his hat in his hand."

Answer: 33.

### Exercise 2
