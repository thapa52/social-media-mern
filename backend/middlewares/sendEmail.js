const nodeMailer = require("nodemailer");
const { options } = require("../app");

exports.sendEmail = async (options) => {
  var transporter = nodeMailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4af36aec84bd08",
      pass: "c44b8216c44298"
    }
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
