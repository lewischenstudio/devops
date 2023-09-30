## Section 01: Building a Foundation

#### Table of Contents

- Introduction
- Use Cases For Regular Expressions
- Course RoadMap
- About Course Subtitles
- Deep Dive - First Example
- Resources for Download
- A generic solution to any regex problem
- Hands-on with Linux Grep regex engine
- Hands-on with Java regex engine
- Quiz 1: Building a Foundation

### Introduction

#### Regular expressions

**What is it**: Regular expressions are a way to search for patterns within data sets.

**What is it NOT**: Regular expression is NOT a programming language.

#### Places to find regex

- JavaScript
- Java
- Python
- Linux
- Ruby

#### Wikipedia

"A regular expression, regex or regexp is a sequence of cahracters that define a search pattern."

### Use Cases For Regular Expressions

### Course RoadMap

### About Course Subtitles

### Deep Dive - First Example

#### A simple regex

```
fooaaaabar
fooabar
foobar
fooaabar
fooxxxbar
fooxbar
```

Note: | is just a delimiter for display purposes

```
foo|aaaa|bar
foo|  a |bar
foo|    |bar
foo| aa |bar
```

`a*` - Zero or more occurrences of 'a' (The character just preceding the asterisk).

```
foo|a*|bar
```

### Resources for Download

### A generic solution to any regex problem

#### Steps to build regular expressions

- Step 1: Understand the requirement: What needs to be included? What needs to be excluded?
- Step 2: Identify patterns in the inclusions list or the exclusion list.
- Step 3: Represent the patterns using regular expressions.
- Step 4: Use a regex engine like grep or Python or Java to apply the regex pattern on the input.

### Hands-on with Linux Grep regex engine

- All major programming languages come with a regex engine. E.g. Java, Python, Linux commands like
  `grep`, `sed`, `awk` etc.
- Though regex engines share the same fundamental philosophy, the complete featuere set of each
  regex engine may vary.
- Almost all major regex engines are POSIX standards compliant.
- POSIX stands for Portable Operating System Interface, and is an IEEE standard.

[regex01.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/02_the_basic_set/regex01.txt)

Linux commands

```bash
$ cat regex01.txt
Output:
fooaaaabar
fooabar
foobar
fooaabar
fooxxxbar
fooxbar

$ grep 'fooa*bar' regex01.txt
Output:
fooaaaabar
fooabar
foobar
fooaabar
```

### Hands-on with Java regex engine

[Regex.java](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/Java_files/Regex.java)

### Quiz 1: Building a Foundation

#### Question 1: What is a common abbreviation for Regular Expressions?

RegEx

#### Question 2: What are some use cases of Regular Expressions?

- Searching patterns through text files
- User input validation on web pages
- Searching through data sets

#### Question 3: What does the pattern: a\* stand for?

Zero or more occurrences of 'a'
