## Section 06: Wrap up

#### Table of Contents

- Regular Expression Table

### Regular Expression Table

#### The Basic Set

| **Symbol** | <center>**What does it represent?** </center>                                      |
| ---------- | ---------------------------------------------------------------------------------- |
| `\*`       | Zero or more occurrences of the character that precedes this asterisk              |
| `.`        | A wildcard that represents any character                                           |
| `\s`       | Represents whitespace                                                              |
| `[pqr]`    | A single character which can be either a "p", "q" or an "r"                        |
| `[a-d]`    | A single character that falls in the range "a-d", i.e. one of "a", "b", "c" or "d" |
| `[^pq]`    | A single character that is neither "p" nor "q"                                     |
| `^`pattern | `^` is an anchor tag that represents the beginning of the line                     |
| pattern`$` | `$` is an anchor tag that represents the end of the line                           |

#### Examples

<table>
<tr>
<th>Heading 1</th>
<th>Heading 2</th>
</tr>
<tr>
<td>

| **Symbol**   | **What does it show?**                                                                        |
| ------------ | --------------------------------------------------------------------------------------------- |
| `foo.bar`    | fooabar <br/> fooxbar <br/> foocbar                                                           |
| `foo.*bar`   | foobar<br/> fooabcbar<br/> foobxcbar<br/> foozbar                                             |
| `foo\s*bar`  | foo&nbsp;&nbsp;&nbsp;bar<br/>foo&nbsp;&nbsp;bar<br/>foo&nbsp;&nbsp;&nbsp;&nbsp;bar<br/>foobar |
| `[fcl]oo`    | foo <br/> coo<br/> loo                                                                        |
| `[fcdplb]oo` | foo <br/> coo <br/> doo <br/> poo <br/> loo <br/> boo                                         |
| `[^mh]oo`    | foo <br/> coo <br/> doo <br/> poo <br/> loo <br/> boo                                         |

</td>
<td>

| **Symbol**    | **What does it show?**                      |
| ------------- | ------------------------------------------- |
| `[j-m]oo`     | joo <br/> koo <br/> loo <br/> moo           |
| `[j-mz]oo`    | joo <br/> koo <br/> loo <br/> moo <br/> zoo |
| `[j-mJ-Mz]oo` | joo <br/> Koo <br/> Loo <br/> moo <br/> zoo |
| `x*\.y*`      | xxx.yy <br/> xx.yyyy <br/> x.yy <br/>       |
| `x[#:.]y`     | x#y <br/> x:y <br/> x.y <br/>               |
| `x[#:\^]y`    | x#y <br/> x:y <br/> x^y <br/>               |

</td>
</tr> </table>

| **Symbol**   | **What does it show?**                                                                                      |
| ------------ | ----------------------------------------------------------------------------------------------------------- |
| `foo.bar`    | fooabar <br/> fooxbar <br/> foocbar                                                                         |
| `foo.*bar`   | foobar<br/> fooabcbar<br/> foobxcbar<br/> foozbar                                                           |
| `foo\s*bar`  | foo&nbsp;&nbsp;&nbsp;bar<br/>foo&nbsp;&nbsp;bar<br/>foo&nbsp;&nbsp;&nbsp;&nbsp;bar<br/>foobar               |
| `[fcl]oo`    | foo <br/> coo<br/> loo                                                                                      |
| `[fcdplb]oo` | foo <br/> coo <br/> doo <br/> poo <br/> loo <br/> boo                                                       |
| `[^mh]oo`    | foo <br/> coo <br/> doo <br/> poo <br/> loo <br/> boo                                                       |
| `[a-cx]`     | One of the characters falling in the range OR any of other choices given in square brackets --, a, b, c, x  |
| `[a-cA-Cx]`  | One of the characters falling in the range OR any of other choices given in square brackets --, a, b, c, A, |
| `^$*.[()\`   | Characters should be escaped with a **backslash** as these characters have special meanings.                |
| `^`          | `^` is a placeholder that signifies the beginning of a line.                                                |
| `$`          | `$` is a placeholder that signifies the end of a line.                                                      |

#### The Extended Set

| **Symbol**   | <center>**What does it represent?**</center>                                                                            |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `+`          | One or more occurrences of the character that precedes this + symbol                                                    |
| `?`          | Zero or one occurrence of the character that precedes this question mark                                                |
| `pat1\|pat2` | Matches either the pattern pat1 or the pattern pat2                                                                     |
| `()`         | Divides patterns into groups                                                                                            |
| `{m}`        | Exactly "m" occurrences of whatever precedes                                                                            |
| `{m,n}`      | At least m and at most n occurrences of whatever precedes.<br/> Only one of m, n is mandatory. Other can be left blank. |

#### Examples
