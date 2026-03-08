const nodemailer = require("nodemailer");

// Use SendGrid in production, Gmail in development
const useSendGrid = process.env.NODE_ENV === 'production' && process.env.SENDGRID_API_KEY;

let transporter;
let sgMail;

if (useSendGrid) {
  try {
    // SendGrid for production
    sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log('Using SendGrid for emails');
  } catch (error) {
    console.error('SendGrid not available, falling back to Gmail:', error.message);
    transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS 
      }
    });
  }
} else {
  // Gmail for development
  transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS 
    }
  });
}

const sendMail = async (to, subject, text, attachments) => {
  try {
    if (useSendGrid && sgMail) {
      // SendGrid
      const msg = {
        to,
        from: process.env.EMAIL_USER || 'yadlameyuchad.site@gmail.com',
        subject,
        html: text,
      };
      
      if (attachments && attachments.length > 0) {
        msg.attachments = attachments.map(att => ({
          content: att.content.toString('base64'),
          filename: att.filename,
          type: att.contentType,
          disposition: 'attachment'
        }));
      }
      
      await sgMail.send(msg);
    } else {
      // Gmail (development or fallback)
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        html: text,
        attachments
      });
    }
  } catch (err) {
    console.error('Email error:', err);
    // Don't throw - just log the error so the server doesn't crash
    if (process.env.NODE_ENV === 'production') {
      console.log('Email failed but continuing...');
    } else {
      throw err;
    }
  }
};

module.exports = { sendMail };
