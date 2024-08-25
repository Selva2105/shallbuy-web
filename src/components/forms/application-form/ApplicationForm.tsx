"use client";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/multiSelect";
import { Job } from "@/types/static";
import { UseFormReturn } from "react-hook-form";
import { ApplyForm } from "@/app/(static-pages)/careers/apply/[slug]/page";
import { jobSkills } from "@/app/(static-pages)/careers/data";
import {
  BriefcaseIcon,
  CalendarIcon,
  LocateIcon,
  ChevronLeft,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface JobApplicationFormProps {
  job: Job;
  form: UseFormReturn<ApplyForm>;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: ApplyForm) => void;
  isLoading: boolean;
}

function JobApplicationForm({
  job,
  form,
  onSubmit,
  isLoading,
}: JobApplicationFormProps) {
  const skillsOptions = jobSkills[job.jobGroup as keyof typeof jobSkills] || [];
  const router = useRouter();
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-12 md:py-16 lg:py-20">
        <ChevronLeft className="cursor-pointer" onClick={() => router.back()} />
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex flex-col items-start gap-4">
              <Badge variant="default">{job.jobGroup}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                {job.jobHeading}
              </h1>
            </div>
            <div className="space-y-4">
              <p className="text-base text-muted-foreground">
                {job.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-bold">
                    Key Responsibilities:
                  </h2>
                  <ul className="space-y-2 pl-5 text-md list-outside list-decimal">
                    {job.requiredQualifications.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-bold">
                    Required Qualifications:
                  </h2>
                  <ul className="space-y-2 pl-5 text-md list-outside list-decimal">
                    {job.requiredQualifications.map((qual, index) => (
                      <li key={index}>{qual}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">Job Highlights:</h2>
              <ul className="space-y-2 pl-5 list-decimal text-md">
                <li>Competitive salary and benefits package</li>
                <li>Flexible work arrangements, including remote options</li>
                <li>Opportunities for professional development and growth</li>
                <li>Collaborative and supportive team environment</li>
                <li>
                  Modern, well-equipped office space in a convenient location
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">Job Details:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <LocateIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {job.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {job.jobType}
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-4 !mt-8">
              <h2 className="text-xl md:text-2xl font-bold">Apply Now</h2>
              <Form {...form}>
                <form
                  className="space-y-4"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="johndoe@gmail.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of Birth</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full justify-between text-left font-normal",
                                    !field.value && "text-muted-foreground",
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "P")
                                  ) : (
                                    <span>MM/DD/YYYY</span>
                                  )}
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact</FormLabel>
                          <FormControl>
                            <Input placeholder="9876504321" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="MALE">Male</SelectItem>
                              <SelectItem value="FEMALE">Female</SelectItem>
                              <SelectItem value="OTHER">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="experienceLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Experience" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ENTRY">Entry</SelectItem>
                              <SelectItem value="JUNIOR">Junior</SelectItem>
                              <SelectItem value="MID">Mid</SelectItem>
                              <SelectItem value="SENIOR">Senior</SelectItem>
                              <SelectItem value="EXPERT">Expert</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="expectedCTC"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expected CTC</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Expected CTC" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="BELOW_5L">Below 5L</SelectItem>
                              <SelectItem value="FROM_5L_TO_10L">
                                From 5L to 10L
                              </SelectItem>
                              <SelectItem value="FROM_10L_TO_20L">
                                From 10L to 20L
                              </SelectItem>
                              <SelectItem value="ABOVE_20L">
                                Above 20L
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="currentCTC"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current CTC</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Current CTC" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="BELOW_5L">Below 5L</SelectItem>
                              <SelectItem value="FROM_5L_TO_10L">
                                From 5L to 10L
                              </SelectItem>
                              <SelectItem value="FROM_10L_TO_20L">
                                From 10L to 20L
                              </SelectItem>
                              <SelectItem value="ABOVE_20L">
                                Above 20L
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="noticePeriod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Notice Period</FormLabel>
                          <FormControl>
                            <Input placeholder="30" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="yearOfGraduation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year of Graduation</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Year of Graduation" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="2024">2024</SelectItem>
                              <SelectItem value="2023">2023</SelectItem>
                              <SelectItem value="2022">2022</SelectItem>
                              <SelectItem value="2021">2021</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="currentLocation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Location</FormLabel>
                          <FormControl>
                            <Input placeholder="Coimbatore" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredLocation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>PreferredLocation</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select prefered location" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Coimbatore">
                                  Coimbatore
                                </SelectItem>
                                <SelectItem value="Chennai">Chennai</SelectItem>
                                <SelectItem value="Bangalore">
                                  Bangalore
                                </SelectItem>
                                <SelectItem value="Mumbai">Mumbai</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="currentEmployer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Employer</FormLabel>
                          <FormControl>
                            <Input placeholder="Shallbuy" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pdf"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Resume</FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                placeholder="Choose your file"
                                accept="application/pdf"
                                onChange={(event) =>
                                  field.onChange(
                                    event.target.files && event.target.files[0],
                                  )
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="skillSet"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Skills</FormLabel>
                          <MultiSelect
                            options={[...skillsOptions]}
                            onValueChange={field.onChange}
                            defaultValue={field.value || []}
                            placeholder="Select Skill"
                            variant="inverted"
                            animation={0}
                            maxCount={8}
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex justify-start !mt-6">
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobApplicationForm;
