import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Image src="/mobilelogo.svg" alt='Mobile Logo' className='block md:hidden' width={14} height={16} />
      <Image src="/desktoplogo.svg" alt='Desktop Logo' className='hidden md:block md:w-32 lg:w-full' width={160} height={40} />
    </div>
  );
}
