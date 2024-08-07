import { FormSchema } from '../_schema';

export const useSendMail = () => {
  const sendMail = async (data: FormSchema) => {
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      await response.json();
    } catch (error) {
      console.error('Failed to send mail:', error);
    }
  };

  return { sendMail };
};
