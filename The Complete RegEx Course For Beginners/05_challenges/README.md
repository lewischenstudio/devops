## Section 05: Challenges

#### Table of Contents

- Introduction
- The Email Challenge

### Introduction

### The Email Challenge

#### Step 1: Understand the Requirement

| Emails                  |
| ----------------------- |
| bob.123@gmail.com       |
| alice-personal@yahoo.in |
| admin@cloud.guru        |
| tom_business@amazon.ca  |
| geogre@yahoo            |
| robert_at_gmail.com     |
| steve austin@gmail.com  |

**Valid Emails**

```
bob.123@gmail.com
alice-personal@yahoo.in
admin@cloud.guru
tom_business@amazon.ca
```

#### Step 2: Represent the Pattern

|    Group 1     |  Group 2 (Optional)  | `@` |   Group 3   | `\.` |   Group 4   |
| :------------: | :------------------: | :-: | :---------: | :--: | :---------: |
| `[a-zA-Z0-9]+` | `\.-_?[a-zA-Z0-9]+?` | `@` | `[a-zA-Z]+` | `\.` | `[a-zA-z]+` |

`[a-zA-Z0-9]+\.-_?[a-zA-Z0-9]+?@[a-zA-Z]+\.[a-zA-z]+`
