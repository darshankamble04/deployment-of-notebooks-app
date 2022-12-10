const mongoose =require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema ({
    name: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true,
        unique:true
    },
    password: {
        type:String,
        require:true
    },
    notebookcoverurl:{
        type:Array,
        default:[]
    },
    auth: {
        type:Boolean,
        require:true
    },
    date: {
        type:Date,
        default:Date.now
    }
});

const User = mongoose.model("User",UserSchema);
module.exports = User;