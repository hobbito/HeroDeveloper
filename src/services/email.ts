import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

export const initEmailService = (publicKey: string) => {
  emailjs.init(publicKey);
};

export const sendEmail = async (data: EmailData, serviceId: string, templateId: string) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
        'g-recaptcha-response': data.recaptchaToken,
      }
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}; 