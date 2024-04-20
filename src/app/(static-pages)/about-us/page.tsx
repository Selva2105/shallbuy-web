import { Button } from "@/components/ui/button";
import { jobListings, teamMembers, valuesList } from "@/constants/data";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import peopleImage from "../../../../public/images/teams/Image.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center self-stretch px-20 py-8 font-semibold text-center bg-white max-md:px-5">
          <p className="mt-4 text-base leading-6 text-gray-500 max-md:max-w-full">
            About us
          </p>
          <p className="mt-3 text-4xl tracking-tighter text-gray-900 max-md:max-w-full max-md:text-4xl">
            About the company
          </p>
          <p className="mt-3 text-base leading-8 text-slate-600 max-md:max-w-full">
            Learn more about the company and the team behind it.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center self-stretch px-20 py-8 bg-gray-50 max-md:px-5">
        <div className="px-8 mt-4 w-full max-w-screen-xl max-md:px-5 max-md:max-w-full">
          <div className="flex max-md:flex-col">
            <Image
              loading="lazy"
              src="/images/about-1.webp"
              alt=""
              width={600}
              height={600}
            />
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full ">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full py-9 pr-8 ml-24 ">
                <div className="text-sm font-semibold leading-6 text-violet-700 max-md:max-w-full">
                  We’ve helped hundreds of companies
                </div>
                <div className="mt-3 text-5xl font-semibold tracking-tighter text-gray-900 leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
                  We’re only just getting started on our journey
                </div>
                <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow self-stretch max-md:mt-8">
                        <div className="text-4xl font-semibold tracking-tighter text-violet-500 leading-[22px] max-md:text-4xl">
                          400+
                        </div>
                        <div className="mt-2 text-sm font-medium leading-7 text-gray-900">
                          Orders completed
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow self-stretch max-md:mt-8">
                        <div className="text-4xl font-semibold tracking-tighter text-violet-500 leading-[22px] max-md:text-4xl">
                          600%
                        </div>
                        <div className="mt-2 text-sm font-medium leading-7 text-gray-900">
                          Return on investment
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow self-stretch max-md:mt-8">
                        <div className="text-4xl font-semibold tracking-tighter text-violet-500 leading-[22px] max-md:text-4xl">
                          10k
                        </div>
                        <div className="mt-2 text-sm font-medium leading-7 text-gray-900">
                          Global users
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow self-stretch max-md:mt-8">
                        <div className="text-4xl font-semibold tracking-tighter text-violet-500 leading-[22px] max-md:text-4xl">
                          200+
                        </div>
                        <div className="mt-2 text-sm font-medium leading-7 text-gray-900">
                          5-star reviews
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-center items-center self-center px-20 py-8 w-full text-base font-semibold leading-6 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[768px]">
            <div className="text-center text-violet-700 max-md:max-w-full">
              We’re hiring!
            </div>
            <div className="mt-3 text-4xl tracking-tighter leading-10 text-center text-gray-900 max-md:max-w-full">
              Meet our team
            </div>
            <div className="mt-5 text-xl leading-8 text-center text-slate-600 max-md:max-w-full">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do you best work.
            </div>
            <div className="flex gap-3 self-center mt-10">
              <Button className="justify-center px-5 py-3 hover:text-white bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-slate-700">
                About us
              </Button>
              <Button className="justify-center px-5 py-3 text-white hover:bg-transparent hover:text-violet-500 bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm">
                Open positions
              </Button>
            </div>
          </div>
        </div>

        <div className="max-md:max-w-full px-20 pb-8 ">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-center items-center">
            {teamMembers.map((data, index) => (
              <div
                className="flex flex-col mx-2.5 w-3/12 max-md:ml-0 max-md:w-full"
                key={index}
              >
                <div className="flex flex-col grow self-stretch p-6 mx-auto w-full bg-gray-50 max-md:px-5 max-md:mt-8">
                  <img
                    loading="lazy"
                    src={data.profile.src}
                    className="self-center w-20 aspect-square"
                    alt=""
                  />
                  <div className="mt-5 text-lg font-semibold leading-7 text-center text-gray-900">
                    {data.name}
                  </div>
                  <div className="text-base leading-6 text-center text-violet-700">
                    {data.role}
                  </div>
                  <div className="mt-2 text-base leading-6 text-center text-slate-600">
                    {data.bio}
                  </div>
                  <div className="flex gap-4 justify-center px-16 mt-4 max-md:px-5">
                    <Link
                      href={data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubLogoIcon className="w-[22px] h-[22px]" />
                    </Link>
                    <Link
                      href={data.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInLogoIcon className="w-[22px] h-[22px]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center self-stretch px-20 py-8 bg-gray-50 max-md:px-5">
        <div className="mt-4 text-base font-semibold leading-6 text-center text-violet-700 max-md:max-w-full">
          Our values
        </div>
        <div className="mt-3 text-4xl font-semibold tracking-tighter leading-10 text-center text-gray-900 max-md:max-w-full">
          How we work at Untitled
        </div>
        <div className="mt-5 text-xl leading-8 text-center text-slate-600 max-md:max-w-full">
          Our shared values keep us connected and guide us as one team.
        </div>
        <div className="flex flex-col self-stretch px-8 mt-16 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {valuesList.slice(0, 3).map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                >
                  <div className="flex flex-col grow text-center max-md:mt-8">
                    <img
                      loading="lazy"
                      src={value.icon.src}
                      className="self-center w-12 h-12 aspect-square"
                      alt=""
                    />
                    <div className="mt-5 text-xl font-medium leading-8 text-gray-900">
                      {value.title}
                    </div>
                    <div className="mt-2 text-base leading-6 text-slate-600">
                      {value.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {valuesList.slice(3).map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                >
                  <div className="flex flex-col grow text-center max-md:mt-8">
                    <img
                      loading="lazy"
                      src={value.icon.src}
                      className="self-center w-12 h-12 aspect-square"
                      alt=""
                    />
                    <div className="mt-5 text-xl font-medium leading-8 text-gray-900">
                      {value.title}
                    </div>
                    <div className="mt-2 text-base leading-6 text-slate-600">
                      {value.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-20 py-8 my-4 w-full max-md:max-w-full">
        <div className="justify-center px-3 py-1 text-sm font-medium leading-5 text-center text-violet-700 bg-purple-50 rounded-2xl">
          Open positions
        </div>
        <div className="mt-4 text-4xl font-semibold tracking-tighter leading-10 text-center text-gray-900 max-md:max-w-full">
          We’re looking for talented people
        </div>
        <div className="mt-5 text-xl text-center max-md:max-w-full">
          We’re a 100% remote team spread all across the world. Join us!
        </div>
        <img
          loading="lazy"
          src={peopleImage.src}
          className="self-center mt-16 w-[1216px] h-[400px] aspect-[3.03] max-md:mt-10"
          alt="people"
        />

        {jobListings.map((category, index) => (
          <div className="mt-8 text-gray-900 max-md:mt-10 w-[60%]" key={index}>
            <div className="w-full text-xl font-semibold text-gray-900 max-md:max-w-full">
              {category.category}
            </div>
            {category.positions.map((position, index) => (
              <>
                <div
                  className="flex flex-col p-6 mt-8 w-full bg-white rounded-2xl border border-gray-200 border-solid max-md:px-5 max-md:max-w-full"
                  key={index}
                >
                  <div className="text-base font-semibold leading-7 text-gray-900 max-md:max-w-full">
                    {position.title}
                  </div>
                  <div className="mt-2 max-md:max-w-full text-sm">
                    {position.description}
                  </div>
                  <div className="flex gap-5 pr-20 mt-8 font-medium max-md:flex-wrap max-md:pr-5">
                    <div className="flex gap-2 whitespace-nowrap items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f3f5d4d835f5111af9e74158bcaa3ea2da536100d587c3a277897c741b51e4?"
                        className="shrink-0 my-auto w-4 aspect-square"
                        alt=""
                      />
                      <div className="text-sm">{position.type}</div>
                    </div>
                    <div className="flex gap-2">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f29bbd47f2a5e1750d1023d4df0463bc0385cb70e440679bf959a835940e0b1?"
                        className="shrink-0 my-auto w-4 aspect-square"
                        alt=""
                      />
                      <div className="text-sm items-center">
                        {position.salaryRange}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col self-stretch px-20 py-8  bg-white max-md:px-5">
        <div className="flex flex-col px-8 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-wrap">
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="text-3xl font-semibold leading-10 text-gray-900 max-md:max-w-full">
                Start your 30-day free trial
              </div>
              <div className="mt-4 text-xl leading-8 text-slate-600 max-md:max-w-full">
                Join over 400+ users already enjoying the power of permium.
              </div>
            </div>
            <div className="flex gap-3 self-start text-base font-semibold leading-6">
              <Button className="justify-center px-5 py-3 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-slate-700">
                Learn more
              </Button>
              <Button className="justify-center px-5 py-3 text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm">
                Get started
              </Button>
            </div>
          </div>
          <div className="shrink-0 mt-16 h-px bg-gray-200 max-md:mt-10 max-md:max-w-full" />
        </div>
      </div>
    </>
  );
};

export default page;
