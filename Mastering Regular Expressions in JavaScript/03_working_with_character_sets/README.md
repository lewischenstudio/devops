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

### Excluding a Character Set

### Escaping Metacharacters in a Character Set

### Using Shorthand for Character Sets

### Quiz 2: Quiz 2

### Exercise 2 Start

### Exercise 2 Finish
