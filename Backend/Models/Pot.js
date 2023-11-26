const mongoose=require ("mongoose");
const user =require("./User")



const potSchema = new mongoose.Schema({
    title:{type:String,require:true},
    description: {type:String},
    total:{type:Number},
    img:{type:String},
    user: { type: mongoose.Schema.Types.ObjectId,ref:user }
}
);

const pot=mongoose.model("pot",potSchema)

module.exports=pot