import mongoose from "mongoose";

const threadSchema= new mongoose.Schema({
    text:{type:String, required:true},
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    community:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Community",
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    parentId:{
        type:String //thread can also be a reply so parent is needed
    },
    children:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Thread"
        }
    ]
});

const Thread=mongoose.models.Thread||mongoose.model("Thread",threadSchema);

export default Thread;

// mongoose Schema Types ObjectId means single user has multiple threads and communities
//ref reference to instance in db