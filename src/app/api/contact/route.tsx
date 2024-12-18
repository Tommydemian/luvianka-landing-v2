import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { writeFile, unlink } from "fs/promises"; // Added unlink here
import { join } from "path";
import { tmpdir } from "os";
import { randomUUID } from "crypto"; // Add this for unique filenames

const forwardEmails = {
  Comercializa: "info@fiambresluvianka.com.ar",
  Atencion: "info@fiambresluvianka.com.ar",
  Trabaja: "rrhh@fiambresluvianka.com.ar",
};
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
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
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const direction = formData.get("direction");
    const city = formData.get("city");
    const provincia = formData.get("provincia");
    const message = formData.get("message");
    const contactType = formData.get(
      "contactType",
    ) as keyof typeof forwardEmails;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `[REENVIAR A ${forwardEmails[contactType]}] Nuevo mensaje de contacto - ${contactType}`,
      text: `
        REENVIAR ESTE EMAIL A: ${forwardEmails[contactType]}
        ----------------------------------------
        Tipo de Contacto: ${contactType}
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone}
        Dirección: ${direction}
        Ciudad: ${city}
        Provincia: ${provincia}
        Mensaje: ${message}
      `,
      html: `
        <h2>REENVIAR ESTE EMAIL A: ${forwardEmails[contactType]}</h2>
        <hr/>
        <h3>Nuevo mensaje de contacto - ${contactType}</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Dirección:</strong> ${direction}</p>
        <p><strong>Ciudad:</strong> ${city}</p>
        <p><strong>Provincia:</strong> ${provincia}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
      attachments,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Clean up file if it exists
    if (filePath) {
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
