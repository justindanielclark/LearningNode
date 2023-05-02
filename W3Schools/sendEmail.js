import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lololol@gmail.com",
    pass: "wouldntyouliketoknow",
  },
});
const mailOptions = {
  from: "lololol@gmail.com",
  to: "yeahright@gmail.com",
  subject: "test",
  text: '<h1>I love you</h1><p style="color:red">You are a a cutie</p>',
};
transport.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Email Sent: " + info.response);
  }
});
