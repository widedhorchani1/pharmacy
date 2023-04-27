const express = require("express")
const User = require ("../../models/User")
const bcrypt = require('bcrypt')

module.exports = async (req,res)=>{
    try{
        let {userName,email,password,phone,address,userImg}=req.body
        let testUser= await User.findOne ({ email, phone})
        if (testUser){
           return  res.status(400).json({status: false, error: "email of phone number is already exist please try an athor one"})
        }
        console.log(testUser)
        let salt = await bcrypt.genSalt(10)
        let hashedPassword = await bcrypt.hash(password,salt)
                let newUser = new User ({
            userName,
            email,
            password:hashedPassword,
            phone,
            address,
            userImg
        })
        await newUser.save()
        res.status(200).json({
            status:true,
            message: "your account has been created succssefully"
        })
    }catch (error){
        if (error.errors.userName)
        { return res.satus(401).json({status:false , error:error.errors.userName.message})}
        
       else if (error.errors.email)
       {return res.satus(401).json({status:false , error:error.errors.email.message})}

       else if (error.errors.password)
       {return res.satus(401).json({status:false , error:error.errors.password.message})}

        else if (error.errors.phone)
        {return res.satus(401).json({status:false , error:error.errors.phone.message})}

        else if (error.errors.address)
        {return res.satus(401).json({status:false , error:error.errors.address.message})}
    }
}