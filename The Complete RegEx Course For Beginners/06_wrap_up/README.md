## Section 06: Wrap up

#### Table of Contents

- The Basic Set
- The Extended Set
- Replace with Capture Groups

### The Basic Set

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
<td>

| **Symbol**   | **What does it show?**                                                                        |
| ------------ | --------------------------------------------------------------------------------------------- |
| `foo.bar`    | fooabar <br/> fooxbar <br/> foocbar                                                           |
| `foo.*bar`   | foobar<br/> fooabcbar<br/> foobxcbar<br/> foozbar                                             |
| `foo\s*bar`  | foo&nbsp;&nbsp;&nbsp;bar<br/>foo&nbsp;&nbsp;bar<br/>foo&nbsp;&nbsp;&nbsp;&nbsp;bar<br/>foobar |
| `[fcl]oo`    | foo <br/> coo<br/> loo                                                                        |
| `[fcdplb]oo` | foo <br/> coo <br/> doo <br/> poo <br/> loo <br/> boo                                         |
| `[^mh]oo`    | foo <br/> coo <br/> doo <br/> poo <br/> loo <br/> boo                                         |
| `[j-l]oo`    | joo <br/> koo <br/> loo                                                                       |

</td>
<td>

| **Symbol**    | **What does it show?**                          |
| ------------- | ----------------------------------------------- |
| `[j-mz]oo`    | joo <br/> koo <br/> loo <br/> moo <br/> zoo     |
| `[j-mJ-Mz]oo` | joo <br/> Koo <br/> Loo <br/> moo <br/> zoo     |
| `x*\.y*`      | xxx.yy <br/> xx.yyyy <br/> x.yy <br/>           |
| `x[#:.]y`     | x#y <br/> x:y <br/> x.y <br/>                   |
| `x[#:\^]y`    | x#y <br/> x:y <br/> x^y <br/>                   |
| `x[#\\\^]y`   | x#y <br/> x\y <br/> x^y <br/>                   |
| `^foo.*`      | foo bar baz <br/> foo baz bar <br/>             |
| `.*bar$`      | baz foo bar <br/> foo baz bar <br/> doo foo bar |
| `^foo$`       | foo                                             |

</td>
</table>

### The Extended Set

| **Symbol**   | <center>**What does it represent?**</center>                                                                            |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `+`          | One or more occurrences of the character that precedes this + symbol                                                    |
| `?`          | Zero or one occurrence of the character that precedes this question mark                                                |
| `pat1\|pat2` | Matches either the pattern pat1 or the pattern pat2                                                                     |
| `()`         | Divides patterns into groups                                                                                            |
| `(a\|b)`     | Represents either "a" or "b", whether "a" or "b" can be multi-character strings                                         |
| `{m}`        | Exactly "m" occurrences of whatever precedes                                                                            |
| `{m,n}`      | At least m and at most n occurrences of whatever precedes.<br/> Only one of m, n is mandatory. Other can be left blank. |

#### Examples

<table>
<td>

| **Symbol**     | **What does it show?**                                                                             |
| -------------- | -------------------------------------------------------------------------------------------------- |
| `^[0-9]{3}$`   | 834 <br/> 519 <br/> 645 <br/>                                                                      |
| `^[a-z]{4,6}$` | lion <br/> tiger <br/> mouse <br/> cuckoo <br/> deer                                               |
| `(ha){4,}`     | hahahahaha <br/> hahahaha <br/> hahahahahaha <br/> hahahahahahahaha <br/> hahahahahahahahaha <br/> |

</td>
<td>

| **Symbol**            | **What does it show?**                        |
| --------------------- | --------------------------------------------- |
| `^(ha){,2}$`          | ha <br/> haha <br/>                           |
| `^(ha){,2}$`          | ha <br/> haha <br/>                           |
| `fooa+bar`            | fooaaaabar <br/> fooabar <br/> fooaabar <br/> |
| `https?://website`    | https://website <br/> http://website <br/>    |
| `(log\|ply\|ros)wood` | logwood <br/> plywood <br/> roswood           |

</td>
</table>

### Replace with Capture Groups

#### Example 1

