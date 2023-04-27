const express = require("express")
const User = require ("../../models/User")
const jwt = require ("jsonwebtoken")
require("dotenv").config()
module.exports = async (req,res)=>
{
    try{
        let {email,password}=req.body
        let user = await User.findOne({email})
        if (! user)
        {
            return res.status(400).json({status:false,message:"wrong email or passord please try again"})
        }
        let testPassword = await bcrypt.compare(password,user.password)
        if (!testPassword)
        {
            return res.status(400).json(
            {
                status:false,
                message:"wrong email or password plese try again"
            })
        }
        let KEY =process.env.KEY
        console.log("ok")
        let token = await jwt.sign(
            {id:user._id,
            email:user.email,
            isUser:user.isUser,
        isAdmin:user.isAdmin},
            KEY, 
            {expiresIn : "1d"})
        res.status(200).json(
        {
            status:true,
            message:"youa are logging in successfully",
            token,
        })        
    }catch (error) 
    {
        if (error) throw error;
        res.status(401).json({ status: false, error });
         if (error.errors.email) {
           return res
             .status(401)
             .json({ status: false, error: error.errors.email.message });
         } else if (error.errors.password) {
           return res
             .status(401)
             .json({ status: false, error: error.errors.password.message });
         } 
}
}