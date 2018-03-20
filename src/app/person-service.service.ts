import { Injectable } from '@angular/core';
import { person } from './Dataset';
import * as nodemailer from 'nodemailer';

@Injectable()
export class PersonServiceService {
  personArr:Array<any>;  
     constructor() {
      this.personArr=[
        {name:"SravanthiPavuluri",email:"Sravanthi@hotmail.com",college:"St.Ann's College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Naveen Vedala",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Mahamod Mujaid",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Tarun Dilikar",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Hari Poorna",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Sreekanth",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Manideep",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Mahesh",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Hari Prasad",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Veera Reddy",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Konda Reddy",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Somya kalyani",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Sravya",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Sikha Singh",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Manasa Ch",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Krupa Varma",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},       
      ];
   }
   getAllProfiles(){
      return this.personArr;
   }

   getProfileInfo(pname:string){
     //console.log(this.personArr.find(function (obj) { return obj.name === "SravanthiPavuluri"; }));
      return this.personArr.find(function (obj) { return obj.name === "SravanthiPavuluri"; });
      //return this.personArr["name"]="Sravanthi Pavuluri";
   }

   CallMail():void{
    //nodemailer.createTestAccount((err, account) => {
            //     // create reusable transporter object using the default SMTP transport
            //     let transporter = nodemailer.createTransport({
            //         host: 'smtp.ethereal.email',
            //         port: 587,
            //         secure: false, // true for 465, false for other ports
            //         auth: {
            //             user:'spavuluri@digitallynctech.com', // generated ethereal user
            //             pass: 'rsbalaji20' // generated ethereal password
            //         }
            //     });
            
            //     // setup email data with unicode symbols
            //     let mailOptions = {
            //         from: '"sravanthi" <spavuluri@digitallynctech.com>', // sender address
            //         to: 'sravanthipavuluri20@gmail.com', // list of receivers
            //         subject: 'Hello ✔', // Subject line
            //         text: 'Hello world?', // plain text body
            //         html: '<b>Hello world?</b>' // html body
            //     };
            
            //     // send mail with defined transport object
            //     transporter.sendMail(mailOptions, (error, info) => {
            //         if (error) {
            //             return console.log(error);
            //         }
            //         console.log('Message sent: %s', info.messageId);
            //         // Preview only available when sending through an Ethereal account
            //         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            
            //         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            //         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            //     });
            // });
   //}

                    let transporter = nodemailer.createTransport({
                      host: 'smtp.example.com',
                      port: 465,
                      secure: true,
                      auth: {
                        user: 'spavuluri@digitallynctech.com',
                        pass: 'rsbalaji20'
                    }
                  });

                  let mailOptions = {
                    from: '"sravanthi" <spavuluri@digitallynctech.com>',
                    to: 'sravanthipavuluri20@gmail.com',
                    subject: 'Test email subject',
                    text: 'Test email body'
                  };

                  transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                    return console.log(error);
                  }
                  console.log('Message %s sent: %s', info.messageId, info.response);
                  })

   }

   callEmail():void{
     
   }

}
