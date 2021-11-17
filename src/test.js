const {mapObject, nthElement, pull} = require("../dist/uvalid.cjs")
let arr = [1,10,3,4]
let res = mapObject(arr, (n) => {
    return n
})
console.log(res)
console.log(nthElement([1,2,3,4], 1))
let arr1 = [1,2,3,4,5]
pull(arr1, 1, 2)
console.log(arr1)