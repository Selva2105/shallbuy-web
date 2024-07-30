import React from "react";
import LegalPages from "@/components/LegalPages";
import { policyData } from "./policyData";

const PrivacyPolicyPage = () => {
  return <LegalPages {...policyData} />;
};

export default PrivacyPolicyPage;
