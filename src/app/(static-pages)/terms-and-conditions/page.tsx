import React from "react";
import LegalPages from "@/components/LegalPages";
import { termsData } from "./termsData";

const TermsAndConditionsPage = () => {
  return (
    <LegalPages
      {...termsData}
      additionalContent={termsData.additionalContent}
    />
  );
};

export default TermsAndConditionsPage;
