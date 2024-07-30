import {
  BookOpenIcon,
  ScaleIcon,
  ShieldIcon,
  UserIcon,
  GlobeIcon,
  AlertTriangleIcon,
} from "lucide-react";
import { LegalPageProps } from "@/types";
import Link from "next/link";

export const termsData: LegalPageProps = {
  title: "Terms and Conditions",
  subtitle:
    "Please read these terms and conditions carefully before using our service.",
  sections: [
    {
      icon: BookOpenIcon,
      title: "Acceptance of Terms",
      content:
        "By accessing or using our service, you agree to be bound by these Terms and Conditions and our Privacy Policy.",
    },
    {
      icon: UserIcon,
      title: "User Responsibilities",
      content:
        "You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.",
    },
    {
      icon: ScaleIcon,
      title: "Intellectual Property",
      content:
        "All content, features, and functionality of our service are owned by us and are protected by international copyright, trademark, and other intellectual property laws.",
    },
    {
      icon: ShieldIcon,
      title: "Limitation of Liability",
      content:
        "We shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our service.",
    },
    {
      icon: GlobeIcon,
      title: "Governing Law",
      content:
        "These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.",
    },
    {
      icon: AlertTriangleIcon,
      title: "Termination",
      content:
        "We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever.",
    },
  ],
  additionalContent: [
    {
      title: "Changes to Terms",
      content:
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page.",
    },
    {
      title: "Contact Us",
      content: (
        <>
          If you have any questions about these Terms, please contact us at{" "}
          <Link
            href="mailto:legal@shallbuy.com"
            className="text-font-bold underline underline-offset-1"
          >
            <span>legal@shallbuy.com</span>
          </Link>{" "}
          or through the contact form on our website.
        </>
      ),
    },
  ],
};
