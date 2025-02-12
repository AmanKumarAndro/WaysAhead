import express from 'express';
import Contact from '../model/Contact.js';
import nodemailer from 'nodemailer';

const router = express.Router();

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    // Send auto-reply email
    const mailOptions = {
      from: `"WaysAhead Global" <${process.env.EMAIL_USER}>`,
      to: newContact.email,
      subject: 'Thank you for contacting WaysAhead Global',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a365d;">Dear ${newContact.name},</h2>
          <p>Thank you for reaching out to WaysAhead Global. We've received your message regarding:</p>
          <p><strong>Industry:</strong> ${newContact.industry}</p>
          <p><strong>Region:</strong> ${newContact.region}</p>
          <p>Our team will review your inquiry and respond within 2 business days.</p>
          <p>Best regards,<br/>
          WaysAhead Global Team</p>
          <hr style="border: 1px solid #e2e8f0; margin: 20px 0;">
          <p style="font-size: 0.9em; color: #718096;">
            This is an automated message. Please do not reply directly to this email.
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    
    res.status(201).json({
      success: true,
      message: 'Message received. Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing your request'
    });
  }
});

export default router; 