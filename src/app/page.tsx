import Banner from "@/components/component/Banner";
import Link from "next/link";
import React from "react";
import { HomeCarousel } from "./home/page";

const Home = () => {
  return (
    <div>
      <Banner
        title={
          <span className="font-normal">
            Woahh! We are here with exiting offers on Jan Jamaka!!
            <Link
              className="mx-2 underline underline-offset-2 hover:font-semibold hover:no-underline transition-all duration-300"
              href="#"
            >
              Click here !
            </Link>
          </span>
        }
      />
      <div className="px-[3.25rem] py-8">
        <HomeCarousel />
      </div>
    </div>
  );
};

export default Home;
