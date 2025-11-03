# Time tracking dashboard

## Table of contents

- [Overview](#overview)
  - [Screenshot and live site URL](#screenshot-and-live-site-url)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Attribution](#attribution)

## Overview

### Screenshot and live site URL

| Desktop                              | Mobile                             |
| ------------------------------------ | ---------------------------------- |
| ![desktop](/screenshot/desktop.png) | ![Mobile](/screenshot/mobile.png) |

[Live Site URL](https://tt-d.netlify.app/)

## My process

### Built with

- React
- TypeScript
- TailwindCSS

### What I learned

- When components have props requiring explicit types, you might need to pass these values from parent components. TypeScript may show errors if type inference is required in child components. The solution is to export the Type from one component and use it in other components through generics or direct type usage.
- Implementation of literal types, unions, and interfaces in TypeScript
- When defining function types, it's better to use explicit arrow function syntax to declare parameter types and return values, rather than using general function types
- React components accept a single parameter called props, which is an object containing all properties passed to the component. When declaring prop types, you need to define the shape of this props object.
- Understanding generics in TypeScript: they are defined during function creation and utilized during function calls. If you don't specify the generic type when calling a function, TypeScript attempts to infer it, which may not always be accurate.
- For event handling in React, the best practice is to pass handler functions to child components. In the child component's JSX, use an arrow function to invoke the passed handler with any necessary parameters. This approach makes the code's functionality more readable and reduces unnecessary DOM operations.
- The style attribute in JSX elements accepts an object, requiring double curly braces: the outer pair for JavaScript expression and the inner pair for the style object. The object keys are CSS properties, and values are their corresponding settings.

## Author

- Github - [@aminforouzan](https://github.com/aminforouzan)
- Frontend Mentor - [@AminForouzan](https://www.frontendmentor.io/profile/AminForouzan)

## Attribution

- [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).
