const {readFile} =require('fs')

const getText = (path) => {
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=> {
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
getText('./content/first.txt')
    .then((result)=>console.log(result))
    .then((err)=>console.log(err))

// note that ()=>{} is called a call back function
//now the problem with this readfile that is async is, what if we want to read so many files...
//this is where promises take advantage

