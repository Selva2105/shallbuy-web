import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { FC } from "react";

const NotFoundPage: FC = function () {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-6">
      <img alt="" src="/images/illustrations/404.svg" className="lg:max-w-md" />
      <h1 className="mb-6 text-2xl font-bold dark:text-white md:text-5xl">
        Page not found
      </h1>
      <p className="mb-6 w-4/5 max-w-xl text-center text-lg text-gray-500 dark:text-gray-300">
        Oops! Looks like you followed a bad link. If you think this is a problem
        with us, please tell us.
      </p>
      <Button asChild>
        <Link href={"/home"}>
          <div className="mr-1 flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#ffffff"}
              fill={"none"}
            >
              <path
                d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Go back home
          </div>
        </Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
