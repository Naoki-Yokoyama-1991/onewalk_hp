import sgMail from '@sendgrid/mail';

export type msgInfo = {
  to: string;
  from: string;
  subject: string;
  text: string;
};

const sendMails = async (info: msgInfo) => {
  const msg = {
    to: info.to,
    from: info.from,
    subject: info.subject,
    text: info.text,
  };
  try {
    const result = await sgMail.send(msg);
    console.log(result);
    console.log('success to sendGrid');
  } catch (error) {
    console.log('failed to sendGrid');
    console.log(error);
  }
};

export default sendMails;
