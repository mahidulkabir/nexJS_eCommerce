import nodemailer from 'nodemailer'
export const sendMail = (subject, receiver,body)=>{
var transporter = nodemailer.createTransport({
    host:,
    porta:,
    secure:false,
    auth:
})
}