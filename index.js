const  express = require('express')
const home = require('./home')

const app = express()

app.get('/',(req, res) =>{  
})
app.get('/about',(req,res) =>{
    res.send('ini halaman about')
})
app.get('/home',(req,res) =>{
    home(req,res)
})
app.get('/profil/:name',(req,res) =>{
    const name = req.params.name
    res.send('ini halaman profil ' + name)
})
app.listen(5000, () => {
console.log('server sedang beralan')
})