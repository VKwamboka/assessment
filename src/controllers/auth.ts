import { RequestHandler,Request,Response } from 'express'
import {v4 as uid} from 'uuid'
import {RegisterUsers } from '../helpers'
import { UserData, Users } from '../models'
import Bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import path from 'path'
// import jwt from 'jsonwebtoken'
import { DatabaseHelper} from '../databaseHelpers'



const  _db = new DatabaseHelper()
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

interface ExtendedRequest extends Request{
    body:{name:string ,email:string,Password:string, ConfirmPassword:string}
    info?:UserData
}





 export const getUsers:RequestHandler=async (req, res)=>{

    const users:Users[]=[] = await (await _db.exec('getUserByName', {name:'vee'})).recordset
    return res.status(200).json(users)
}



export async function RegisterUser(req:ExtendedRequest, res:Response){
try {
    // const UserId =uid()
    const{name,email,Password} = req.body
    const {error} =RegisterUsers.validate(req.body)
    if(error){
        return res.status(422).json(error.details[0].message)
    }
    const hashedPassword= await Bcrypt.hash(Password,10)
   
    await _db.exec('createUser', { userId:uid(), name:name,email:email, password:hashedPassword})
    return res.status(201).json({message:'User created successfully'})

} 
catch (error) {
     res.status(500).json(error) 
}
}


export const updatePassword=(req:Request<{userId:string}>, res:Response)=>{
    
    const userId = req.params.userId
    const index=users.findIndex(x=>x.userId===userId)
    if(index<0){
       return res.status(404).json({message:"User not found"})
    }
     const {Password} = req.body as{Password:string}

     users[index]={...users[index], Password}

     res.status(200).json({message:"User password password"})
}