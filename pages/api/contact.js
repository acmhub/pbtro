import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SG_API_KEY);

export default async (req, res) => {
	const { name, email, phone_number, subject, message } = req.body;

	try {
		await sendgrid.send({
			from: "web@pbtromania.ro",
			to: "pbtromania@gmail.com",
			subject: "[SITE] " + subject,
			html: `
			<div>
				Nume: ${name} <br />
				Numar de telefon: ${phone_number} <br />
				Email: ${email}
				<br /> <br />
				${message}
			</div>
			`,
		});
	} catch (error) {
		return res
			.status(error.statusCode || 500)
			.json({ error: error.message });
	}

	return res.status(200).json({ error: "" });
};
