"use client";

import { useEffect, useState } from "react";
import { Job } from "@/types/static";
import {
  applyJob,
  getJobsByID,
} from "@/app/(static-pages)/static-service/staticService";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import JobApplicationForm from "@/components/forms/application-form/ApplicationForm";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email(),
  dateOfBirth: z.date(),
  contact: z
    .string()
    .min(10, { message: "Enter a valid Phone number" })
    .max(10, { message: "Enter a valid Phone number" }),
  yearOfGraduation: z
    .string()
    .min(4, "Year Of Graduation is required")
    .max(4, "Year Of Graduation is required"),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]),
  currentCTC: z.enum([
    "BELOW_5L",
    "FROM_5L_TO_10L",
    "FROM_10L_TO_20L",
    "ABOVE_20L",
  ]),
  expectedCTC: z.enum([
    "BELOW_5L",
    "FROM_5L_TO_10L",
    "FROM_10L_TO_20L",
    "ABOVE_20L",
  ]),
  experienceLevel: z.enum(["ENTRY", "JUNIOR", "MID", "SENIOR", "EXPERT"]),
  noticePeriod: z
    .string()
    .min(1, { message: "Notice Period is required" })
    .regex(/^\d+$/, "Notice Period must be numeric"),
  currentLocation: z
    .string()
    .min(1, { message: "Current Location is required" }),
  preferredLocation: z
    .string()
    .min(1, { message: "Preferred Location is required" }),
  currentEmployer: z
    .string()
    .min(1, { message: "Current Employer is required" }),
  skillSet: z
    .array(z.string())
    .min(1, { message: "At least one skill is required" }),
  pdf: z.instanceof(File).refine((file) => file.type === "application/pdf", {
    message: "Only PDF files are accepted",
  }),
});

export type ApplyForm = z.infer<typeof formSchema> & { jobId: string };

export default function Component({ params }: { params: { slug: string } }) {
  const [job, setJob] = useState<Job>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await getJobsByID(params.slug);
        if (response.status === "success") {
          setJob(response.data);
        } else {
          toast({
            title: "Error",
            description: "Failed to load job details.",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "An unexpected error occurred.",
          variant: "destructive",
        });
      }
    };

    fetchJob();
  }, [params.slug]);

  const form = useForm<ApplyForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      yearOfGraduation: "",
      noticePeriod: "",
      currentLocation: "",
      preferredLocation: "",
      currentEmployer: "",
      skillSet: [],
    },
  });

  if (!job) {
    return (
      <div className="h-screen grid place-content-center text-muted-foreground text-lg font-semibold">
        Loading job details...
      </div>
    );
  }

  const onSubmit = async (values: ApplyForm) => {
    setIsLoading(true);
    try {
      const response = await applyJob({ ...values, jobId: job.id });
      if (response.status === "success") {
        toast({
          title: "Applied successfully!",
          description: "We'll get back to you soon.",
        });
        router.push("/careers");
      } else {
        toast({
          title: "Failed",
          description: "Failed to apply. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to apply. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <JobApplicationForm
      job={job}
      form={form}
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  );
}
