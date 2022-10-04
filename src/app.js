import express from 'express'
import {pool} from './db.js'

const app = express()

app.get('/',async(req,res)=>{
    const [row] = await pool.query('SELECT * FROM users')
    res.send([row])
})

app.get('/ping', async (req,res)=>{
    const [result] = await pool.query('SELECT "hello world" as RESULT');
    res.json(result[0])
    })

app.get('/create', async(req,res)=>{
    const result = await pool.query('INSERT INTO users(name) VALUES("jonh")')

})

app.listen(3000)

console.log('server on port 3000')
