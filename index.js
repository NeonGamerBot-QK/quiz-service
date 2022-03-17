if(process.argv.slice(2)[0] && process.argv.slice(2)[0] === "DEVELOPMENT") process.env.DEBUG = "*"
const express = require("express");
const app = express();
const path = require('path')
const ejs = require('ejs')
const port = 25565;
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
res.send("Hello Bozo")
})
 
app.listen(port, () => {
console.log(`Server is listening at http: //localhost:port`)
})