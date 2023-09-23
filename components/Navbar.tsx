import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full py-7 border-b-2 bg-black-100 border-black-200 text-white '>
      <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
        <Link href="/">
        <Image src="/image.jpg" alt='logo' width={40} height={40} className='rounded-full'/>
        </Link>
        <Image src="/hamburger-menu.svg" alt='hamburger' width={30} height={30} className='block md:hidden'/>
      <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
         <li className='body-text text-gradient_blue-purple !font-bold'>
            <Link href="" target='_blank'>
              WhatsApp Group
            </Link>
         </li>
         <li className='body-text !font-bold'>
            <Link href="https://haseeeb-protfolio.vercel.app" target='_blank'>
              Created By
            </Link>
         </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
