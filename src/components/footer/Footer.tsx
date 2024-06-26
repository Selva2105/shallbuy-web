import Link from "next/link";
import * as React from "react";

interface FooterLinkProps {
  label: string;
  links: { label: string; href: string }[];
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, links }) => {
  return (
    <div className="flex flex-col text-sm text-black space-y-4">
      <div className="text-base font-semibold">{label}</div>
      {links.map((linkItem) => (
        <Link
          key={linkItem.href}
          href={linkItem.href}
          className={` ${label === "Use Cases" ? "max-md:mr-1.5" : ""} text-sm font-normal`}
        >
          {linkItem.label}
        </Link>
      ))}
    </div>
  );
};

const Footer: React.FC = () => {
  const footerLinks: FooterLinkProps[] = [
    {
      label: "Product",
      links: [
        { label: "Landing Page", href: "landing-page" },
        { label: "Popup Builder", href: "popup-builder" },
        { label: "Web-design", href: "web-design" },
        { label: "Content", href: "content" },
        { label: "Integrations", href: "integrations" },
      ],
    },
    {
      label: "Use Cases",
      links: [
        { label: "Web-designers", href: "web-designers" },
        { label: "Marketers", href: "marketers" },
        { label: "Small Business", href: "small-business" },
        { label: "Website Builder", href: "website-builder" },
      ],
    },
    {
      label: "Resources",
      links: [
        { label: "Academy", href: "academy" },
        { label: "Blog", href: "blog" },
        { label: "Themes", href: "themes" },
        { label: "Hosting", href: "hosting" },
        { label: "Developers", href: "developers" },
        { label: "Support", href: "support" },
      ],
    },
    {
      label: "Company",
      links: [
        { label: "About Us", href: "about-us" },
        { label: "Careers", href: "careers" },
        { label: "FAQs", href: "faqs" },
        { label: "Teams", href: "teams" },
        { label: "Contact Us", href: "contact-us" },
      ],
    },
  ];

  return (
    <footer className="flex flex-col items-center p-4 bg-white max-md:px-5">
      <div className="flex gap-5 justify-between items-start w-full max-w-[1154px] max-md:flex-wrap max-md:max-w-full">
        {footerLinks.map((footerLink) => (
          <FooterLink
            key={footerLink.label}
            label={footerLink.label}
            links={footerLink.links}
          />
        ))}
        <div className="flex flex-col">
          <div className="text-base font-semibold text-black">Contact</div>
          <div className="flex gap-3.5 mt-7 text-sm text-black">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ec737b3fc649fdbc8500891631269237558ebbf7dee6866e5dd2dfbed176868?apiKey=a95dbe82fd5c4d85bf1124a63df54257&"
              alt="Location icon"
              className="shrink-0 self-start w-5 aspect-square"
            />
            <div className="text-sm">
              Wisconsin Ave, Suite 700 <br /> Chevy Chase, Maryland 20815
            </div>
          </div>
          <div className="flex gap-3.5 mt-5 text-sm text-black whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a2dd27db5dfb7eb5601f660573664e24fc88066bd0e8dff8c4e6c7f7ae57e8c?apiKey=a95dbe82fd5c4d85bf1124a63df54257&"
              alt="Email icon"
              className="shrink-0 w-5 aspect-square"
            />
            <div className="text-sm flex-auto my-auto">support@figma.com</div>
          </div>
          <div className="mt-5 text-base font-semibold text-black">
            Follow us
          </div>
          <div className="flex gap-4 mt-5 hover:cursor-pointer">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ec9d91dc772780283f93e43c9ae36837f06710f99f4cf258c5a84b5212d7488?apiKey=a95dbe82fd5c4d85bf1124a63df54257&"
              alt="Twitter icon"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f3cbb9ddc6831874a2c55319e22f9c98ffd33b2c48bebed74d6f33cb42a05d0?apiKey=a95dbe82fd5c4d85bf1124a63df54257&"
              alt="Facebook icon"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a4ff04d6c12d1cbb20993143d260ebf19a042759bc0b418c68f23c6f56f2f19?apiKey=a95dbe82fd5c4d85bf1124a63df54257&"
              alt="Instagram icon"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4cca36deb9db6a757908bef212194f8cab271312973a4e8db5cb21d7a5b60bf?apiKey=a95dbe82fd5c4d85bf1124a63df54257&"
              alt="LinkedIn icon"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c03a805ea23f0cc5b75d4300051a4f5b70dfb02d7ed67b0dd6dde83925b1110a?apiKey=a95dbe82fd5c4d85bf1124a63df54257&"
              alt="YouTube icon"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc14a3eb304c0b35fd2259f428a2b6b12472b4019b2548615f72c694b063db19?apiKey=a95dbe82fd5c4d85bf1124a63df54257&"
              alt="Pinterest icon"
              className="shrink-0 w-6 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="shrink-0 self-end mt-7 max-w-full h-px bg-gray-200 border border-solid w-[1206px] max-md:mr-2" />
      <div className="flex gap-5 justify-between mt-8 text-sm text-black max-md:flex-wrap hover:cursor-pointer">
        <Link href={"#"} className="hover:underline underline-offset-2">
          Privacy Policy
        </Link>
        <Link href={"#"} className="hover:underline underline-offset-2">
          Terms of Use
        </Link>
        <Link href={"#"} className="hover:underline underline-offset-2">
          Sales and Refunds
        </Link>
        <Link href={"#"} className="hover:underline underline-offset-2">
          Legal
        </Link>
        <Link href={"#"} className="hover:underline underline-offset-2">
          Site Map
        </Link>
      </div>
      <div className="mt-8 text-xs font-light text-black">
        © 2024 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
