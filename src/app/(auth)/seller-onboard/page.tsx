"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  CheckCircle,
  ChevronRight,
  Store,
  FileText,
  MapPin,
  CreditCard,
  ChevronLeft,
  CalendarIcon,
} from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import useAuth from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";

const useStep = (steps: number, initialStep = 0) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const goToNextStep = () =>
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps - 1));
  const goToPrevStep = () =>
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));

  return { currentStep, goToNextStep, goToPrevStep };
};

const onboardingSchema = z.object({
  sellerName: z.string().min(1, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  dateOfBirth: z.date(),
  contactno: z.string().min(10, "Contact number is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  profilePicture: z
    .instanceof(File)
    .refine((file) => file.type.startsWith("image/"), {
      message: "Profile must be an image file",
    }),
  gstNumber: z
    .string()
    .length(15, "GST number must be 15 characters")
    .regex(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      "Invalid GST number format",
    ),
  gstDocument: z
    .instanceof(File)
    .refine((file) => file.type === "application/pdf", {
      message: "GST document must be a PDF file",
    }),
  gstSubmissionTime: z.date(),
  aadharNumber: z.string().regex(/^\d{12}$/, "Aadhar number must be 12 digits"),
  panNumber: z
    .string()
    .length(10, "PAN number must be 10 characters")
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]$/, "Invalid PAN number format"),
  storeName: z.string().min(1, "Store name is required"),
  taxRate: z.number().min(0, "Tax rate must be a positive number"),
  street: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  pincode: z.string().min(1, "Pincode is required"),
  district: z.string().min(1, "District is required"),
  ifscCode: z
    .string()
    .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code format"),
  accountNumber: z
    .string()
    .regex(/^\d{10,18}$/, "Account number must be between 10 and 18 digits"),
  bankName: z.string().min(1, "Bank name is required"),
  accountHolderName: z.string().min(1, "Account holder name is required"),
});

export type SellerOnboardingForm = z.infer<typeof onboardingSchema>;

