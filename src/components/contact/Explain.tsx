import React from 'react';
import Button from '../libs/ButtonLeft';

const Explain: React.FC = () => {
  return (
    <div>
      <span className='mb-10 block font-semibold text-red'>CONTACT</span>
      <h3 className='mb-8 text-4xl font-semibold'>お問い合わせ</h3>
      <p className='mb-16'>
        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミーです。文字の大きさ、量、字間、行間等を確この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミーです。文
        字間、行間等を確この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミーです。文
      </p>
      <Button href={'/'} text={'TOPに戻る'} />
    </div>
  );
};
export default Explain;
