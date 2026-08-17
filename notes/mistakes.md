# JavaScript Mistakes & Lessons

This file documents mistakes encountered while learning JavaScript and the lessons learned from them.

## Why keep this file?

Making mistakes is part of programming.

Instead of forgetting them, this file records the problem, the reason behind it, and the correct approach.

---

## Mistake 1 — `var`, `let`, and `const`

Learn the differences in:

* Scope
* Reassignment
* Redeclaration
* Hoisting

---

## Mistake 2 — `==` vs `===`

Prefer strict equality:

```javascript
5 === "5"; // false
```

---

## Mistake 3 — Forgetting `return`

A function that needs to provide a value must return it.

```javascript
function add(a, b) {
    return a + b;
}
```

---

## Mistake 4 — Confusing synchronous and asynchronous code

JavaScript can execute asynchronous operations using mechanisms such as:

* Callbacks
* Promises
* Async / Await

---

## Mistake 5 — Modifying the DOM incorrectly

Always verify that the element exists before attempting to manipulate it.

```javascript
const element = document.querySelector("#app");

if (element) {
    element.textContent = "Hello";
}
```

---

## Future Lessons

Add new mistakes here as they occur during development.
