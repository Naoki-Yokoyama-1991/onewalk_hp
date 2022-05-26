import { FooterNav } from './Navbar';

export default function Footer() {
  return (
    <footer className='relative bottom-0 w-full'>
      <FooterNav />
      <div className='mx-auto mt-14 grid h-20  max-w-screen-xl items-center  rounded-t-80 bg-skin'>
        <p className='ml-24 text-sm'>© ONEWALK Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
