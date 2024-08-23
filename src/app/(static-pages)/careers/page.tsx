"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BriefcaseIcon,
  CakeIcon,
  LaptopIcon,
  LocateIcon,
  RocketIcon,
  ShoppingCartIcon,
  SmileIcon,
} from "lucide-react";

export default function Component() {
  const [activeTab, setActiveTab] = useState("All");
  const positions = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      description:
        "Lead the development of our cutting-edge e-commerce platform.",
      location: "Remote",
      type: "Full-time",
      category: "Developer",
    },
    {
      id: 2,
      title: "Product Designer",
      description: "Craft intuitive and visually stunning user experiences.",
      location: "San Francisco, CA",
      type: "Full-time",
      category: "Designer",
    },
    {
      id: 3,
      title: "HR Generalist",
      description: "Support our growing team with HR best practices.",
      location: "Remote",
      type: "Full-time",
      category: "HR",
    },
  ];
  const categories = [
    "All",
    "Designer",
    "Developer",
    "HR",
    "Marketing",
    "Operations",
  ];

  const filteredPositions = positions.filter(
    (position) => activeTab === "All" || position.category === activeTab,
  );

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="flex-1">
        <section className="relative py-24 px-6 md:px-10 lg:px-16">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2Fstatic-images%2Fcareers-hero.svg?alt=media&token=eab4d710-1681-4a1c-afd3-c6a00326b7dc"
            className="absolute top-0 -left-[30rem] aspect-[3/2] w-full h-full hidden lg:block"
            alt="Careers Hero"
          />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Join the ShallBuy Team
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover a rewarding career at the forefront of e-commerce
              innovation. Explore our open positions and find your perfect fit.
            </p>
            <div className="flex justify-center gap-2">
              <Button className="min-[400px]:inline-flex">
                View Open Positions
              </Button>
              <Button variant="outline" className="min-[400px]:inline-flex">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section className="py-12 px-6 md:px-10 lg:px-16 bg-muted">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Open Positions</h2>
            <div className="flex flex-col md:flex-row justify-between items-center my-8">
              <Tabs
                defaultValue={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="flex gap-2 overflow-x-auto h-full flex-wrap">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsContent value={activeTab} className="mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPositions.map((position) => (
                      <Card key={position.id}>
                        <CardHeader>
                          <CardTitle>{position.title}</CardTitle>
                          <CardDescription className="text-ellipsis truncate line-clamp-1">
                            {position.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2">
                            <LocateIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {position.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {position.type}
                            </span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button>Apply Now</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        <section className="py-12 px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Life at ShallBuy</h2>
              <p className="text-lg text-muted-foreground">
                Discover the perks and benefits of working at ShallBuy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <BriefcaseIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Competitive Salary</h3>
                  <p className="text-muted-foreground">
                    We offer market-leading compensation packages to attract and
                    retain top talent.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <RocketIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Career Growth</h3>
                  <p className="text-muted-foreground">
                    Unlock your potential with our comprehensive training and
                    development programs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <SmileIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Work-Life Balance</h3>
                  <p className="text-muted-foreground">
                    Enjoy a flexible work schedule, generous time off, and
                    wellness benefits.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <LaptopIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Remote-Friendly</h3>
                  <p className="text-muted-foreground">
                    Work from anywhere with our state-of-the-art remote
                    infrastructure.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CakeIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Team Events</h3>
                  <p className="text-muted-foreground">
                    Enjoy regular team-building activities and social events.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShoppingCartIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Employee Discounts</h3>
                  <p className="text-muted-foreground">
                    Get exclusive discounts on our products and services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
