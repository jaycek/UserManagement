const express =require('express')
const { login,addUser, getUsers,updateUser,deleteUser} =require('../controllers/userController.js')


const userRouter = express.Router()

userRouter.get('/',getUsers)
userRouter.post('/',addUser)
userRouter.patch('/:id',updateUser )
userRouter.post('/login',login)
userRouter.delete('/:id',deleteUser )

module.exports= userRouter