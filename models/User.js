const mongoose = require ("mongoose")
const Schema =  mongoose.Schema;

const userSchema = new Schema ({
    userName: {
        type: String,
        required: [true, "The user name is a required field"],
      },
      email: {
        type: String,
        match: [
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          "Invalid e-mail",
          "The user name is a required field",
        ],
      },
      password: {
        type: String,
    
        match: [
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
          "Invalid password",
        ],
      },
      phone: {
        type: String,
        required: [true, "The phone  is a required field"],
      },
    
      address: {
        type: String,
        required: [true, "The address is a required field"],
      },
     /* userId: {
        type:this.schema.type.
        ref: "pharmacy",
      },*/
      userImg: {
        type: String,
        default:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/User.svg/2048px-User.svg.png",
      },
      isUser: {
        type: Boolean,
        default: true,
      },
      isAdmin: {
        type: Boolean,
        default: true,
      },
    });
module.exports =User = mongoose.model("User",userSchema)