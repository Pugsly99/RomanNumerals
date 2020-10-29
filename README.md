## Specifications

| Behavior | Input | Output |
| ---------------------------------------------------- | --------- | --------- |
|It will accept user input and return as integer | "234" | 234 |
|It will run integer through for loop of indicies in array denoting decimal value. Loop will continue while value at current index fits into the original integer.| 234 | 100, 100, 10, 10, 10, 4 |
|In the same loop it will replace decimal values with corresponding roman numeral and decrease original integer by the decimal equivalent. | 100, 100, 10, 10, 10, 4 | C, C, X, X, X, IV |
|These values will simultaneously be added to a pre-determined string | C, C, X, X, X, IV | "CCXXXIV" |
|If input is can not become an integer user will be alerted that it isnt at number | "I am a string!" | Alert: "This is not a number!"|