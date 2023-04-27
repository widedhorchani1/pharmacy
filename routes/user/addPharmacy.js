const Pharmacy =  require ("../../models/Pharmacy")

module.exports= async(req,res)=>{
    try {
        let {name,email,password,phone,address,garde}=req.body
        let newPhar = new Pharmacy ({
            name,
            email,
            password,
            phone,
            address,
            garde
        })
        await newPhar.save()
        res.satus(200).json({
            satut:true,
            message:" your acount has been created successfuly"
        })
    }catch (error){
        if (error.errors.name)
        { return res.satus(401).json({status:false , error:error.errors.name.message})}
        
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