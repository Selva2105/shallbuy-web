"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  BriefcaseIcon,
  CakeIcon,
  LaptopIcon,
  LocateIcon,
  RocketIcon,
  ShoppingCartIcon,
  SmileIcon,
} from "lucide-react";
import { getJobs } from "../static-service/staticService";
import { useRouter } from "next/navigation";
import { Job } from "@/types/static";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { teamMembers } from "@/constants/data";

interface JobCardProps {
  position: Job;
  // eslint-disable-next-line no-unused-vars
  onApply: (id: string) => void;
}

const JobCard = ({ position, onApply }: JobCardProps) => (
  <Card key={position.id}>
    <CardHeader>
      <CardTitle>{position.jobHeading}</CardTitle>
      <CardDescription className="text-ellipsis line-clamp-2">
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
          {position.jobType}
        </span>
      </div>
    </CardContent>
    <CardFooter>
      <Button onClick={() => onApply(position.id)}>Apply Now</Button>
    </CardFooter>
  </Card>
);

export default function Component() {
  const [activeTab, setActiveTab] = useState("All");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const positionsPerPage = 6;
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await getJobs();
        if (response.status === "success") {
          setJobs(response.data);
        } else {
          console.error("Failed to fetch jobs:", response.message);
          setError("Some error occurred. Please try again later :(");
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError("Some error occurred. Please try again later :(");
      }
      setLoading(false);
    };
    fetchJobs();
  }, []);
  const categories = [
    "All",
    "Design",
    "Developer",
    "Management",
    "Customer_Success",
    "Marketing",
    "Internship",
  ];

  const filteredPositions = useMemo(
    () =>
      jobs.filter(
        (position) => activeTab === "All" || position.jobGroup === activeTab,
      ),
    [jobs, activeTab],
  );

  const totalPages = Math.ceil(filteredPositions.length / positionsPerPage);

  const currentPositions = useMemo(() => {
    const start = (currentPage - 1) * positionsPerPage;
    return filteredPositions.slice(start, start + positionsPerPage);
  }, [filteredPositions, currentPage]);

  const handlePageChange = useCallback(
    (jobId: string) => {
      const jobExists = jobs.some((job) => job.id === jobId);
      if (!jobExists) {
        console.error("Job ID not found:", jobId);
        return;
      }
      router.push(`/careers/apply/${jobId}`);
    },
    [jobs, router],
  );

  const handleTabChange = useCallback((newTab: string) => {
    setActiveTab(newTab);
    setCurrentPage(1);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="flex-1">
        <section className="py-24 px-6 md:px-10 lg:px-16">
          <div className="z-10 max-w-2xl mx-auto space-y-4 text-center">
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet Our Team
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of dedicated professionals is the driving force
                  behind ShallBuy`s success. Get to know the key members who
                  make it all happen.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center justify-center space-y-2"
                >
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={member.profile} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 px-6 md:px-10 lg:px-16 bg-muted">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Open Positions</h2>
            <div className="flex flex-col md:flex-row justify-between items-center my-8">
              <Tabs
                defaultValue={activeTab}
                onValueChange={handleTabChange}
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
                  {loading ? (
                    <div className="text-center text-base text-muted-foreground">
                      Loading jobs...
                    </div>
                  ) : error ? (
                    <div className="text-center text-base text-muted-foreground">
                      {error}
                    </div>
                  ) : currentPositions.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {currentPositions.map((position) => (
                        <JobCard
                          key={position.id}
                          position={position}
                          onApply={handlePageChange}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-base text-muted-foreground">
                      No jobs available currently.
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
            <div className="">
              <Pagination className="justify-end">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className="cursor-pointer"
                      onClick={handlePrevious}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i} className="cursor-ponter">
                      <PaginationLink onClick={() => setCurrentPage(i + 1)}>
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      className="cursor-pointer"
                      onClick={handleNext}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
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
