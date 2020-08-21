const express = require ('express')
const { app } = require('../../..')

const tareasRutas = express.Router()

let tareas = [{nombre: "tarea 1"}]

tareasRutas.get('/',(req ,res )=>{
    res.status(200).json({response: "tareas"})
})

tareasRutas.post('/',(req,res)=>{
    const tarea = req.body
    tareas.push (tarea)
    res.status(201).json({response: "tarea creada"})
})

module.exports = {tareasRutas}


