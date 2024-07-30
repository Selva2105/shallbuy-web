import { LegalPageProps } from "@/types";
import {
  ArrowRightIcon,
  DatabaseIcon,
  LockIcon,
  PowerIcon,
  ShareIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";

export const policyData: LegalPageProps = {
  title: "Privacy Policy",
  subtitle:
    "At our company, we are committed to protecting your privacy and ensuring the security of your personal information.",
  sections: [
    {
      icon: DatabaseIcon,
      title: "Data Collection",
      content:
        "We collect personal information such as your name, email, and usage data to provide and improve our services.",
    },
    {
      icon: UsersIcon,
      title: "Data Usage",
      content:
        "We use your data to personalize your experience, improve our products, and provide customer support.",
    },
    {
      icon: ShareIcon,
      title: "Data Sharing",
      content:
        "We may share your data with trusted third-party service providers to assist in delivering our services.",
    },
    {
      icon: LockIcon,
      title: "Data Security",
      content:
        "We implement robust security measures to protect your data from unauthorized access, loss, or misuse.",
    },
    {
      icon: ArrowRightIcon,
      title: "User Rights",
      content:
        "You have the right to access, correct, or delete your personal data, and to opt-out of certain data processing activities.",
    },
    {
      icon: PowerIcon,
      title: "Additional Resources",
      content:
        "Explore our privacy FAQs, download our privacy policy, and contact us with any questions or concerns.",
    },
  ],
  additionalContent: [
    {
      title: "Updates to Our Privacy Policy",
      content:
        "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 'Last updated' date at the top of this policy.",
    },
    {
      title: "Contact Us",
      content: (
        <>
          If you have any questions about this privacy policy, please contact us
          at{" "}
          <Link
            href="mailto:privacy@shallbuy.com"
            className="text-font-bold underline underline-offset-1"
          >
            privacy@shallbuy.com
          </Link>{" "}
          or through the contact form on our website.
        </>
      ),
    },
  ],
};
