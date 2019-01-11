import mongoose, { Mongoose } from 'mongoose';

const Schema= mongoose.Schema;
let Assets=new Schema({
 deviceName:{
     type:String,
     
 },
 department:{
     type:String,
     
 },
 description:{
     type:String,
 
 },
 responsible:{
     type:String,
     
 },
 status:{
     type:String,
     default:'open'
 }
})
export default mongoose.model('Asset', Assets);

