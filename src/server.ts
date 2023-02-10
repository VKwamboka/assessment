import express, { json } from 'express'
import router from './Routers'

const app= express()

app.use(json()) 


app.use('/users', router)



app.listen(4000,()=>{
console.log("Running ...");

})