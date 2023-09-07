## Section 04: YAML Introduction

#### Table of Contents
- Introduction to YAML
- Introduction to Coding Exercises
- Coding Exercises - Answer Keys
- Coding Exercise: YAML - 1
- Coding Exercise: YAML - 2
- Coding Exercise: YAML - 3
- Coding Exercise: YAML - 4
- Coding Exercise: YAML - 5
- Coding Exercise: YAML - 6



### Introduction to YAML
```yaml
Servers:
  - name: Server1
    owner: Lewis
    created: 06082023
    status: active
```

#### Key Value Pair
```yaml
Fruit: Apple
Vegetable: Carrot
Liquid: Water
Meat: Chicken
```

#### Array / Lists
```yaml
Fruits:
  - Orange
  - Apple
  - Banana

Vegetables:
  - Carrot
  - Cauliflower
  - Tomato
```

#### Dictionary / Map
```yaml
Banana:
  Calories: 105
  Fat: 0.4 g
  Carbs: 27 g

Grapes:
  Calories: 62
  Fat: 0.3 g
  Carbs: 16 g
```

#### Key value / Lists / Dictionary
```yaml
Fruits:
  - Banana:
      Calories: 105
      Fat: 0.4 g
      Carbs: 27 g

  - Grapes:
      Calories: 62
      Fat: 0.3 g
      Carbs: 16 g
```

#### List of Dictionaries
```yaml
- Color: Blue
  Model:
    Name: Corvette
    Year: 1995
  Transmission: Manual
  Price: $20,000
- Color: Grey
  Model:
    Name: Corvette
    Year: 1995
  Transmission: Manual
  Price: $22,000
- Color: Red
  Model:
    Name: Corvette
    Year: 1995
  Transmission: Automatic
  Price: $20,000
```

#### Note
Dictionary - Unordered \
List - Ordered


### Coding Exercise: YAML - 1
Update the food.yml file to add a Vegetable - Carrot.


### Coding Exercise: YAML - 2
Update the food.yml file to add a list of Vegetables - Carrot, Tomato, Cucumber


### Coding Exercise: YAML - 3
We have updated the food.yml file with nutrition information for Fruits. Similarly update 
the nutrition information for Vegetables. Use the below table for information

| **Vegetables** | **Calories** | **Fat** | **Carbs** |
|----------------|--------------|---------|-----------|
| Carrot         | 25           | 0.1     | 6         |
| Tomato         | 22           | 0.2     | 4.8       |
| Cucumber       | 8            | 0.1     | 1.9       |


### Coding Exercise: YAML - 4
Jacob is 30 year old Male working as a Systems Engineer at a firm. Represent Jacob's information (Name,
Sex, Age, Title) in YAML format. Create a dictionary named Employee and define properties under it.


### Coding Exercise: YAML - 5
Update the YAML file to represent the Projects assigned to Jacob. Projects are called "Automation" and "Support".


### Coding Exercise: YAML - 6
Update the YAML file to include Jacob's pay slips. Add a new property "Payslips" and create a list of
pay slip details (Use list of dictionaries). Each payslip detail contains Month and Wage.

| **Month** | **Wage** |
|-----------|----------|
| June      | 4000     |
| July      | 4500     |
| August    | 4000     |
