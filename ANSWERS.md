- [ ] Why would you use class component over function components (removing hooks from the question)?

The state object that is set in the constructor allows us to drive the UI using data. It also allows us to pass state via interpolation.

- [ ] Name three lifecycle methods and their purposes.

Constructor Function - serves up initial state data for when it is time to mount up the DOM element
The Render Method - tells React what data we want turned into DOM elements
Should Component Update - prevents a component from calling render
Component Did Mount - typically used to fetch data using axios calls

- [ ] What is the purpose of a custom hook?

Allows you to apply non-visual behavior and stateful logic throughout a component by using the same hook over & over.

- [ ] Why is it important to test our apps?

Finds bugs faster
Reduces risk of regression
Allows us to trust the code
makes us think about edge cases
acts as a safety when making changes or refactoring
acts as documentation for the code
encourages us to write more testable code. 