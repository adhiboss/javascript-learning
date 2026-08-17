# JavaScript Cheatsheet

## Variables

```javascript
let name = "Adhi";
const age = 20;
var oldStyle = true;
```

## Data Types

```javascript
String
Number
Boolean
Undefined
Null
BigInt
Symbol
Object
```

## Functions

```javascript
function greet(name) {
    return `Hello ${name}`;
}
```

## Arrow Functions

```javascript
const add = (a, b) => a + b;
```

## Arrays

```javascript
const languages = ["JavaScript", "Python", "Java"];

languages.push("C++");
languages.pop();
```

## Objects

```javascript
const student = {
    name: "Adhi",
    university: "Jain University"
};
```

## Conditions

```javascript
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

## Loops

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## Strict Equality

```javascript
5 === 5;
```

Prefer `===` over `==` unless there is a specific reason not to.

## Modern JavaScript

```javascript
const user = {
    name: "Adhi"
};

const { name } = user;
```

## Promise

```javascript
const promise = new Promise((resolve, reject) => {
    resolve("Success");
});
```

## Async / Await

```javascript
async function getData() {
    const response = await fetch("https://example.com");
    const data = await response.json();

    return data;
}
```

## DOM

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Clicked");
});
```
