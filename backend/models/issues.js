import mongoose, { Mongoose } from 'mongoose';

const Schema= mongoose.Schema;
let Issues=new Schema({
 Date:{
     type:String,
     
 },
 purchased_assets:{
     type:Number,
     
 }
})
export default mongoose.model('Issue', Issues);

