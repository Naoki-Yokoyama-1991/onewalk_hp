import { FooterNav } from './Navbar';

export default function Footer() {
  return (
    <footer className='relative bottom-0 w-full px-20 sm:px-0'>
      <FooterNav />
      <div className='max-w-screen-xl mx-auto mt-14 grid  h-20 items-center rounded-t-80  bg-skin sm:mt-0 sm:h-16 sm:rounded-none'>
        <p className='ml-24 text-sm sm:ml-0 sm:text-center'>© ONEWALK Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
