## Section 04: Find an Replace with Capture Groups

#### Table of Contents

- Introduction
- The Monitor Resolutions Problem
- The First Name Last Name Problem
- The Clock Time Problem
- The Phone Number Problem
- The Date Problem
- Another Phone Number Problem
- Quiz 4: Find and Replace with Capture Groups

### Introduction

#### Regex - Group capture, find and replace

#### Steps to build regular expressions

1. Understand the requirement: What needs to be included? What needs to be excluded?
2. Identify patterns in the inclusions list or the exclusion list.
3. Represent the patterns using regular expressions.
4. Use a regex engine like grep or Python or Java to apply the regex pattern on the

### The Monitor Resolutions Problem

#### Step 1: Understand the Requirement

| <center>Math</center> | --> | <center>Letters</center> |
| --------------------: | --- | :----------------------- |
|            1280 x 720 | --> | 1280 pix by 720 pix      |
|           1920 x 1080 | --> | 1920 pix by 1080 pix     |
|            1600 x 900 | --> | 1600 pix by 900 pix      |
|           1280 x 1024 | --> | 1280 pix by 1024 pix     |
|             800 x 600 | --> | 800 pix by 600 pix       |
|            1024 x 768 | --> | 1024 pix by 768 pix      |

#### Step 2: Represent the Pattern

| Capture 1  | `x` | Capture 2  |
| :--------: | :-: | :--------: |
| `([0-9]+)` | `x` | `([0-9]+)` |

#### Step 3: Substitution

`\1 pix by \2 pix`

[regex25.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/04_find_an_replace_with_capture_groups/regex25.txt)

`sed` means replace in Linux system

`sed -r 's/pattern/replace/g' inputfile`

```bash
sed -r 's/([0-9]+)x([0-9]+)/\1 pix \2 pix/g' regex25.txt

Output:
1280 pix by 720 pix
1920 pix by 1080 pix
1600 pix by 900 pix
1280 pix by 1024 pix
800 pix by 600 pix
1024 pix by 768 pix
```

### The First Name Last Name Problem

#### Step 1: Understand the Requirement

| <center>First Last</center> | --> | <center>Last,First</center> |
| --------------------------: | --- | :-------------------------- |
|                John Wallace | --> | Wallace,John                |
|                  Steve King | --> | King,Steve                  |
|                 Martin Cook | --> | Cook,Martin                 |
|                  Adam Smith | --> | Smith,Adam                  |
|                Irene Petter | --> | Peter,Irene                 |
|               Alice Johnson | --> | Johnson,Alice               |

#### Step 2: Represent the Pattern

|   Capture 1   | `\s` |   Capture 2   |
| :-----------: | :--: | :-----------: |
| `([a-zA-Z]+)` | `\s` | `([a-zA-Z]+)` |

`([a-zA-Z]+)\s([a-zA-Z]+)`

#### Step 3: Substitution

`\2,\1`

[regex26.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/04_find_an_replace_with_capture_groups/regex26.txt)

```bash
sed -r 's/([a-zA-Z]+)\s([a-zA-Z]+)/\2,\1/g' regex26.txt

Output:
Wallace,John
King,Steve
Cook,Martin
Smith,Adam
Peter,Irene
Johnson,Alice
```

### The Clock Time Problem

#### Step 1: Understand the Requirement

| <center>Time</center> | --> | <center>Minute Past Hour</center> |
| --------------------: | --- | :-------------------------------- |
|                  7:32 | --> | 32 mins past 7                    |
|                  6:12 | --> | 12 mins past 6                    |
|                 12:23 | --> | 23 mins past 12                   |
|                  1:23 | --> | 23 mins past 1                    |
|                 11:33 | --> | 33 mins past 11                   |
|                  4:21 | --> | 21 mins past 4                    |

#### Step 2: Represent the Pattern

|   Capture 1    | `:` |  Capture 2   |
| :------------: | :-: | :----------: |
| `([0-9]{1,2})` | `:` | `([0-9]{2})` |

`([0-9]{1,2}):([0-9]{1,2})`

#### Step 3: Substitution

`\2 mins past \1`

[regex27.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/04_find_an_replace_with_capture_groups/regex27.txt)

```bash
sed -r 's/([0-9]{1,2}):([0-9]{1,2})/\2 mins past \1/g' regex27.txt

Output:
32 mins past 7
12 mins past 6
23 mins past 12
23 mins past 1
33 mins past 11
21 mins past 4
```

### The Phone Number Problem

#### Step 1: Understand the Requirement

| <center>Phone Number</center> | --> | <center>Hide Phone Number</center> |
| ----------------------------: | --- | :--------------------------------- |
|                  914.582.3013 | --> | xxx.xxx.3013                       |
|                  873.333.2589 | --> | xxx.xxx.2589                       |
|                  521.589.3147 | --> | xxx.xxx.3147                       |
|                  625.235.3698 | --> | xxx.xxx.3698                       |
|                  895.568.2145 | --> | xxx.xxx.2145                       |
|                  745.256.3369 | --> | xxx.xxx.3369                       |

