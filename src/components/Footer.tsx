import { FooterNav } from './Navbar';

export default function Footer() {
  return (
    <footer className=' w-full'>
      <FooterNav />
      <div className='grid items-center mx-auto mt-14  max-w-screen-xl h-20  bg-skin rounded-t-80'>
        <p className='ml-24 text-sm'>© ONEWALK Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
