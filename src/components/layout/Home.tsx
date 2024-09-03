import React, { Suspense } from "react";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";
import { categories, HomeReviews } from "@/constants/data";
import dynamic from "next/dynamic";
import Marquee from "../magicui/marquee";

const CategoryLink = dynamic(() => import("@/components/CaregoryCard"), {
  loading: () => <p>Loading...</p>,
});

export default function PageHome() {
  return (
    <section className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 grid place-items-center">
          <div className="space-y-4 flex justify-center items-center flex-col">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              New Collection
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Elevate Your Style
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
              Discover our latest collection of high-quality, sustainable
              fashion designed to make you look and feel your best.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Featured Products
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Discover Our Curated Collection
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our carefully selected range of high-quality products
                that embody style, comfort, and sustainability.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Product 1"
                className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center"
                loading="lazy" // Enable lazy loading
              />
              <div className="text-sm font-medium leading-none group-hover:underline">
                Sustainable T-Shirt
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Crafted from organic cotton, this t-shirt is both comfortable
                and eco-friendly.
              </div>
              <div className="text-sm font-medium text-primary">$29.99</div>
            </div>
            <div className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Product 2"
                className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center"
                loading="lazy" // Enable lazy loading
              />
              <div className="text-sm font-medium leading-none group-hover:underline">
                Minimalist Dress
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                A timeless, versatile dress that can be dressed up or down.
              </div>
              <div className="text-sm font-medium text-primary">$59.99</div>
            </div>
            <div className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Product 3"
                className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center"
                loading="lazy" // Enable lazy loading
              />
              <div className="text-sm font-medium leading-none group-hover:underline">
                Leather Backpack
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                A durable and stylish backpack made from high-quality leather.
              </div>
              <div className="text-sm font-medium text-primary">$99.99</div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Shop by Category
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore Our Curated Categories
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse our expertly selected categories to find the perfect
                items for your style and needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {categories.map((category) => (
              <CategoryLink
                key={category.categoryName}
                href={category.href}
                imgSrc={category.imgSrc}
                altText={category.altText}
                categoryName={category.categoryName}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Customer Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Our Customers Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied customers about their experience with
                our products and services.
              </p>
            </div>
          </div>
          <div className="gap-6 py-12 ">
            <Suspense fallback={<div>Loading...</div>}>
              <Marquee pauseOnHover className="[--duration:20s]">
                {HomeReviews.map((review, idx) => (
                  <div
                    className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 max-w-sm"
                    key={idx}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src={review.userProfile} />
                          <AvatarFallback>{review.userAltText}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <div className="text-sm font-medium leading-none">
                            {review.userName}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Verified Customer
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <div className="flex items-center gap-1 text-yellow-500">
                          {Array.from({ length: 5 }, (_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "fill-yellow-500" : ""}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="line-clamp-3 text-sm leading-snug text-muted-foreground">
                      {review.reviewMsg}
                    </div>
                  </div>
                ))}
              </Marquee>
            </Suspense>
          </div>
        </div>
      </section>
    </section>
  );
}
