export default function handler(req, res) {
	const { name, email, phone_number, subject, message } = req.body;
	let nodemailer = require("nodemailer");
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: "adyacmx@gmail.com",
			pass: "bcibgiobtrxxvqzv",
		},
		secure: true,
	});

	const mailData = {
		from: email,
		to: "adyacmx@gmail.com",
		subject: subject,
		text: message,
		html: `<div>
		Nume: ${name} <br />
		Numar de telefon: ${phone_number} 
		<br /> <br />
		${message}</div>`,
	};

	try {
		transporter.sendMail(mailData, function (err, info) {
			if (err) console.log(err);
			else console.log(info);
		});
		res.send(200);
	} catch (error) {
		res.status(error);
	}
}
