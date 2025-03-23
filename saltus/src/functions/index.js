const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

admin.initializeApp();
sgMail.setApiKey("YOUR_SENDGRID_API_KEY"); // Replace with your actual API key

exports.sendWelcomeEmail = functions.firestore
  .document("waitlist/{docId}")
  .onCreate(async (snap, context) => {
    const userData = snap.data();
    const msg = {
      to: userData.email,
      from: "ceo@saltusco.com", 
      subject: "Welcome to the Waitlist!",
      text: `Hello ${userData.fullname},\n\nThank you for joining our waitlist! We will notify you when we launch.\n\nBest,\nYour Team`,
      html: `<p>Hello <strong>${userData.fullname}</strong>,</p><p>Thank you for joining our waitlist! We will notify you when we launch.</p><p>Best,<br>Your Team</p>`,
    };

    try {
      await sgMail.send(msg);
      console.log("Email sent to:", userData.email);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
