import Image from 'next/image';
import Link from 'next/link';
import {
  Email,
  Phone,
  Home,
  Facebook,
  Twitter,
  LinkedIn,
  YouTube,
  Send,
} from '@mui/icons-material';
import { TextField, Button } from '@mui/material';
import { navigation, companyInfo } from '@/utils/layouts';
import { logo } from '@/assets/layouts';
import { img10, img9 } from '@/assets/Home';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-300 to-blue-500 text-white py-16">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <Link href="/">
              <Image src={logo.src} alt="MYJOB" width={140} height={40} className="h-12 w-auto" />
            </Link>
            <p className="text-sm leading-6">
              Discover top-notch services tailored to your needs. Stay updated with our latest insights.
            </p>
            <div className="space-y-4">
              <ContactInfo Icon={Phone} label={companyInfo.phone} bgColor="bg-white bg-opacity-20" />
              <ContactInfo Icon={Home} label={companyInfo.address} bgColor="bg-white bg-opacity-20" />
              <ContactInfo Icon={Email} label={companyInfo.email} bgColor="bg-white bg-opacity-20" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid gap-8 lg:col-span-3 md:grid-cols-2 lg:grid-cols-4">
            <FooterSection title="Company" links={navigation.company} />
            <FooterSection title="Quick Links" links={navigation.quickLinks} />
            <FooterSection title="Support" links={navigation.support} />
            
            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Newsletter
              </h3>
              <p className="mt-4 text-sm leading-6">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="w-56 mt-6 flex items-center gap-x-3">
                <TextField
                  type="email"
                  required
                  fullWidth
                  size="small"
                  placeholder="Your Email"
                />
                <Button type="submit" variant="contained" size="small">
                  <Send fontSize="small" />
                </Button>
              </form>
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900">
                  Download
                </h4>
                <div className="mt-4 flex gap-4">
                  <AppDownloadLink
                    href="#"
                    src={img10.src}
                    alt="Google Play"
                  />
                  <AppDownloadLink
                    href="#"
                    src={img9.src}
                    alt="App Store"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-300 pt-8 text-center">
          <p className="text-sm">&copy; {currentYear} MYJOB. All rights reserved.</p>
          <SocialIcons links={navigation.social} />
        </div>
      </div>
    </footer>
  );
}

/** Helper Components */
interface ContactInfoProps {
  Icon: React.ElementType;
  label: string;
  bgColor: string;
}

const ContactInfo = ({ Icon, label, bgColor }: ContactInfoProps) => (
  <div className="flex items-center gap-x-3">
    <div className={`rounded-full p-2 ${bgColor}`}>
      <Icon className="text-white" fontSize="small" />
    </div>
    <span className="text-sm">{label}</span>
  </div>
);

interface FooterSectionProps {
  title: string;
  links: { name: string; href: string }[];
}

const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <ul className="mt-2 space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href} className="text-sm hover:text-blue-300 transition">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

interface AppDownloadLinkProps {
  href: string;
  src: string;
  alt: string;
}

const AppDownloadLink = ({ href, src, alt }: AppDownloadLinkProps) => (
  <Link href={href}>
    <Image src={src} alt={alt} width={140} height={42} className="h-10 w-auto" />
  </Link>
);

interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

const SocialIcons = ({ links }: { links: SocialLink[] }) => (
  <div className="mt-4 flex justify-center gap-6">
    {links.map((link) => (
      <Link key={link.name} href={link.href} className="text-white hover:text-gray-300 transition transform hover:scale-110">
        {link.icon === 'facebook' && <Facebook fontSize="large" />}
        {link.icon === 'twitter' && <Twitter fontSize="large" />}
        {link.icon === 'linkedin' && <LinkedIn fontSize="large" />}
        {link.icon === 'youtube' && <YouTube fontSize="large" />}
      </Link>
    ))}
  </div>
);
