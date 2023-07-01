import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';
import AuthProviders from './AuthProviders';


function Navbar() {
  const session = {}
  return (
    <nav className='flexBetween navbar'>
      <div className='felx-1 flex-start gap-10'>
        <Link href='/'>
          <Image 
            src="/logo.svg"
            alt=''
            width={115}
            height={40}
          />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {
            NavLinks.map((link) =>(
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))
          }
        </ul>
      </div>
      <div className='flexCenter gap-4'>
          {session ?  (
            <>
            userPhoto

            <Link href='/'>
              Share work
            </Link>
            </>
          ) : (
            <AuthProviders />
          )}
      </div>
    </nav>
  )
}

export default Navbar