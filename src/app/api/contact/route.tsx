import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { writeFile, unlink } from "fs/promises"; // Added unlink here
import { join } from "path";
import { tmpdir } from "os";
import { randomUUID } from "crypto"; // Add this for unique filenames

const forwardEmails = {
	COMERCIALIZA: "clientes@fiambresluvianka.com.ar",
	ATENCION: "clientes@fiambresluvianka.com.ar",
	TRABAJA: "rrhh@fiambresluvianka.com.ar",
};
export async function POST(req: Request) {
	try {
		// Debug env vars in production
		console.log("=== PRODUCTION DEBUG ===");
		console.log("NODE_ENV:", process.env.NODE_ENV);
		console.log("EMAIL_FROM:", process.env.EMAIL_FROM);
		console.log("EMAIL_USER:", process.env.EMAIL_USER);
		console.log("EMAIL_HOST:", process.env.EMAIL_HOST);
		console.log("Has EMAIL_PASS:", !!process.env.EMAIL_PASS);
		console.log("========================");

		const formData = await req.formData();

		const date = new Date();
		const options: Intl.DateTimeFormatOptions = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		};

		const formatted = date
			.toLocaleString("es-AR", options)
			.replace(" a. m.", "AM")
			.replace(" p. m.", "PM");

		// Create transporter
		const transporter = nodemailer.createTransport({
			service: "Outlook365",
			// port: Number.parseInt(process.env.EMAIL_PORT || "587"),
			// secure: process.env.EMAIL_SECURE === "true",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		// Handle file attachment if it exists
		const attachments = [];
		const file = formData.get("attachment") as File | null;
		let filePath: string | undefined;

		if (file) {
			const bytes = await file.arrayBuffer();
			const buffer = Buffer.from(bytes);

			// Create unique filename to avoid collisions
			const uniqueFilename = `${randomUUID()}-${file.name}`;
			filePath = join(tmpdir(), uniqueFilename);

			try {
				await writeFile(filePath, buffer);

				attachments.push({
					filename: file.name, // Original filename for email
					path: filePath, // Temporary path on server
				});
			} catch (error) {
				console.error("Error writing file:", error);
				throw new Error("Failed to process file attachment");
			}
		}

		// Get form fields
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const phone = formData.get("phone") as string;
		const direction = formData.get("direction") as string;
		const city = formData.get("city") as string;
		const provincia = formData.get("provincia") as string;
		const message = formData.get("message") as string;
		const contactType = formData.get(
			"contactType",
		) as keyof typeof forwardEmails;

		// Email options
		const mailOptions = {
			from: process.env.EMAIL_FROM,
			to: forwardEmails[contactType],
			subject: "Nuevo contacto desde la web",
			text: `
	Nuevo Contacto
    
    ================================================================
    INFORMACIÓN DE CONTACTO
    ================================================================
    
    Nombre:     ${name}
    Email:      ${email}
    Teléfono:   ${phone}
    Dirección:  ${direction}
    Ciudad:     ${city}
    Provincia:  ${provincia}
    
    ================================================================
    MENSAJE
    ================================================================
    
    ${message}
    
    ================================================================
    DETALLES ADICIONALES
    ================================================================
    
    Tipo de consulta: ${contactType}
    Fecha y hora:     ${formatted}
	`,
			html: `
    <div style="
      font-family: 'Arial', 'Helvetica', sans-serif; 
      max-width: 650px; 
      margin: 0 auto; 
      background: #ffffff;
      border: 1px solid #ddd;
      border-radius: 4px;
    ">
      
      <!-- Header -->
      <div style="
        background: #2c3e50;
        color: white;
        padding: 25px;
        border-bottom: 3px solid #3498db;
      ">
        <h1 style="margin: 0; font-size: 22px; font-weight: 600;">
          Nuevo Contacto
        </h1>
      </div>

      <!-- Contact Info Section -->
      <div style="padding: 30px;">
        <div style="
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          padding: 25px;
          margin-bottom: 25px;
        ">
          <h2 style="
            color: #2c3e50;
            margin: 0 0 20px 0;
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 2px solid #3498db;
            padding-bottom: 8px;
          ">
            Información de Contacto
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #495057; width: 120px;">Nombre:</td>
              <td style="padding: 10px 0; color: #212529;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #495057;">Email:</td>
              <td style="padding: 10px 0;">
                <a href="mailto:${email}" style="color: #3498db; text-decoration: none;">
                  ${email}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #495057;">Teléfono:</td>
              <td style="padding: 10px 0; color: #212529;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #495057;">Dirección:</td>
              <td style="padding: 10px 0; color: #212529;">${direction}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #495057;">Ciudad:</td>
              <td style="padding: 10px 0; color: #212529;">${city}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #495057;">Provincia:</td>
              <td style="padding: 10px 0; color: #212529;">${provincia}</td>
            </tr>
          </table>
        </div>

        <!-- Message Section -->
        <div style="
          background: #ffffff;
          border: 1px solid #dee2e6;
          border-left: 4px solid #3498db;
          padding: 25px;
          margin-bottom: 25px;
        ">
          <h2 style="
            color: #2c3e50;
            margin: 0 0 15px 0;
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          ">
            Mensaje
          </h2>
          <div style="
            background: #f8f9fa;
            padding: 20px;
            border: 1px solid #e9ecef;
            line-height: 1.6;
            color: #212529;
            font-size: 15px;
          ">
            ${message}
          </div>
        </div>

        <!-- Footer Info -->
        <div style="
  background: #ecf0f1;
  border-radius: 6px;
  padding: 15px;
  font-size: 13px;
  color: #697677;
  text-align: center;
">
  <strong>Recibido:</strong> ${formatted}
</div>
      </div>
    </div>
	`,
			attachments,
			replyTo: email,
		};

		// Send email
		await transporter.sendMail(mailOptions);

		if (filePath) {
			// Clean up file if it exists
			await unlink(filePath);
		}

		return NextResponse.json(
			{ success: true, message: "Email sent successfully" },
			{ status: 200 },
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{
				success: false,
				message: "Error sending email",
				error: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		);
	}
}
