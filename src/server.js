const { response } = require('express');
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//iniciando o exporess
const server = express();
server
.use(express.urlencoded({extended:true}))
.use(express.static('public'))

//conmfigurar template engines
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//criar uma rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)
    
    

server.listen(5555);