| <center>Math</center> | --> | <center>Letters</center> |
| --------------------: | --- | :----------------------- |
|            1280 x 720 | --> | 1280 pix by 720 pix      |
|           1920 x 1080 | --> | 1920 pix by 1080 pix     |
|            1600 x 900 | --> | 1600 pix by 900 pix      |
|           1280 x 1024 | --> | 1280 pix by 1024 pix     |
|             800 x 600 | --> | 800 pix by 600 pix       |
|            1024 x 768 | --> | 1024 pix by 768 pix      |

`sed -r 's/([0-9]+)x([0-9]+)/\1 pix \2 pix/g' inputfile`

#### Example 2

| <center>First Last</center> | --> | <center>Last,First</center> |
| --------------------------: | --- | :-------------------------- |
|                John Wallace | --> | Wallace,John                |
|                  Steve King | --> | King,Steve                  |
|                 Martin Cook | --> | Cook,Martin                 |
|                  Adam Smith | --> | Smith,Adam                  |
|                Irene Petter | --> | Peter,Irene                 |
|               Alice Johnson | --> | Johnson,Alice               |

`sed -r 's/([a-zA-Z]+)\s([a-zA-Z]+)/\2,\1/g' inputfile`

#### Example 3

| <center>Time</center> | --> | <center>Minute Past Hour</center> |
| --------------------: | --- | :-------------------------------- |
|                  7:32 | --> | 32 mins past 7                    |
|                  6:12 | --> | 12 mins past 6                    |
|                 12:23 | --> | 23 mins past 12                   |
|                  1:23 | --> | 23 mins past 1                    |
|                 11:33 | --> | 33 mins past 11                   |
|                  4:21 | --> | 21 mins past 4                    |

`sed -r 's/([0-9]{1,2}):([0-9]{1,2})/\2 mins past \1/g' inputfile`

#### Example 4

| <center>Phone Number</center> | --> | <center>Hide Phone Number</center> |
| ----------------------------: | --- | :--------------------------------- |
|                  914.582.3013 | --> | xxx.xxx.3013                       |
|                  873.333.2589 | --> | xxx.xxx.2589                       |
|                  521.589.3147 | --> | xxx.xxx.3147                       |
|                  625.235.3698 | --> | xxx.xxx.3698                       |
|                  895.568.2145 | --> | xxx.xxx.2145                       |
|                  745.256.3369 | --> | xxx.xxx.3369                       |

`sed -r 's/[0-9]{3}\.[0-9]{3}\.([0-9]{4})/xxx.xxx.\1/g' inputfile`

#### Example 5

| <center>Date</center> | --> | <center>Day-Month-Year</center> |
| --------------------: | --- | :------------------------------ |
|          Jan 5th 1987 | --> | 5-Jan-87                        |
|         Dec 26th 2010 | --> | 26-Dec-10                       |
|          Mar 2nd 1923 | --> | 2-Mar-23                        |
|          Oct 1st 2008 | --> | 1-Oct-08                        |
|          Aug 3rd 2009 | --> | 3-Aug-09                        |
|         Jun 10th 2001 | --> | 10-Jun-01                       |

`sed -r 's/([a-zA-Z]{3})\s([0-9]{1,2})[a-z]{2}\s[0-9]{2}([0-9]{2})/\2-\1-\3/g' inputfile`

#### Example 6

| <center>Phone Number()</center> | --> | <center>Phone Number</center> |
| ------------------------------: | --- | :---------------------------- |
|                  (914).582.3013 | --> | 914.582.3013                  |
|                  (873).333.2589 | --> | 873.333.2589                  |
|                  (521).589.3147 | --> | 521.589.3147                  |
|                  (625).235.3698 | --> | 625.235.3698                  |
|                  (895).568.2145 | --> | 895.568.2145                  |
|                  (745).256.3369 | --> | 745.256.3369                  |

`sed -r 's/\(([0-9]{3})\)(\.[0-9]{3}\.[0-9]{4})/\1\2/g' inputfile`

#### Example 7: Email

`grep -E '[a-zA-Z0-9]+\.-_?[a-zA-Z0-9]+?@[a-zA-Z]+\.[a-zA-z]+' inputfile`
