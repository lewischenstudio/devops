## Section 03: The Extended Set

#### Table of Contents

- Introduction
- Curly Braces Repeater
- Single Ended Curly Braces Repeater
- The Plus Repeater
- The Question Mark Binary
- Making Choices With Pipe
- Quiz 3: Regex: The Extended Set

### Introduction

#### RegEx: The Extended Set

| **Symbol**   | <center>**What does it represent?**</center>                                                                            |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `+`          | One or more occurrences of the character that precedes this + symbol                                                    |
| `?`          | Zero or one occurrence of the character that precedes this question mark                                                |
| `pat1\|pat2` | Matches either the pattern pat1 or the pattern pat2                                                                     |
| `()`         | Divides patterns into groups                                                                                            |
| `{m}`        | Exactly "m" occurrences of whatever precedes                                                                            |
| `{m,n}`      | At least m and at most n occurrences of whatever precedes.<br/> Only one of m, n is mandatory. Other can be left blank. |

### Curly Braces Repeater

#### Example 1

| `a{m}` | Represents exactly "m" repetitions of whatever immediately precedes this, i.e., "a" |
| ------ | ----------------------------------------------------------------------------------- |

`^[0-9]{3}$`

```
834
519
645
```

[regex18.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/03_the_extended_set/regex18.txt)

```bash
grep -E '^[0-9]{3}$' regex18.txt

Output:
834
519
645
```

**Note**: The `-E` option is required. If you are using any symbol from POSIX extended set in the regex.

#### Example 2

| `a{m,m}` | Represents at least "m" repetitions and at most "n" repetitions of whatever immediately precedes this, i.e., "a" |
| -------- | ---------------------------------------------------------------------------------------------------------------- |

`^[a-z]{4,6}$`

```
lion
tiger
mouse
cuckoo
deer
```

[regex19.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/03_the_extended_set/regex19.txt)

```bash
grep -E '^[a-z]{4,6}$' regex19.txt

Output:
lion
tiger
mouse
cuckoo
deer
```

### Single Ended Curly Braces Repeater

#### Example 1

| `()`   | Parenthesis is used to group and treat as a single entity.                 |
| ------ | -------------------------------------------------------------------------- |
| `{m,}` | Represents at least "m" repetitions of whatever immediately precedes this. |

`(ha){4,}`

```
hahahahaha
hahahaha
hahahahahaha
hahahahahahahaha
hahahahahahahahaha
```

[regex20.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/03_the_extended_set/regex20.txt)

```bash
grep -E '(ha){4,}' regex20.txt

Output:
hahahahaha
hahahaha
hahahahahaha
hahahahahahahaha
hahahahahahahahaha
```

#### Example 2

| `()`   | Parenthesis is used to group and treat as a single entity.                |
| ------ | ------------------------------------------------------------------------- |
| `{,n}` | Represents at most "n" repetitions of whatever immediately precedes this. |

`(ha){,2}`

```
1   ha
1   haha
0   hahahahaha
0   hahahaha
0   hahaha
0   hahahahahahaha
0   hahahahahaha
```

[regex21.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/03_the_extended_set/regex21.txt)

```bash
grep -E '^(ha){,2}$' regex21.txt

Output:
ha
haha
```

### The Plus Repeater

#### Example 1

| `a+` | One or more occurrences of "a" (The character just preceding the plus symbol) |
| ---- | ----------------------------------------------------------------------------- |

`fooa+bar`

```
1   fooaaaabar
1   fooabar
0   foobar
1   fooaabar
0   fooxxxbar
0   fooxbar
```

[regex22.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/03_the_extended_set/regex22.txt)

```bash
grep -E 'fooa+bar' regex22.txt

Output:
fooaaaabar
fooabar
fooaabar
```

### The Question Mark Binary

#### Example 1

| `a?` | Zero or one occurrences of "a" (The character just preceding the plus symbol) |
| ---- | ----------------------------------------------------------------------------- |

`https?://website`

```
1   https://website
1   http://website
0   httpss://website
0   httpx://website
0   httpxx://website
```

[regex23.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/03_the_extended_set/regex23.txt)

```bash
grep -E 'https?://website' regex23.txt

Output:
https://website
http://website
```

### Making Choices With Pipe

#### Example 1

| `(a\|b)` | Represents either "a" or "b", whether "a" or "b" can be multi-character strings |
| -------- | ------------------------------------------------------------------------------- |

`(log|ply)wood`

```
0   sapwood
0   rosewood
1   logwood
0   teakwood
1   plywood
0   redwood
```

[regex24.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/03_the_extended_set/regex24.txt)

```bash
grep -E '(log|ply)wood' regex24.txt

Output:
logwood
plywood
```

### Quiz 3: Regex: The Extended Set

#### Question 1: Which of the following regular expressions can represent the words 'colour' as well as 'color'?

`color?r`

**Note**: `u?` means either zero u's or a single u

#### Question 2: Which of the following regular expressions can represent the words 'ascending' as well as 'descending'?

`(asc|des)cending`

**Note**: Pipe symbol is used to provide choices

#### Question 3: Which of the following regular expressions can represent all of the strings 'a','aa' and 'aaa' , AND should exclude empty strings?

`a+`

**Note**: Plus symbol stands for ONE or more occurrence(s)
