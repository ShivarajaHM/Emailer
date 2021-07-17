import nodemailer from 'nodemailer';
import {user} from '../models/index';

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gmail.com',
    pass: 'password'
  }
});

export const emailer = (data)=>{
    return new Promise((resolve,reject)=>{
        data.forEach((element) => {
            var mailOptions = {
                from: 'sender email',
                to: element.dataValues.email,
                subject: 'Sending Email using Node.js[nodemailer]',
                text: 'Your Appointment reminder'
              };              
              let response = {}
              transporter.sendMail(mailOptions, async function(error, info){
                if (error) {
                    response['status'] = false;
                    response['email'] = element.dataValues.email
                    user.update({email_fails:true},{where:{email:element.dataValues.email}})
                } else {
                    response['status'] = true;
                    response['email'] = element.dataValues.email
                    user.update({email_success:true},{where:{email:element.dataValues.email}})
                }
              }); 
        });
        
    })
}