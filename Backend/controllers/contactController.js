import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';
export const submitContact = async (req, res) => {
    const contact = new Contact(req.body);
    await contact.save();
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: { user: process.env.EMAIL, pass: process.env.PASSWORD }
    });
    await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'New Contact Submission',
        text: `Message from ${contact.name} (${contact.email}): ${contact.message}`
    });
    res.status(201).json({ message: 'Contact request submitted' });
};