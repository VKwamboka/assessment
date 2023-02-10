import {Router} from 'express'
import  { RegisterUser, getUsers, updatePassword } from '../controllers/auth'


const router= Router()

router.get('', getUsers)
router.post('', RegisterUser)
router.put('/:id', updatePassword)


export default router