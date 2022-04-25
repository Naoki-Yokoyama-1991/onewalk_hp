import Image from 'next/image';
export default function Top() {
  return (
    <div>
      <Image src='/../public/images/main.jpg' width={100} height={100} objectFit='contain' alt='' />
    </div>
  );
}
