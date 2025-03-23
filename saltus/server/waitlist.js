require("dotenv").config();
console.log("EMAIL_USER:", process.env.EMAIL_USER); // Debugging
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());



// Nodemailer Transporter (Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});

app.post("/join-waitlist", async (req, res) => {
  const { fullname, email, organization } = req.body;

  if (!fullname || !email || !organization) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Welcome to the Waitlist!",
    html: `<p>Hi <b>${fullname}</b>,</p><p>Thank you for joining our waitlist. We'll keep you updated!</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Successfully joined the waitlist!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
