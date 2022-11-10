export default function handler(req, res) {
	const { name, email, phone_number, location, quote } = req.body;

	let nodemailer = require("nodemailer");
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PASSWORD,
		},
		secure: true,
	});

	var quoteItems = "";
	quote.forEach((item) => {
		Object.entries(item)
			.slice(1, -1)
			.forEach(
				(e) =>
					(quoteItems +=
						"<tr><td>" + e[0] + "</td><td>" + e[1] + "</td></tr>")
			);
	});

	const mailData = {
		from: email,
		to: "adyacmx@gmail.com",
		subject: "[WEB] Cerere Oferta",
		html: `
		<div>
			Nume: ${name} <br />
			Numar de telefon: ${phone_number} <br />
			Locatie: ${location}
			<br /> <br />

			Oferta: <br />
			<table>
				<thead>
					<th></th>
					<th></th>
				</thead>
				<tbody>
				${quoteItems}
				</tbody>
			</table>
		</div>`,
	};

	try {
		transporter.sendMail(mailData, function (err, info) {
			if (err) console.log(err);
			else {
				console.log(info);
				res.send(200);
			}
		});
	} catch (error) {
		res.status(error);
	}
}
