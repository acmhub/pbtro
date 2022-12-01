import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SG_API_KEY);

export default async (req, res) => {
	const { name, email, phone_number, location, quote } = req.body;

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

	try {
		await sendgrid.send({
			from: "web@pbtromania.ro",
			to: "pbtromania@gmail.com",
			subject: "[SITE] Cerere Oferta",
			html: `
			<div>
				Nume: ${name} <br />
				Email: ${email} <br />
				Numar de telefon: ${phone_number} <br />
				Locatie: ${location}
				<br /> <br />
	
				Solicitare: <br />
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
		});
	} catch (error) {
		return res
			.status(error.statusCode || 500)
			.json({ error: error.message });
	}

	return res.status(200).json({ error: "" });
};
