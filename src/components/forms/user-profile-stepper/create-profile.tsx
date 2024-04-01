"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import useAuth from "@/hooks/useAuth";
import { getCityList } from "@/lib/countryStateList";
import { profileSchema, type ProfileFormValues } from "@/lib/form-schema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangleIcon, Trash2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import statesData from "@/constants/state.json";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export const CreateProfileOne = () => {
  // Constants
  const title = "Create Your Profile";
  const description =
    "To create your resume, we first need some basic information about you.";

  //States
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedState, setSelectedState] = useState<string | undefined>("");
  const [city, setCity] = useState([]);
  const [finished, setFinished] = useState(false);

  //Hooks
  const { signup } = useAuth();
  const { toast } = useToast();

  // Fetch city list from api
  useEffect(() => {
    const fetchCountries = async () => {
      if (selectedState !== "") {
        const countriesList = await getCityList(selectedState);
        setCity(countriesList);
      }
    };

    fetchCountries();
  }, [selectedState]);

  // Default form values
  const defaultValues = {
    addresses: [
      {
        street: "",
        pincode: "",
        country: "",
        city: "",
        state: "",
      },
    ],
  };

  // Form - react hook form
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues,
    mode: "onChange",
  });

  const {
    control,
    formState: { errors },
  } = form;

  const { append, remove, fields } = useFieldArray({
    control,
    name: "addresses",
  });

  const processForm: SubmitHandler<ProfileFormValues> = async (data) => {
    console.log("data ==>", data);
    // api call and reset
    const result = await signup(data);
    if (result) {
      setFinished(true);
      toast({
        title: "Successful 🎉",
        description: "Hey, chief welcome  !",
      });
    }
    form.reset();
  };

  type FieldName = keyof ProfileFormValues;

  const steps = [
    {
      id: "Step 1",
      name: "Personal Information",
      fields: [
        "username",
        "email",
        "contactno",
        "dateOfBirth",
        "password",
        "confirmPassword",
      ],
    },
    {
      id: "Step 2",
      name: "Professional Informations",
      // fields are mapping and flattening for the error to be trigger  for the dynamic fields
      fields: fields
        ?.map((_, index) => [
          `addresses.${index}.street`,
          `addresses.${index}.pincode`,
          `addresses.${index}.country`,
          `addresses.${index}.city`,
          `addresses.${index}.state`,
        ])
        .flat(),
    },
    { id: "Step 3", name: "Complete" },
  ];

  const next = async () => {
    const fields = steps[currentStep].fields;

    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;
    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step + 1);
      if (currentStep === steps.length - 2) {
        await form.handleSubmit(processForm)();
      }
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  const countries = [{ id: "1", name: "India" }];

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
      <Separator />
      <div>
        <ul className="flex gap-4">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-gray-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-gray-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-gray-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex h-full w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(processForm)}
          className="space-y-8 w-full"
        >
          <div
            className={cn(
              currentStep === 1
                ? "md:inline-block w-full"
                : `md:grid ${currentStep === 2 ? "md:grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"}  gap-8`,
            )}
          >
            {currentStep === 0 && (
              <>
                <FormField
                  control={form.control}
                  defaultValue=""
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="johndoe@gmail.com"
                          {...field}
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactno"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter you contact number"
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
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of birth</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your  password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <Input
                        type="password"
                        placeholder="Enter your confirm password"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            {currentStep === 1 && (
              <>
                {fields?.map((field, index) => (
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-1"
                    key={field.id}
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={cn(
                          "[&[data-state=closed]>button]:hidden [&[data-state=open]>.alert]:hidden relative !no-underline",
                          errors?.addresses?.[index] && "text-red-700",
                        )}
                      >
                        {`Address ${index + 1}`}
                        {index >= 1 && (
                          <span
                            className="absolute right-8 p-1 outline outline-1 rounded-sm"
                            onClick={() => remove(index)}
                          >
                            <Trash2Icon className="h-4 w-4 " />
                          </span>
                        )}

                        {errors?.addresses?.[index] && (
                          <span className="absolute alert right-8">
                            <AlertTriangleIcon className="h-4 w-4   text-red-700" />
                          </span>
                        )}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div
                          className={cn(
                            "md:grid md:grid-cols-3 gap-8 border p-4 rounded-md relative mb-4",
                          )}
                        >
                          <FormField
                            control={form.control}
                            name={`addresses.${index}.country`}
                            defaultValue=""
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Country</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue
                                        defaultValue={field.value}
                                        placeholder="Select your job country"
                                      />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {countries.map((country) => (
                                      <SelectItem
                                        key={country.id}
                                        value={country.name}
                                      >
                                        {country.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`addresses.${index}.state`}
                            defaultValue=""
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>State</FormLabel>
                                <Select
                                  onValueChange={(value) => {
                                    field.onChange(value);
                                    const selectedStateData = statesData.find(
                                      (state) => state.name === value,
                                    );
                                    setSelectedState(selectedStateData?.iso2);
                                  }}
                                  value={field.value}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue
                                        defaultValue={field.value}
                                        placeholder="Select your job state"
                                      />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {statesData.map((state) => (
                                      <SelectItem
                                        key={state.id}
                                        value={state.name}
                                      >
                                        {state.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`addresses.${index}.city`}
                            defaultValue=""
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue
                                        defaultValue={field.value}
                                        placeholder="Select your job city"
                                      />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {city.map((city: any) => (
                                      <SelectItem
                                        key={city.id}
                                        value={city.name}
                                      >
                                        {city.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`addresses.${index}.street`}
                            defaultValue=""
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Street</FormLabel>
                                <FormControl>
                                  <Input type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`addresses.${index}.pincode`}
                            defaultValue=""
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Pincode</FormLabel>
                                <FormControl>
                                  <Input type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}

                <div className="flex justify-center mt-4">
                  <Button
                    type="button"
                    className="flex justify-center"
                    size={"lg"}
                    onClick={() =>
                      append({
                        street: "",
                        pincode: "",
                        country: "",
                        city: "",
                        state: "",
                      })
                    }
                  >
                    Add More
                  </Button>
                </div>
              </>
            )}
            {currentStep === 2 && (
              <div className="flex justify-center items-center flex-col w-full h-80">
                {finished ? (
                  <>
                    <h1>Completed</h1>
                    <span>
                      <Link
                        href={"/home"}
                        className="underline underline-offset-2 text-gray-700 font-medium hover:font-semibold hover:no-underline hover:text-gray-800"
                      >
                        Click
                      </Link>{" "}
                      here to enjoy the experience
                    </span>
                  </>
                ) : (
                  <>
                    <img src="/images\illustrations\signup_gif.gif" alt="" />
                    <h1>Account creation is in process ...</h1>
                  </>
                )}
              </div>
            )}
          </div>

          {/* <Button  className="ml-auto" type="submit">
            {action}
          </Button> */}
        </form>
      </Form>
      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
