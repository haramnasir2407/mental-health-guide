"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ResourceCard } from "./resource-card";
import { Tenor_Sans } from "next/font/google";

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const ResourcesShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const resources = [
    {
      title: "Explore Resources",
      description:
        "Explore a carefully curated library of evidence-based tools designed to support your mental wellbeing.",
      number: "01",
      illustration: "/assets/candle.svg",
      decorativeIcon: "/assets/heart.svg",
      arrowIcon: "/assets/slider-arrow.svg",
      gradientStart: "#EFDBFF",
      gradientEnd: "#ADC6FF",
    },
    {
      title: "Follow guided Playbooks",
      description:
        "Choose personalised pathways designed for your specific needs. Each journey is tailored to match your goals, challenges, and comfort level. Instead of a one-size-fits-all approach, you get guidance that adapts to your pace and preferences.",
      number: "02",
      illustration: "/assets/candle.svg",
      decorativeIcon: "/assets/heart.svg",
      arrowIcon: "/assets/slider-arrow.svg",
      gradientStart: "#EFDBFF",
      gradientEnd: "#ADC6FF",
    },
    {
      title: "Track Wellbeing",
      description:
        "Monitor your progress and celebrate your growth over time. Track every step you take, no matter how small, and see how far you've come. With meaningful insights and gentle reminders, you stay connected to your journey.",
      number: "03",
      illustration: "/assets/candle.svg",
      decorativeIcon: "/assets/heart.svg",
      arrowIcon: "/assets/slider-arrow.svg",
      gradientStart: "#EFDBFF",
      gradientEnd: "#ADC6FF",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % resources.length);
  };

  return (
    <section
      className="relative overflow-hidden px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20"
      style={{
        background: "#F8F9FA",
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1312px] mx-auto space-y-8 lg:space-y-12">
          {/* Desktop Version - Left Aligned */}
          <div className="space-y-4">
            <h2
              className={`hidden lg:block text-3xl sm:text-4xl lg:text-5xl text-left leading-tight ${tenorSans.className}`}
              style={{
                color: "#1F2937",
                fontWeight: 400,
              }}
            >
              We Got{" "}
              <span className="relative inline-block">
                You All{""}
                <Image
                  src="/assets/underline.svg"
                  alt=""
                  width={150}
                  height={5}
                  className="absolute -bottom-1 left-10"
                />
              </span>{" "}
              Covered
            </h2>

            {/* Mobile Version - Centered */}
            <h2
              className={`lg:hidden text-3xl sm:text-4xl text-center leading-tight ${tenorSans.className}`}
              style={{
                color: "#1F2937",
                fontWeight: 400,
              }}
            >
              We Got You All{" "}
              <span className="relative inline-block">
                Covered
                <Image
                  src="/assets/underline.svg"
                  alt=""
                  width={150}
                  height={5}
                  className="absolute -bottom-1 left-5"
                />
              </span>
            </h2>

            <p
              className="hidden lg:block text-base lg:text-lg text-center lg:text-left leading-relaxed font-satoshi"
              style={{
                color: "#6B7280",
                fontWeight: 400,
                lineHeight: "1.75",
              }}
            >
              Three simple steps to start your Mental Well Being Journey.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {resources.map((resource, index) => (
                <div key={index} className="min-w-full shrink-0">
                  <ResourceCard
                    title={resource.title}
                    description={resource.description}
                    number={resource.number}
                    illustration={resource.illustration}
                    decorativeIcon={resource.decorativeIcon}
                    arrowIcon={resource.arrowIcon}
                    gradientStart={resource.gradientStart}
                    gradientEnd={resource.gradientEnd}
                    onArrowClick={handleNext}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {resources.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#98a7e9] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            {/* <div className="text-center mt-4 text-sm text-gray-600">
              {currentIndex + 1} / {resources.length}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
