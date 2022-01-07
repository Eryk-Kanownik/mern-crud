const express = require('express')

const app = express();

app.get('/',(req,res) => res.send("HEllo"))

app.listen(2000,() => console.log("Server works at localhost:2000"))