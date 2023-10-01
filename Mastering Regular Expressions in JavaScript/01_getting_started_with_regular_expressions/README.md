## Section 01: Getting Started with Regular Expressions

#### Table of Contents

- Introduction
- Regular Expressions: A Short History
- Getting Started
- Using Regular Expressions in JavaScript
- Understanding Regular Expression Flags
- Using Regexpal
- Download Text Strings

### Introduction

- Basics
- Different Ways to Use Them in JavaScript
- Testing Regular Expressions
- Defining Patterns
- Metacharacters
- Character Sets
- Repetition
- Groupings
- Anchored Expressions
- Lookahead Assertions
- Using Unicode
- Useful Regular Expressions

### Regular Expressions: A Short History

#### What are Regular Expressions?

#### History of Regular Expressions

- Concept developed in 1950 by mathematician Stephen Keene.
- Became regularly used by Unix text processing utilities.
- Many different variations became standardized by the POSIX standard.
- A version of regular expressions was used in Perl in the 1980s.
- In 1997 Philip Hazel developed PCRE for use in many modern tools.

### Getting Started

#### Creating a RegEx in JavaScript

- Regular Expressions are Objects.
- There are two ways to create RegEx objects.
  - `let regex1 = new RegExp("hello");`
  - `let regex2 = /world/;`
- Once you have a regex object, you can then use it with one of the methods on RegExp Constructor
  or the String object wrapper.

[01_getting_started_with_regular_expressions/Getting Started/app.js](/Mastering%20Regular%20Expressions%20in%20JavaScript//01_getting_started_with_regular_expressions/Getting%20Started/app.js)

- Using Node.js: `node app.js`
- Using HTML: open [first.html](/Mastering%20Regular%20Expressions%20in%20JavaScript/01_getting_started_with_regular_expressions/Getting%20Started/first.html)

```js
console.log(regex1.exec(txt));
```

```bash
Output:
true
true
```

### Using Regular Expressions in JavaScript

#### Method 1: regex1.exec(txt)

```js
console.log(regex1.exec(txt));
```

```bash
Output:
[
  'hello',
  index: 41,
  input: 'Programming courses always starts with a hello world example.',
  groups: undefined
]
```

#### Method 2: txt.match(regex1)

```js
console.log(txt.match(regex1));
```

```bash
Output:
[
  'hello',
  index: 41,
  input: 'Programming courses always starts with a hello world example.',
  groups: undefined
]
```

#### Method 3: txt.search(regex1)

```js
console.log(txt.search(regex1));
```

```bash
Output:
41
```

#### Method 4: txt.split(regex1)

```js
console.log(txt.split(regex1));
```

```bash
Output:
[ 'Programming courses always starts with a ', ' world example.' ]
```

#### Method 5: txt.replace(regex1, "hi")

```js
console.log(txt.replace(regex1));
```

```bash
Output:
Programming courses always starts with a hi world example.
```

```js
regex1 = /\s/;
console.log(txt.split(regex1));
```

```bash
Output:
[
  'Programming', 'courses',
  'always',      'starts',
  'with',        'a',
  'hello',       'world',
  'example.'
]
```

#### RegExp Methods

- `test`: returns true if pattern is found in the passed string; false if not.
- `exec`: returns an array of matches.
- `toString`: returns a string of the regular expression syntax.
- `match`: returns an array of matches just like `exec` on RegExp.
- `search`: returns an index of the matched string.
- `replace`: replaces matches with a string.
- `split`: splits a string into an array. The division is based on the regular
  expression pattern.

### Understanding Regular Expression Flags

Flags are sometimes called "Modifiers".

#### Regular Expression Flags

- `/pattern/flags;` or `new RegExp("pattern", "flags");`
- `g` -- global, match more than one occurrence.
- `i` -- case insensitive match, case doesn't matter.
- `m` -- multi-line match.

#### Example 1

```js
let regex1 = /s\s/;
console.log(txt.match(regex1));
```

```bash
Output:
[
  's ',
  index: 18,
  input: 'Programming courses always starts with a hello world example.',
  groups: undefined
]
```

#### Example 2

```js
let regex1 = /s\s/g;
console.log(txt.match(regex1));
```

```bash
Output:
[ 's ', 's ', 's ' ]
```

#### Example 3

```js
txt = "Programming courses alwayS starts with a hello world example.";
regex1 = /s\s/g;
console.log(regex1.exec(txt));
console.log(regex1.exec(txt));
console.log(regex1.exec(txt));
```

```bash
Output:
[
  's ',
  index: 18,
  input: 'Programming courses alwayS starts with a hello world example.',
  groups: undefined
]
[
  'S ',
  index: 25,
  input: 'Programming courses alwayS starts with a hello world example.',
  groups: undefined
]
[
  's ',
  index: 32,
  input: 'Programming courses alwayS starts with a hello world example.',
  groups: undefined
]
```

### Using Regexpal

[Regex Pal](https://www.regexpal.com/)

**Test String**
`Every programming course uses "hello world". Well, in this course we use it twice: Hello World.`

**Regular Expression**
`/"hello/ig`

### Download Text Strings

[Text Strings](/Mastering%20Regular%20Expressions%20in%20JavaScript/01_getting_started_with_regular_expressions/TextStrings/)
