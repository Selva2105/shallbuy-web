import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col">
      <section className=" py-12 px-6 md:px-10 lg:px-16">
        <div className="relative z-10 max-w-2xl mx-auto space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Get the information you need to shop with confidence on Shallbuy.
          </p>
          <div className="flex justify-center gap-2">
            <Link
              href={"/privacy-policy"}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 min-[400px]:inline-flex"
            >
              View our policy
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                General Questions
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Here are some of the most common questions we receive about
                Shallbuy.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="general-1">
                <AccordionTrigger>What is Shallbuy?</AccordionTrigger>
                <AccordionContent>
                  Shallbuy is an e-commerce platform that offers a premium
                  shopping experience with a focus on sustainability, ethical
                  sourcing, and innovation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="general-2">
                <AccordionTrigger>
                  How does Shallbuy differ from other e-commerce sites?
                </AccordionTrigger>
                <AccordionContent>
                  Shallbuy is committed to putting people and the planet first.
                  We carefully vet our suppliers, use eco-friendly packaging,
                  and donate a portion of our profits to charitable causes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="general-3">
                <AccordionTrigger>
                  What kind of products does Shallbuy offer?
                </AccordionTrigger>
                <AccordionContent>
                  Shallbuy offers a curated selection of high-quality,
                  sustainable products across a variety of categories, including
                  clothing, home goods, and accessories.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Shipping and Returns
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Get answers to your questions about our shipping and returns
                policies.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="shipping-1">
                <AccordionTrigger>
                  How long does shipping take?
                </AccordionTrigger>
                <AccordionContent>
                  We offer standard and expedited shipping options. Standard
                  shipping typically takes 5-7 business days, while expedited
                  shipping is 2-3 business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping-2">
                <AccordionTrigger>Do you offer free shipping?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer free standard shipping on all orders over $50.
                  Expedited shipping is available for an additional fee.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping-3">
                <AccordionTrigger>
                  What is your returns policy?
                </AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day return policy on all items. If you&apos;re
                  not satisfied with your purchase, you can return it for a full
                  refund or exchange.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sustainability Questions
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Learn more about Shallbuy&apos;s commitment to sustainability
                and ethical practices.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="sustainability-1">
                <AccordionTrigger>
                  What sustainable practices does Shallbuy follow?
                </AccordionTrigger>
                <AccordionContent>
                  Shallbuy is committed to sustainability in every aspect of our
                  business. We use eco-friendly packaging, optimize our shipping
                  and logistics to reduce our carbon footprint, and carefully
                  vet our suppliers to ensure they align with our values.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sustainability-2">
                <AccordionTrigger>
                  How does Shallbuy support ethical sourcing?
                </AccordionTrigger>
                <AccordionContent>
                  We work closely with our suppliers to ensure fair labor
                  practices, safe working conditions, and social responsibility
                  throughout our supply chain. A portion of our profits are also
                  donated to organizations that support environmental
                  conservation and social justice.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sustainability-3">
                <AccordionTrigger>
                  What certifications or awards has Shallbuy received for its
                  sustainability efforts?
                </AccordionTrigger>
                <AccordionContent>
                  Shallbuy has been recognized with numerous industry awards and
                  certifications for our commitment to sustainability and
                  ethical practices, including the B Corp certification, the
                  Sustainable Packaging Coalition&apos;s &quot;How2Recycle&quot;
                  label, and the LEED certification for our headquarters.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2Fstatic-images%2Ffaq-2.svg?alt=media&token=62147634-ff30-43c2-9718-387f4d40b497"
              width="800"
              height="600"
              alt="Shallbuy Sustainability FAQ"
              className="mx-auto aspect-video w-full object-cover object-center hidden lg:block"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2Fstatic-images%2Ffaq-3.svg?alt=media&token=e2cc9ff4-cc5a-49f3-9e45-b94ab1b2ca15"
              width="800"
              height="600"
              alt="Shallbuy Customer Service FAQ"
              className="mx-auto aspect-video w-full object-contain object-center hidden lg:block"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Customer Service
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Get answers to your questions about our customer service and
                support.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="customer-service-1">
                <AccordionTrigger>
                  How can I contact customer service?
                </AccordionTrigger>
                <AccordionContent>
                  You can reach our customer service team by phone, email, or
                  through our online chat. We&apos;re available Monday through
                  Friday, 9am to 5pm EST.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="customer-service-2">
                <AccordionTrigger>
                  What is your return and exchange policy?
                </AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day return policy on all items. If you&apos;re
                  not satisfied with your purchase, you can return it for a full
                  refund or exchange.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="customer-service-3">
                <AccordionTrigger>
                  Any warranty or guarantee on your products?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 1-year warranty on all of our products. If you
                  experience any issues with your purchase, please contact our
                  customer service team and we&apos;ll be happy to assist you.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
