import { ChevronLeftIcon } from "@/components/SVG/ChevronLeftIcon";
import { ChevronRightIcon } from "@/components/SVG/ChevronRightIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="grid md:grid-cols-[250px_1fr] gap-6 items-start max-w-screen-2xl px-4 lg:gap-12 xl:grid-cols-[300px_1fr]">
      <div className="flex flex-col gap-2 md:gap-4">
        <div className="flex items-center gap-4 md:gap-2"></div>
        <div className="flex items-center gap-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Popular Filters</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <Checkbox id="featured" />
                    <Label className="cursor-pointer" htmlFor="featured">
                      Featured
                    </Label>
                  </div>
                  <div className="flex items-center gap-4">
                    <Checkbox id="onsale" />
                    <Label className="cursor-pointer" htmlFor="onsale">
                      On Sale
                    </Label>
                  </div>
                  <div className="flex items-center gap-4">
                    <Checkbox id="instock" />
                    <Label className="cursor-pointer" htmlFor="instock">
                      In Stock
                    </Label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="py-2">
          <h2 className="font-semibold text-lg">Categories</h2>
          <ul className="grid gap-2 mt-2">
            <li>
              <Link className="underline" href="#">
                All
              </Link>
            </li>
            <li>
              <Link className="underline" href="#">
                Clothing
              </Link>
            </li>
            <li>
              <Link className="underline" href="#">
                Electronics
              </Link>
            </li>
            <li>
              <Link className="underline" href="#">
                Home & Garden
              </Link>
            </li>
            <li>
              <Link className="underline" href="#">
                Books
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-t py-4">
          <h2 className="font-semibold text-lg">Price</h2>
          <div className="grid gap-2 mt-2">
            <Checkbox id="under10" />
            <Label
              className="cursor-pointer flex items-center gap-2"
              htmlFor="under10"
            >
              Under $10
            </Label>
            <Checkbox id="1025" />
            <Label
              className="cursor-pointer flex items-center gap-2"
              htmlFor="1025"
            >
              $10 - $25
            </Label>
            <Checkbox id="2550" />
            <Label
              className="cursor-pointer flex items-center gap-2"
              htmlFor="2550"
            >
              $25 - $50
            </Label>
            <Checkbox id="50plus" />
            <Label
              className="cursor-pointer flex items-center gap-2"
              htmlFor="50plus"
            >
              $50+
            </Label>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:gap-8 p-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-start gap-4">
          <Card className="w-full md:order-2">
            <div className="grid gap-2.5">
              <img
                alt="Thumbnail"
                className="aspect-square object-cover rounded-t-lg"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="pt-0">
                <h3 className="font-semibold text-base">
                  Cotton T-shirt with Pocket
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Comfortable fit for everyday wear
                </p>
                <h3 className="font-semibold text-sm">$19.99</h3>
              </CardContent>
              <CardFooter>
                <Button size="sm">Add to cart</Button>
              </CardFooter>
            </div>
          </Card>
          <Card className="w-full md:order-2">
            <div className="grid gap-2.5">
              <img
                alt="Thumbnail"
                className="aspect-square object-cover rounded-t-lg"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="pt-0">
                <h3 className="font-semibold text-base">
                  Classic Leather Crossbody Bag
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Stylish and practical for all your essentials
                </p>
                <h3 className="font-semibold text-sm">$39.99</h3>
              </CardContent>
              <CardFooter>
                <Button size="sm">Add to cart</Button>
              </CardFooter>
            </div>
          </Card>
          <Card className="w-full md:order-2">
            <div className="grid gap-2.5">
              <img
                alt="Thumbnail"
                className="aspect-square object-cover rounded-t-lg"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="pt-0">
                <h3 className="font-semibold text-base">
                  Wireless Bluetooth Earbuds
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Crystal clear sound and comfortable fit
                </p>
                <h3 className="font-semibold text-sm">$29.99</h3>
              </CardContent>
              <CardFooter>
                <Button size="sm">Add to cart</Button>
              </CardFooter>
            </div>
          </Card>
          <Card className="w-full md:order-2">
            <div className="grid gap-2.5">
              <img
                alt="Thumbnail"
                className="aspect-square object-cover rounded-t-lg"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="pt-0">
                <h3 className="font-semibold text-base">
                  Stainless Steel Water Bottle
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Keeps your drinks cold for hours
                </p>
                <h3 className="font-semibold text-sm">$14.99</h3>
              </CardContent>
              <CardFooter>
                <Button size="sm">Add to cart</Button>
              </CardFooter>
            </div>
          </Card>
          <Card className="w-full md:order-2">
            <div className="grid gap-2.5">
              <img
                alt="Thumbnail"
                className="aspect-square object-cover rounded-t-lg"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="pt-0">
                <h3 className="font-semibold text-base">
                  Cotton T-shirt with Pocket
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Comfortable fit for everyday wear
                </p>
                <h3 className="font-semibold text-sm">$19.99</h3>
              </CardContent>
              <CardFooter>
                <Button size="sm">Add to cart</Button>
              </CardFooter>
            </div>
          </Card>
          <Card className="w-full md:order-2">
            <div className="grid gap-2.5">
              <img
                alt="Thumbnail"
                className="aspect-square object-cover rounded-t-lg"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="pt-0">
                <h3 className="font-semibold text-base">
                  Classic Leather Crossbody Bag
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Stylish and practical for all your essentials
                </p>
                <h3 className="font-semibold text-sm">$39.99</h3>
              </CardContent>
              <CardFooter>
                <Button size="sm">Add to cart</Button>
              </CardFooter>
            </div>
          </Card>
          <Card className="w-full md:order-2">
            <div className="grid gap-2.5">
              <img
                alt="Thumbnail"
                className="aspect-square object-cover rounded-t-lg"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="pt-0">
                <h3 className="font-semibold text-base">
                  Wireless Bluetooth Earbuds
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Crystal clear sound and comfortable fit
                </p>
                <h3 className="font-semibold text-sm">$29.99</h3>
              </CardContent>
              <CardFooter>
                <Button size="sm">Add to cart</Button>
              </CardFooter>
            </div>
          </Card>
          <Card className="w-full md:order-2">
            <div className="grid gap-2.5">
              <img
                alt="Thumbnail"
                className="aspect-square object-cover rounded-t-lg"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="pt-0">
                <h3 className="font-semibold text-base">
                  Stainless Steel Water Bottle
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Keeps your drinks cold for hours
                </p>
                <h3 className="font-semibold text-sm">$14.99</h3>
              </CardContent>
              <CardFooter>
                <Button size="sm">Add to cart</Button>
              </CardFooter>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button className="rounded-full" size="icon" variant="ghost">
              <ChevronLeftIcon className="w-4 h-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button className="font-medium" size="sm">
              1
            </Button>
            <Button className="font-medium" size="sm">
              2
            </Button>
            <Button className="font-medium" size="sm">
              3
            </Button>
            <Button className="font-medium" size="sm">
              4
            </Button>
            <Button className="font-medium" size="sm">
              5
            </Button>
            <Button className="rounded-full" size="icon" variant="ghost">
              <ChevronRightIcon className="w-4 h-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
