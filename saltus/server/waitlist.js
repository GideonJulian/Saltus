require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Create Schema
const UserSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  organization: String,
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);

// Set up Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API to add user to the waitlist
app.post("/join-waitlist", async (req, res) => {
  const { fullname, email, organization } = req.body;

  if (!fullname || !email || !organization) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Save to MongoDB
    const newUser = new User({ fullname, email, organization });
    await newUser.save();

    // Send confirmation email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to the Waitlist",
      text: `Hi ${fullname},\n\nThank you for joining our waitlist. We’ll keep you updated!\n\n- The Team`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Successfully joined the waitlist!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to join the waitlist" });
  }
});

// API to fetch all users who joined
app.get("/waitlist-users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch waitlist users" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));