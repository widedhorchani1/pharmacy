const pharmacy =require("../../models/Pharmacy")
module.exports = async (req,res)=>{
    try{
        let {address}= req.params  
        let Pharmacy = await pharmacy.find({address})
        res.status(200).json({ status:true,data: Pharmacy})
    }catch (error) {
      if (error )  throw error
    res.status(401).json ({status: false, error})
}}