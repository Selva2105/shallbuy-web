"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function HomeCarousel() {
  const HomeCaroselData = [
    {
      id: 1,
      link: "https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2FHome%2FHomeBanner.jpg?alt=media&token=437b92ed-bfa5-4ac0-801d-51bc8c05ec69",
    },
    {
      id: 2,
      link: "https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2FHome%2FHomeBanner1.jpg?alt=media&token=bd873e1a-4186-4cf8-a7cc-662cc848a841",
    },
    {
      id: 3,
      link: "https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2FHome%2FHomeBanner2.jpg?alt=media&token=664490df-8798-449b-8489-083feed8cfb8",
    },
    {
      id: 4,
      link: "https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2FHome%2FHomeBanner3.jpg?alt=media&token=0ed0139c-8daf-4f4c-8184-095c9b43556e",
    },
    {
      id: 5,
      link: "https://firebasestorage.googleapis.com/v0/b/ikart-40b39.appspot.com/o/images%2FHome%2FHomeBanner4.jpg?alt=media&token=5f1b38be-f33d-42e2-b3d0-250c5163a0a1",
    },
  ];
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 30000,
        }),
      ]}
    >
      <CarouselContent>
        {HomeCaroselData.map((data) => (
          <CarouselItem key={data.id}>
            <div className="p-1">
              <img src={data.link} alt={`banner-${data.id}`} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
