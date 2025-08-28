
import emailjs from '@emailjs/browser';

// EmailJS configuration - You'll need to set these up at https://www.emailjs.com/
const EMAIL_SERVICE_ID = 'service_rizenbi'; // Create service in EmailJS dashboard
const EMAIL_TEMPLATE_ID = 'template_demo_request'; // Create template in EmailJS dashboard
const EMAIL_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'; // Get from EmailJS dashboard

// Initialize EmailJS (only if keys are configured)
if (EMAIL_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY') {
  emailjs.init(EMAIL_PUBLIC_KEY);
}

export interface DemoRequestData {
  name: string;
  email: string;
  phone: string;
  childAge: string;
  program: string;
  message: string;
}

export const sendDemoRequest = async (data: DemoRequestData): Promise<boolean> => {
  // If EmailJS is not configured, return false to trigger fallback
  if (EMAIL_PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
    return false;
  }

  try {
    const templateParams = {
      to_email: 'rizenbiusa@gmail.com',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      child_age: data.childAge,
      program: data.program || 'Not specified',
      message: data.message || 'No additional message',
      reply_to: data.email,
    };

    const response = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      templateParams
    );

    return response.status === 200;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Fallback method using a simple mailto link if EmailJS fails
export const sendEmailFallback = (data: DemoRequestData) => {
  const subject = encodeURIComponent('Demo Request from Rizenbi Website');
  const body = encodeURIComponent(`
Demo Request Details:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Child Age/Grade: ${data.childAge}
Interested Program: ${data.program || 'Not specified'}

Message:
${data.message || 'No additional message provided'}

---
This message was sent from the Rizenbi Learning Centre website contact form.
  `);
  
  const mailtoUrl = `mailto:rizenbiusa@gmail.com?subject=${subject}&body=${body}`;
  window.open(mailtoUrl, '_self');
};
