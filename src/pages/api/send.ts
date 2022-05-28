import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.API as string);

const sendMails = async (req: NextApiRequest, res: NextApiResponse) => {
  const msg = {
    to: 'yokoyama@one-walk.co.jp',
    from: req.body.email,
    subject: req.body.subject,
    text:
      req.body.name +
      '様よりお問い合せがありました。' +
      '\n\n' +
      '組織名：' +
      req.body.organization +
      '\n' +
      '部署：' +
      req.body.department +
      '\n' +
      'お電話番号：' +
      req.body.number +
      '\n\n' +
      '＜お問い合せ内容＞' +
      '\n' +
      req.body.detail,
  };
  (async () => {
    try {
      const result = await sgMail.send(msg);
      //自動返信メール
      console.log(result);
      console.log('success to sendGrid');
      res.status(202).end();
    } catch (error) {
      console.log('failed to sendGrid');
      console.log(error);
    }
  })();
};

export default sendMails;
