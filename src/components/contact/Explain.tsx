import React from 'react';
import Button from '../libs/ButtonLeft';

const Explain: React.FC = () => {
  return (
    <div>
      <span className='mb-6 block text-lg  font-semibold text-red sm:mb-2 sm:text-base sm:font-medium '>
        CONTACT
      </span>
      <h3 className='mb-8 text-4xl font-semibold sm:text-2xl sm:leading-snug'>お問い合わせ</h3>
      <p className='mb-16'>
        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミーです。文字の大きさ、量、字間、行間等を確この文章はダミーです。
      </p>
      <div className='sm:hidden'>
        <Button href={'/'} text={'TOPに戻る'} />
      </div>
    </div>
  );
};
export default Explain;
