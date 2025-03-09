// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaGithub, FaFacebook, FaTwitter} from 'react-icons/fa'

interface FooterLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface FooterProps {
  companyName?: string;
  description?: string;
  navigation?: {
    main?: FooterLink[];
    social?: SocialLink[];
  };
  logo?: string;
  copyRightYear?: number;
}

const defaultNavigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/_hilyo_',
      icon: (props:any) => (
        <FaInstagram></FaInstagram>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://x.com/_hilyo_',
      icon: (props:any) => (
        <FaTwitter></FaTwitter>
        
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/devdatt21/HILYO_web',
      icon: (props:any) => (
        <FaGithub></FaGithub>
      ),
    }
  ],
};

const Footer: React.FC<FooterProps> = ({
  companyName = '',
  description = 'Have It Like Your Own',
  navigation = defaultNavigation,
  logo = '/HILYO__3_nobg.png',
  copyRightYear = 2025,
}) => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            {logo && (
              <div className="flex items-center">
                <Image
                  src={logo}
                  alt={`${companyName} Logo`}
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="ml-3 text-xl font-bold text-white">{companyName}</span>
              </div>
            )}
          </div>
          <p className="text-base text-gray-400 max-w-md text-center md:text-right">
            {description}
          </p>
        </div>
        
        <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          {navigation.main?.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.href}>
                <span className="text-base text-gray-400 hover:text-gray-300 cursor-pointer">
                  {item.name}
                </span>
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social?.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300" target='_blank'>
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {copyRightYear} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;