const User =require("../models/User.js") 
const login = async (req,res)=>{
    try {
      console.log(req.body)
      const {email,password} = req.body
      const users = await User.find()
      console.log(users)
      const user = await User.findOne({email:email})
      console.log(user)
      if(!user){
        return res.status(500).json({message:"User not found"})
      }
      let isValid = false
      console.log(user.password)
      if (user.password === password) {
        isValid = true
      }
      console.log(isValid)
      if(!isValid){
        return res.status(500).json({message:"Invalid credentials"})
      }
     res.status(200).json({message:"Login successful"})
    } catch (error) {
      console.log(error)
    res.status(500).json({error:error})
    }
  }

  
const getUsers = async (req,res)=>{
    try {
      console.log(User)
      const users = await User.find({})
      console.log(users)
      res.status(200).json(users)
    }catch(error) {
      res.status(500).json({error: 'Internal Server Error'})
    }
  }
  
  const addUser = async (req,res)=>{
  
    try {
         
        var userItem = {
          name : req.body.name,
          email: req.body.email,
          username : req.body.username,
          password : req.body.password
          
        }
        var user = new User(userItem)
        await user.save()
        res.status(201).json(user)
  
    } catch (error) {
      console.log(error)
      res.status(500).json({error:'Internal Server error'})
    }
        
    }
 
    //Update
const updateUser = async (req, res) => {
    try {
      const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updateUser) return res.status(404).json({ message: 'User not found' });
      res.json(updateUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteUser = async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) return res.status(404).json({ message: 'User not found' });
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  module.exports= {login,getUsers,addUser,updateUser,deleteUser}