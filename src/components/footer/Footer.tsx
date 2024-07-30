import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { MountainIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

interface FooterLinkProps {
  label: string;
  links: { label: string; href: string; icon?: React.ReactNode }[];
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, links }) => {
  return (
    <div className="grid gap-2">
      <h3 className="font-semibold">{label}</h3>
      {links.map((linkItem) => (
        <Link
          key={linkItem.href}
          href={linkItem.href}
          className="text-sm hover:underline flex items-center gap-2"
          prefetch={false}
        >
          {linkItem.icon}
          <span>{linkItem.label}</span>
        </Link>
      ))}
    </div>
  );
};

const Footer: React.FC = () => {
  const footerLinks: FooterLinkProps[] = [
    {
      label: "Popular Categories",
      links: [
        { label: "Electronics", href: "/electronics" },
        { label: "Home Garden", href: "/home-garden" },
        { label: "Apparel", href: "/apparel" },
        { label: "Beauty", href: "/beauty" },
        { label: "Toys", href: "/toys" },
        { label: "Sports", href: "/sports" },
      ],
    },
    {
      label: "Quick Links",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "FAQs", href: "/faqs" },
        { label: "Shipping", href: "/shipping" },
        { label: "Returns", href: "/returns" },
      ],
    },
    {
      label: "Follow Us",
      links: [
        {
          label: "Twitter",
          href: "https://twitter.com",
          icon: <TwitterLogoIcon className="h-5 w-5" />,
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com",
          icon: <LinkedInLogoIcon className="h-5 w-5" />,
        },
        {
          label: "Instagram",
          href: "https://instagram.com",
          icon: <InstagramLogoIcon className="h-5 w-5" />,
        },
      ],
    },
  ];

  return (
    <footer className="bg-muted py-8 md:py-12">
      <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-lg"
            prefetch={false}
          >
            <MountainIcon className="h-6 w-6" />
            <span>Shallbuy Store</span>
          </Link>
          <p className="text-muted-foreground">
            Discover the best products for your home and lifestyle.
          </p>
        </div>
        {footerLinks.map((section) => (
          <FooterLink key={section.label} {...section} />
        ))}
      </div>
      <div className="container mt-8 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Shallbuy Store. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="/privacy-policy"
            className="text-sm hover:underline"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-sm hover:underline"
            prefetch={false}
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
