import mongoose from "mongoose";


const complainSchema = new mongoose.Schema({
  author:{
    type :mongoose.Schema.Types.ObjectId,
    required:true,
    ref: 'User'
  },
  complain:{
    type: String,
    required:true,
  },
  title:{
    type: String,
    required:true
  },
  checked:{
    type:Boolean,
    default:false,
    required:true,
  }

},
{
    timestamps: true
});

export default mongoose.model('Complain', complainSchema);