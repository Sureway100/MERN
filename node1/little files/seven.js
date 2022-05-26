const starter = require('lodash')
const items = [1, [2, [3, [4]]]]
const newitems = starter.flattenDeep(items)
console.log(newitems)
console.log('understand these concepts')