const path = require('node:path')

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/content/subfolder/test.txt')
console.log(base)

const filename = path.basename('/content/subfolder/test.txt', '.txt')
console.log(filename)

const extension = path.extname('/content/subfolder/test.txt')
console.log(extension)