#### Step 2: Represent the Pattern

| No Capture | `\.` | No Capture | `\.` |  Capture 1   |
| :--------: | :--: | :--------: | :--: | :----------: |
| `[0-9]{3}` | `\.` | `[0-9]{3}` | `\.` | `([0-9]{4})` |

`[0-9]{3}\.[0-9]{3}\.([0-9]{4})`

It is only the last part `([0-9]{4})` that we want to capture and replace, so we put parenthese around the numbers.

#### Step 3: Substitution

`xxx.xxx.\1`

[regex28.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/04_find_an_replace_with_capture_groups/regex28.txt)

```bash
sed -r 's/[0-9]{3}\.[0-9]{3}\.([0-9]{4})/xxx.xxx.\1/g' regex28.txt

Output:
xxx.xxx.3013
xxx.xxx.2589
xxx.xxx.3147
xxx.xxx.3698
xxx.xxx.2145
xxx.xxx.3369
```

### The Date Problem

#### Step 1: Understand the Requirement

| <center>Date</center> | --> | <center>Day-Month-Year</center> |
| --------------------: | --- | :------------------------------ |
|          Jan 5th 1987 | --> | 5-Jan-87                        |
|         Dec 26th 2010 | --> | 26-Dec-10                       |
|          Mar 2nd 1923 | --> | 2-Mar-23                        |
|          Oct 1st 2008 | --> | 1-Oct-08                        |
|          Aug 3rd 2009 | --> | 3-Aug-09                        |
|         Jun 10th 2001 | --> | 10-Jun-01                       |

#### Step 2: Represent the Pattern

|    Capture 1    | `\s` |   Capture 2    | No Capture | `\s` | No Capture |  Capture 3   |
| :-------------: | :--: | :------------: | :--------: | :--: | :--------: | :----------: |
| `([a-zA-Z]{3})` | `\s` | `([0-9]{1,2})` | `[a-z]{2}` | `\s` | `[0-9]{2}` | `([0-9]{2})` |

`([a-zA-Z]{3})\s([0-9]{1,2})[a-z]{2}\s[0-9]{2}([0-9]{2})`

#### Step 3: Substitution

`\2-\1-\3`

[regex29.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/04_find_an_replace_with_capture_groups/regex29.txt)

```bash
sed -r 's/([a-zA-Z]{3})\s([0-9]{1,2})[a-z]{2}\s[0-9]{2}([0-9]{2})/\2-\1-\3/g' regex29.txt

Output:
5-Jan-87
26-Dec-10
2-Mar-23
1-Oct-08
3-Aug-09
10-Jun-01
```

### Another Phone Number Problem

#### Step 1: Understand the Requirement

| <center>Phone Number()</center> | --> | <center>Phone Number</center> |
| ------------------------------: | --- | :---------------------------- |
|                  (914).582.3013 | --> | 914.582.3013                  |
|                  (873).333.2589 | --> | 873.333.2589                  |
|                  (521).589.3147 | --> | 521.589.3147                  |
|                  (625).235.3698 | --> | 625.235.3698                  |
|                  (895).568.2145 | --> | 895.568.2145                  |
|                  (745).256.3369 | --> | 745.256.3369                  |

#### Step 2: Represent the Pattern

|    Capture 1     |        Capture 2         |
| :--------------: | :----------------------: |
| `\(([0-9]{3})\)` | `(\.[0-9]{3}\.[0-9]{4})` |

`\(([0-9]{3})\)(\.[0-9]{3}\.[0-9]{4})`

#### Step 3: Substitution

`\1\2`

[regex30.txt](/courses/The%20Complete%20RegEx%20Course%20For%20Beginners/04_find_an_replace_with_capture_groups/regex30.txt)

```bash
sed -r 's/\(([0-9]{3})\)(\.[0-9]{3}\.[0-9]{4})/\1\2/g' regex30.txt

Output:
914.582.3013
873.333.2589
521.589.3147
625.235.3698
895.568.2145
745.256.3369
```

### Quiz 4: Find and Replace with Capture Groups

##### Question 1: Which of the following represent a capture group , inside a replacement string?

`\1`

##### Question 2: Given a US state code and a US zip code , separated by a space, (E.g. NY 10520) which of the following regular expression would capture the state code into capture group 1 and the zip code into capture group 2?

`([A-Z]+)\s([0-9]+)`

##### Question 3: The dollar price tag of a product(e.g. $21.44) is captured using the regex: `\$([0-9]+)\.([0-9]+)`. Which of the below substitution string can you use transform it to a string of the format: '44 cents and 21 dollars'?

`\2 cents and \1 dollars`

**Note**: Dollar amount is captured into `\1`. Cents amount is captured into `\2`.
