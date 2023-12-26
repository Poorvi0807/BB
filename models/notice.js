const mongoose= require("mongoose");

const noticeSchema=new mongoose.Schema({
    title: {type: String , required : true},
    body: {type: String , required : true},
    category: {type: String , enum: ['parking' , 'covid', 'maintenance']},
    date: {type: String , default: Date.now},

    user:{type : mongoose.Schema.Types.ObjectId,ref:'User',required:true},

});

const Notice = mongoose.model("Notice",noticeSchema);

module.exports=Notice;