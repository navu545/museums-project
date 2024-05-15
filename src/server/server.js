const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const PORT = 3001;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/data", (req, res) => {
  res.send("GET request received at /api/data");
});
app.get("/api/data/two", (req, res) => {
  res.send("GET request received at /api/data");
});


app.post("/api/data", async (req, res) => {
  const receivedData = req.body;
  const { name, email, message, subject, id} = receivedData;
  console.log("Received sponsor data from frontend:", receivedData);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: {
        name: "nav",
        address: process.env.SMTP_USER,
      },
      to: ["navu545@gmail.com"],
      subject: "New Sponsor Received",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nSubject: ${subject}\nID: ${id}\n`,

    };

    await transporter.sendMail(mailOptions); 
    console.log("Mail sent successfully!");
  } catch (error) {
    console.error(error);
  }

  res.json({ message: " Sponsor Data received successfully" });
});

app.post("/api/data/two", async (req, res) => {
  const receivedData = req.body;
  const { name, email, request, id } = receivedData;
  console.log("Received request data from frontend:", receivedData);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: {
        name: "nav",
        address: process.env.SMTP_USER,
      },
      to: ["navu545@gmail.com"],
      subject: "New Request Received",
      text: `Name: ${name}\nEmail: ${email}\nRequest: ${request}\nID: ${id}\n`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully!");
  } catch (error) {
    console.error(error);
  }

  res.json({ message: " Request Data received successfully" });
});

app.listen(PORT, () => console.log(`server is now listening on port ${PORT}`));
