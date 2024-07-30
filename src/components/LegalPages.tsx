import { LegalPageProps } from "@/types";
import React from "react";

const LegalPages: React.FC<LegalPageProps> = ({
  title,
  subtitle,
  sections,
  additionalContent,
}) => {
  return (
    <div className="bg-background text-foreground">
      <section className="py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              {title}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              {subtitle}
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-4 md:py-6 lg:py-10">
        <div className="container space-y-12">
          <div className="grid mx-auto gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {sections.map((section, index) => (
              <div key={index} className="grid gap-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <section.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">{section.title}</h3>
                </div>
                <p className="text-muted-foreground">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-4 md:py-6 lg:py-10 ">
        <div className="container space-y-8">
          {additionalContent.map((item, index) => (
            <div key={index} className="mx-auto">
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="text-muted-foreground">{item.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LegalPages;
