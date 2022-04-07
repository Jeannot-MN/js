/* 
A module in JavaScript is just a file containing related code. In JavaScript,
 we use the import and export keywords to share and receive functionalities respectively across different modules
. The export keyword is used to make a variable, function, class or object accessible to other modules.
*/
import { sum } from './module2.mjs'

console.log(sum(2, 4));