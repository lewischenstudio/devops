## Section 01: Getting Started

#### Table of Contents

- Welcome to the Course!
- What is "Clean Code"?
- Clean Code - Key Pain Points & How To Write Clean Code
- How Is This Course Structured?
- Course Prerequisites
- Clean Code & Strongly Typed Languages
- About The Course Code Examples
- Join Our Learning Community!
- Functional, OOP, Procedural: The Course Concepts Always Apply!
- Clean Code, Principles & Patterns & Clean Architecture
- Clean Code vs Quick Code
- Module & Course Resources

### Welcome to the Course!

### What is "Clean Code"?

![Clean Code](/Clean%20Code/01_getting_started/clean_code.png)

### Clean Code - Key Pain Points & How To Write Clean Code

![Key Pain Points](/Clean%20Code/01_getting_started/key_pain_points.png)

### How Is This Course Structured?

![Course Strucuture](/Clean%20Code/01_getting_started/course_structure.png)

### Course Prerequisites

- Programming experience is required
- Python / JavaScript / TypeScript

#### Poor Code

```python
def create(m, n):
    if m == "Max":
        return lambda v: v < n
    elif m == "Min":
        return lambda v: v > n

max = create("Max", 31)
print(max(15))
print(max(32))
```

#### Clean Code

```python
class ValidateNumber:
    def __init__(self, number):
        self.number = number
    def is_bigger_than(self, other_number):
        return other_number < self.number
    def is_smaller_than(self, other_number):
        return other_number > self.number

input_number = ValidateNumber(31)
print(input_number.is_bigger_than(15))
print(input_number.is_bigger_than(32))
```

### Clean Code & Strongly Typed Languages

Clean code doesn't require strong typing

### About The Course Code Examples

- Short, Focused Examples
- Code snippets: most examples won't execute
- Examples don't use a particular programming style / paradigm

### Join Our Learning Community!

### Functional, OOP, Procedural: The Course Concepts Always Apply!

#### Functional VS OOP VS Procedural

- This course doesn't focus on a specific paradigm
- Paradigm-specific rules, conventions, patterns and guides should also be
  considered
- The rules, concepts, ideas and patterns show in this course apply in general

#### The Core Principles & Rules Always Apply!

- No matter which **programming language or style** you're using
  - you still want **readable and meaningful names**
  - you still want **slim, concise functions or methods**
  - you still want **understandable code flow**

### Clean Code, Principles & Patterns & Clean Architecture

#### Clean Code and Patterns

![Principles](/Clean%20Code/01_getting_started/principles.png)

![Architecture](/Clean%20Code/01_getting_started/architecture.png)

### Clean Code vs Quick Code

#### Clean Code Is Written Over Time!

- You want to write your best code right from the beginning
  - You will always find ways of improving your code
  - As your project evolves and changes, your code will need to change
- Question old code and refactor a lot!

![How To Write Clean Code](/Clean%20Code/01_getting_started/how_to.png)

#### Embrace Refactoring

- Refactoring today is work you save tomorrow
- A codebase can only survive and stay maintainable if it's continuously
  improved and refractored
- Pro tip: Whenever you add something new, try to improve existing code along
  the way

#### Clean Code vs Quick Code

![Working Code](/Clean%20Code/01_getting_started/working_code.png)

### Module & Course Resources
