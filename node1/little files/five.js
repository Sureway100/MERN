//method 1
// const fs = require('fs')
// fs.read

//method 2
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/first.txt', 'utf8')

console.log(first, second)

//lets create a new file called result-sync.txt and where in this value
// two arguments, where you creating files and what you writing
writeFileSync('./content/result-sync.txt', `come to heaven and make your dreams come`, {flag:'a'})


// for asynchronous
const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})