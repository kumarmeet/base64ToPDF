import fs from "fs";
import path from "path";
import crypto from "crypto";

const _addPdf = (pdfString) => {
	// model.access.logged();
	const dir = path.join(
		__dirname,
		"..",
		"..",
		"static",
		"images",
		"vacs",
		crypto.randomUUID()
	);

	fs.writeFile(`${dir}.pdf`, pdfString, "base64", (error) => {
		if (error) {
			throw error;
		} else {
			console.log("Pdf saved.");
		}
	});

	return true;
};
