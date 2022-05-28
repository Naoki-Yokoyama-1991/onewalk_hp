import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey('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');

const sendMails = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
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
    try {
      const result = await sgMail.send(msg);
      //自動返信メール
      if (result) {
        const reply = {
          to: req.body.email,
          from: 'yokoyama@one-walk.co.jp',
          subject: '自動返信メール｜ONEWALK',
          text:
            '※このメールは自動応答によって送信されています。' +
            '\n\n' +
            'この度は、お問い合せ頂き誠にありがとうございます。' +
            '\n\n' +
            '下記の内容でお問い合せを受け付けました。' +
            '\n\n' +
            '件名：' +
            req.body.subject +
            '\n' +
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
            req.body.detail +
            '\n\n' +
            '営業日以内に担当の××よりご連絡致しますので今しばらくお待ちくださいませ。' +
            '\n\n' +
            '-----------------------------------------------------------------------------------' +
            '\n\n' +
            '  会社名：株式会社 ワンウォーク' +
            '\n' +
            '  〒065-0041 北海道札幌市東区本町1条11丁目1−1' +
            '\n' +
            '  TEL : 011-788-3077' +
            '\n' +
            '  Web : "https://one-walk.co.jp/"' +
            '\n\n' +
            '-----------------------------------------------------------------------------------',
        };
        const result = await sgMail.send(reply);
        if (result) console.log('success to reply');
      }
      console.log(result);
      console.log('success to sendGrid');
      res.status(202).end();
    } catch (error) {
      console.log('failed to sendGrid');
      console.log(error);
    }
  }
};

export default sendMails;
