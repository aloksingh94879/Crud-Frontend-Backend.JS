const express=require('express')
const path=require('path')
const multer=require('multer')

// storage locatioon and filename setting

const myStorage =multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"documents/")
    },
    filename:(req,file,callback)=>{
    //  original name of the file
    callback(null,` ${file.originalname}`)
    }
})


// multer config
let fileConfig=multer({
    storage:myStorage,
    limits:{
        fileSize:10*1024*1024

    }
}).single('mfile')

// .single(filename)=> for single files 
// .array of file

module.exports=fileConfig