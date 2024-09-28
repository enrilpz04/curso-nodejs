// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

import { sum, substract } from './sum.mjs'

console.log(sum(1, 2)) // 3
console.log(substract(3, 4)) // -1 