// fs promises
const fs = require("fs").promises


fs.readFile("./data/cities.json","utf-8")
// akan mereturn sebuah Promise
// karena dia adalah sebuah promise, maka akan mempunyai method Then & Catch

fs.readFile("./data/cities.json","utf-8")
    .then((data) =>{
        console.log(JSON.parse(data).length);
    })