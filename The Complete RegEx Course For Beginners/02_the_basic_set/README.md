## Section 02: The Basic Set

#### Table of Contents

- Introduction
- The Wildcard Symbol
- Wildcard Asterisk Combo
- Representing Whitespaces
- Character Classes
- Character Classes With Ranges
- Escaping With Backslash
- Anchors
- Quiz 2: The Basic Set

### Introduction

#### POSIX

| **Symbol** | <center>**What does it represent?** </center>                                      |
| ---------- | ---------------------------------------------------------------------------------- |
| \*         | Zero or more occurrences of the character that precedes this asterisk              |
| .          | A wildcard that represents any character                                           |
| \s         | Represents whitespace                                                              |
| [pqr]      | A single character which can be either a "p", "q" or an "r"                        |
| [a-d]      | A single character that falls in the range "a-d", i.e. one of "a", "b", "c" or "d" |
| [^pq]      | A single character that is neither "p" nor "q"                                     |
| ^pattern   | ^ is an anchor tag that represents the beginning of the line                       |
| pattern$   | $ is an anchor tag that represents the end of the line                             |

### The Wildcard Symbol

| `.` | Single wild card. Can represent any ONE character in a single position. |
| --- | ----------------------------------------------------------------------- |

#### Example

```
fooabar
fooxbar
foocbar
```

[regex02.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex02.txt)

```
grep 'foo.bar' regex02.txt

Output:
fooabar
fooxbar
foocbar
```

### Wildcard Asterisk Combo

#### Example

| `.*` | Zero ore more occurrences of wildcard, which means zero or more <br/>occurrences of any character. |
| ---- | -------------------------------------------------------------------------------------------------- |

```
foobar
fooabcbar
foobxcbar
foozbar
```

[regex03.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex03.txt)

```
grep 'foo.*bar' regex03.txt

Output:
foobar
fooabcbar
foobxcbar
foozbar
```

### Representing Whitespaces

#### Example

| `\s`  | Represents whitespace                             |
| ----- | ------------------------------------------------- |
| `\s*` | Represents zero or more occurrences of whitespace |

```
foo <3 spaces> bar
foo <1 space> bar
foo <6 spaces> bar
foo <0 spaces> bar
```

[regex04.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex04.txt)

```
grep 'foo\s*bar' regex04.txt

Output:
foo   bar
foo bar
foo      bar
foobar
```

### Character Classes

#### Example 1

| `[abc]` | Character class. One of the characters inside the square brackets -- a, b or c |
| ------- | ------------------------------------------------------------------------------ |

```
foo
coo
loo
```

[regex05.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex05.txt)

```
grep '[fcl]oo' regex05.txt

Output:
foo
coo
loo
```

#### Example 2

```
foo
coo
doo
poo
loo
boo
```

[regex06.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex06.txt)

```
grep '[fcdplb]oo' regex06.txt

Output:
foo
coo
doo
poo
loo
boo
```

#### Example 3

| `[^abc]` | Any character EXCEPT any of the ones inside the square brackets, in a single position. |
| -------- | -------------------------------------------------------------------------------------- |

[regex07.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex07.txt)

```
grep '[^mh]oo' regex07.txt

Output:
foo
coo
doo
poo
loo
boo
```

### Character Classes With Ranges

#### Example 1

| `[j-m]` | One of the characters falling in the range given in sequence brackets -- a, b, c |
| ------- | -------------------------------------------------------------------------------- |

```
joo
koo
loo
moo
```

[regex08.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex08.txt)

```
grep '[j-m]oo' regex08.txt

Output:
joo
koo
loo
moo
```

#### Example 2

| `[a-cx]` | One of the characters falling in the range OR any of other choices given in square brackets --, a, b, c, x |
| -------- | ---------------------------------------------------------------------------------------------------------- |

```
joo
koo
loo
moo
zoo
```

[regex09.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex09.txt)

```
grep '[j-mz]oo' regex09.txt

Output:
joo
koo
loo
moo
zoo
```

#### Example 3

| `[a-cA-Cx]` | One of the characters falling in the range OR any of other choices given in square brackets --, a, b, c, A, B, C, x |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |

```
joo
Koo
Loo
moo
zoo
```

[regex10.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex10.txt)

```
grep '[j-mJ-Mz]oo' regex10.txt

Output:
joo
Koo
Loo
moo
zoo
```

### Escaping With Backslash

#### Example 1

| `^$*.[()\` | Characters should be escaped with a **backslash** as these characters have special meanings. |
| ---------- | -------------------------------------------------------------------------------------------- |

```
xxx.yy
xx.yyyy
x.yy
```

[regex11.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex11.txt)

```
grep 'x*\.y*' regex11.txt

Output:
xxx.yy
xx.yyyy
x.yy
```

#### Example 2

If a `.` is inside square brackets, it does **NOT** need to be escaped.

```
x#y
x:y
x.y
```

[regex12.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex12.txt)

```
grep 'x[#:.]y' regex12.txt

Output:
x#y
x:y
x.y
```

#### Example 3

If any of the characters `^,-` appear inside square brackets, it needs to be escaped with a **backslash**
as these two characters have special meaning inside square brackets.

```
x#y
x:y
x^y
```

[regex13.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex13.txt)

```
grep 'x[#:\^]y' regex13.txt

Output:
x#y
x:y
x^y
```

#### Example 4

The backslash itself should always be escaped with a **backslash**, irrespective of its position
within the regex: `\\`

```
x#y
x\y
x^y
```

[regex14.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex14.txt)

```
grep 'x[#\\\^]y' regex14.txt

Output:
x#y
x\y
x^y
```

### Anchors

#### Example 1

`^` is a placeholder that signifies the beginning of a line. The interpretation of `^` differs
within square brackets and outside of it. Inside square brackets, `^` stands for negation.
Outside, it is a placeholder for the beginning of the line.

```
foo bar baz
foo baz bar
```

[regex15.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex15.txt)

```
grep '^foo.*' regex15.txt

Output:
foo bar baz
foo baz bar
```

#### Example 2

`$` is a placeholder that signifies the end of a line.

```
baz foo bar
foo baz bar
```

[regex16.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex16.txt)

```
grep '.*bar$' regex16.txt

Output:
baz foo bar
foo baz bar
```

#### Example 3

`^` is a placeholder that signifies the beginning of a line.
`$` is a placeholder that signifies the end of a line.

```
foo
```

[regex17.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex17.txt)

```
grep '^foo$' regex17.txt

Output:
foo
```

### Quiz 2: The Basic Set

#### Question 1: Which of the following regular expressions can be used to represent both the strings 'gray' and 'grey'?

`gr[ae]y`, `gr.y`, `gr[a-z]y`

**Note**: Though the choice gr[ae]y is the most specific answer, technically the other choices can also
represent both gray and grey.

#### Question 2: Which of the following regular expressions represent a two digit even number?

`^[0-9][02468]$`

**Note**: First digit could be anything. Second digit should be one of 0,2,4,6,8 in order for the number
as a whole to be an even number.

#### Question 3: Which of the following regular expressions represent all 3 digit numbers that are multiples of 5?

`^[0-9][0-9][05]$`

**Note**: The first two digits can be anything. So we represent them with number character classes. As for
the third digit, all multiples of 5 should end in either a zero or a five. So we use a character class with
two choices , zero and five.
