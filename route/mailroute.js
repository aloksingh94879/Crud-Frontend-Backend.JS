const mailRoute=require('express').Router()

const { homePage,uploadPage,mailController,mailAttachmentController}=require("../mailcontroller/mailcontroller")
const fileConfig=require("../middleware/fileConfig")

mailRoute.get('/',homePage)
mailRoute.get('/upload',uploadPage)
mailRoute.post('/send/mail',mailController)
mailRoute.post('/send/mail/attachment',fileConfig,mailAttachmentController)


module.exports=mailRoute

