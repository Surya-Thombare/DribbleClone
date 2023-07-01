import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type columnProps = {
  title: string;
  links: Array<string>
}

const FooterColumn = ({title, links}: columnProps) => (
  <div className='footer_column'>
    <h4 className='font-semibold '>
      {title}
    </h4>
    <ul className="flex flex-col gap-2 font-normal">
            {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
        </ul>
  </div>
)

function Footer() {
  return (
    <footer className='flextStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
          <Image
            src='/logo-purple.svg'
            alt=''
            width={115}
            height={38}
          />
          <p className='text-start text-sm font-normal nt-5 max-w-xs'>
              Dribble is the world's leading community for cretuives to share, grow and get hired.
          </p>
        </div>
        <div className='flex flex-wrap gap-12'>
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer