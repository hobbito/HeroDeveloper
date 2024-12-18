interface EmailParams {
  name: string;
  email: string;
  message: string;
  token: string;
}

interface EmailResult {
  success: boolean;
  error?: string;
}

export async function sendEmail(_params: EmailParams): Promise<EmailResult> {
  return {
    success: false,
    error: "Email service is temporarily unavailable. Please try again later or contact us through alternative means."
  };
} 