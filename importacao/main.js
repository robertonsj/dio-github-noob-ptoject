const {receivesNumber, prints} = require('./funcoes-auxiliares')

const numbers = [5, 50, 10, 98, 23]
const major = receivesNumber(numbers)
prints(`The major number is ${major}`)