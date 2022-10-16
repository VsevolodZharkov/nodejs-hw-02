const sgMail = require("@sendgrid/mail");

const {SENGRID_API_KYE} = process.env;

sgMail.setApiKey(SENGRID_API_KYE);

const sendEmail = async (data) => {
	const mail = {...data, from: "vsevolod2149@gmail.com"};
	await sgMail.send(mail);
	return true;
}

module.exports = sendEmail;