export default function SellerOnboarding() {
  const { sellerSignup } = useAuth();
  const { currentStep, goToNextStep, goToPrevStep } = useStep(4);
  const totalSteps = 3;

  const steps = [
    {
      title: "Personal Info",
      icon: <Store className="w-6 h-6" />,
      fields: [
        "sellerName",
        "email",
        "dateOfBirth",
        "contactno",
        "password",
        "profilePicture",
      ],
    },
    {
      title: "Documents",
      icon: <FileText className="w-6 h-6" />,
      fields: [
        "gstNumber",
        "gstDocument",
        "gstSubmissionTime",
        "aadharNumber",
        "panNumber",
        "storeName",
        "taxRate",
      ],
    },
    {
      title: "Address",
      icon: <MapPin className="w-6 h-6" />,
      fields: ["street", "city", "state", "country", "pincode", "district"],
    },
    {
      title: "Bank Details",
      icon: <CreditCard className="w-6 h-6" />,
      fields: ["ifscCode", "accountNumber", "bankName", "accountHolderName"],
    },
  ];

  const form = useForm<SellerOnboardingForm>({
    resolver: zodResolver(onboardingSchema),
    mode: "onChange",
    defaultValues: {
      aadharNumber: "",
      accountHolderName: "",
      accountNumber: "",
      bankName: "",
      city: "",
      contactno: "",
      country: "",
      district: "",
      email: "",
      gstNumber: "",
      ifscCode: "",
      sellerName: "",
      panNumber: "",
      password: "",
      pincode: "",
      state: "",
      storeName: "",
      street: "",
      taxRate: 0,
      profilePicture: undefined,
      gstDocument: undefined,
      dateOfBirth: undefined,
      gstSubmissionTime: undefined,
    },
  });

  const { control, setValue, watch } = form;
  const profilePictureFile = watch("profilePicture");
  const gstDocumentFile = watch("gstDocument");

  const nextPage = async () => {
    const fieldsToValidate = steps[currentStep].fields as Array<
      keyof SellerOnboardingForm
    >;
    const result = await form.trigger(fieldsToValidate);
    if (result) {
      goToNextStep();
    }
  };

  const onSubmit = async (values: SellerOnboardingForm) => {
    const fieldsToValidate = steps[currentStep].fields as Array<
      keyof SellerOnboardingForm
    >;
    const result = await form.trigger(fieldsToValidate);
    if (result) {
      if (currentStep === totalSteps) {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          const value = values[key as keyof SellerOnboardingForm];
          if (value instanceof File) {
            formData.append(key, value);
          } else if (value instanceof Date) {
            formData.append(key, value.toISOString());
          } else {
            if (
              key === "street" ||
              key === "city" ||
              key === "state" ||
              key === "pincode" ||
              key === "district" ||
              key === "country"
            ) {
              formData.append(`pickupAddress[${key}]`, value.toString());
            } else {
              formData.append(key, value.toString());
            }
          }
        });
        try {
          let result = await sellerSignup(formData);
          if (result) {
            toast({
              title: "Successful 🎉",
              description: "Hey, chief welcome to the crew !",
            });
          }
        } catch (error) {
          console.error("Login error:", error);
        }
      }
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Seller Onboarding</CardTitle>
          <CardDescription>
            Complete your profile to start selling on our platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index <= currentStep
                        ? "bg-gray-900 text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {index < currentStep ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span className="text-xs mt-2">{step.title}</span>
                </div>
              ))}
            </div>
          </div>
          <Form {...form}>
            {currentStep === 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="sellerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Seller Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} type="text" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="john@example.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
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
                                captionLayout="dropdown-buttons"
                                selected={field.value}
                                onSelect={field.onChange}
                                fromYear={1960}
                                toYear={2030}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="contactno"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Number</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              placeholder="9876543201"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input {...field} type="password" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={control}
                      name="profilePicture"
                      render={() => (
                        <FormItem>
                          <FormLabel>Profile Picture</FormLabel>
                          <FormControl>
                            <div className="flex items-center space-x-2">
                              <Input
                                type="file"
                                placeholder="Choose your file"
                                accept="image/*"
                                onChange={(event) => {
                                  const file = event.target.files
                                    ? event.target.files[0]
                                    : null;
                                  if (file) setValue("profilePicture", file);
                                }}
                              />
                              {profilePictureFile && (
                                <span>{profilePictureFile.name}</span>
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Documents</h3>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="gstNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GST Number</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="22AAAAA0000A1Z5" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gstDocument"
                    render={() => (
                      <FormItem>
                        <FormLabel>GST Document</FormLabel>
                        <FormControl>
                          <div className="flex items-center space-x-2">
                            <Input
                              type="file"
                              placeholder="Choose your file"
                              accept="application/pdf"
                              onChange={(event) => {
                                const file = event.target.files
                                  ? event.target.files[0]
                                  : null;
                                if (file) setValue("gstDocument", file);
                              }}
                            />
                            {gstDocumentFile && (
                              <span>{gstDocumentFile.name}</span>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gstSubmissionTime"
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
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              captionLayout="dropdown-buttons"
                              selected={field.value}
                              onSelect={field.onChange}
                              fromYear={1960}
                              toYear={2030}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="aadharNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Aadhar Number</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="1234 5678 9012" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="panNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PAN Number</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="ABCDE1234F" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="storeName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Store Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="My Awesome Store" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="taxRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tax Rate (%)</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" placeholder="18" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Address</h3>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="123 Main St" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="New York" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="NY" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="United States" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pincode</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="10001" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>District</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Manhattan" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Bank Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="ifscCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>IFSC Code</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="ABCD0123456" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="accountNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Number</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="1234567890" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bankName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bank Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="ABC Bank" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="accountHolderName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Holder Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="John Doe" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={goToPrevStep}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button
                type="submit"
                onClick={
                  currentStep === totalSteps
                    ? form.handleSubmit(onSubmit)
                    : nextPage
                }
              >
                {currentStep === totalSteps ? "Submit" : "Next"}{" "}
                {currentStep !== totalSteps && (
                  <ChevronRight className="ml-2 h-4 w-4" />
                )}
              </Button>
            </div>
          </Form>
        </CardContent>
        <CardFooter className="w-full text-center">
          <div className="text-sm text-gray-600">
            <p className="mt-2">
              Already a seller?{" "}
              <Link
                href="/seller-login"
                className="text-gray-800 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
