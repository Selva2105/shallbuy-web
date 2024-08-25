import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  CloudLightningIcon,
  CompassIcon,
  HeadphonesIcon,
  RepeatIcon,
  ShieldCheckIcon,
  SmileIcon,
  ThumbsUpIcon,
  TruckIcon,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary-foreground">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
                About Shallbuy
              </h1>
              <p className="max-w-[700px] text-primary-foreground/80 md:text-xl">
                At Shallbuy, we&apos;re on a mission to redefine the e-commerce
                experience. Our passion for innovation, sustainability, and
                ethical sourcing drives us to create a premium shopping platform
                that puts people and the planet first.
              </p>
            </div>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2Fstatic-images%2Fabout-us-1.png?alt=media&token=0441e314-a7e0-48cc-b491-a82ee5d84e37"
            width="800"
            height="600"
            alt="Shallbuy Founders"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Mission
            </h2>
            <p className="text-muted-foreground md:text-xl">
              At the heart of ShallBuy is a commitment to providing our
              customers with an exceptional shopping experience. We believe that
              everyone deserves access to high-quality products that enhance
              their lives, and we strive to make that a reality through our
              curated selection and personalized service.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary p-3">
                  <CompassIcon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Explore</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary p-3">
                  <TruckIcon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Deliver</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary p-3">
                  <SmileIcon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Delight</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary p-3">
                  <RepeatIcon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Repeat</h3>
              </div>
            </div>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2Fstatic-images%2Fabout-us-2.png?alt=media&token=a0d4c20e-5141-4811-a692-e595d4aa7ec0"
            width={600}
            height={400}
            alt="ShallBuy Values"
            className="aspect-[3/2] w-full overflow-hidden rounded-xl object-cover"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2Fstatic-images%2FGroup%206.svg?alt=media&token=2b1de701-43cf-46f8-9e35-890206d00f08"
            width={600}
            height={400}
            alt="ShallBuy Unique Selling Points"
            className="aspect-[3/2] w-full overflow-hidden rounded-xl object-cover"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground md:text-xl">
              At ShallBuy, we pride ourselves on our commitment to quality,
              customer service, and innovation. Our unique selling points
              include:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary p-3">
                  <ThumbsUpIcon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Curated Selection</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary p-3">
                  <ShieldCheckIcon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Quality Assurance</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary p-3">
                  <HeadphonesIcon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Exceptional Support</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary p-3">
                  <CloudLightningIcon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Fast Shipping</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Don&apos;t just take our word for it - hear from our satisfied
              customers.
            </p>
            <div className="grid gap-4">
              <div className="rounded-lg bg-background p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Customer 1" />
                    <AvatarFallback>C1</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">Jane Doe</h4>
                    <p className="text-muted-foreground">Verified Buyer</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  &quot;I&apos;ve been shopping with ShallBuy for years and
                  I&apos;m always\n impressed by the quality of their products
                  and the\n exceptional customer service. Highly
                  recommended!&quot;
                </p>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Customer 2" />
                    <AvatarFallback>C2</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">John Smith</h4>
                    <p className="text-muted-foreground">Verified Buyer</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  &quot;I&apos;m always excited to see what new products
                  ShallBuy has\n added to their collection. The variety and
                  attention to\n detail is unmatched.&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              By the Numbers
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Here are some key stats that showcase our commitment to
              excellence.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-background p-6 shadow-lg">
                <h3 className="text-4xl font-bold">98%</h3>
                <p className="text-muted-foreground">Customer Satisfaction</p>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-lg">
                <h3 className="text-4xl font-bold">24/7</h3>
                <p className="text-muted-foreground">Customer Support</p>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-lg">
                <h3 className="text-4xl font-bold">99.9%</h3>
                <p className="text-muted-foreground">Uptime Guarantee</p>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-lg">
                <h3 className="text-4xl font-bold">2-Day</h3>
                <p className="text-muted-foreground">Shipping on Most Items</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
