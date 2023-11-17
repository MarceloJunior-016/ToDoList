const express = require('express')
const Controller = require('./controller/controller');
const router = express.Router();

let resValueData = {
    data: '',
}

const processarDadosMiddleware = (req, res, next) => {
    const Note = req.body;
    const resValue =  new Controller(Note.titleNote, Note.contentNote, Note.tag);
    resValueData.data = resValue.getNote
    next();
  };


router.post('/',  processarDadosMiddleware, (req,res)=>{
    /*Create*/ 
    res.json(resValueData)
    console.log(resValueData)
})

router.get('/notes', (req,res)=>{
    const dados = resValueData
    res.send(`<h1> Ola mundo <h1/>`)
    console.log('Dados: ', dados)
})

router.get('/notas', (req,res)=> {
})

module.exports = router