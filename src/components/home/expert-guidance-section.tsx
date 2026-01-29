"use client";

import React from "react";
import Image from "next/image";
import { Tenor_Sans } from "next/font/google";

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const ExpertGuidanceSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20"
      style={{
        background: "#F0F5FF",
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center lg:text-left space-y-3">
            <h2
              className={`text-3xl lg:text-4xl leading-tight ${tenorSans.className}`}
              style={{
                color: "#001100",
                fontWeight: 400,
              }}
            >
              Expert Guidance You{" "}
              <span className="relative inline-block">
                Can Trust
                <Image
                  src="/assets/underline.svg"
                  alt=""
                  width={100}
                  height={5}
                  className="absolute -bottom-1 left-2"
                />
              </span>
            </h2>
            <p
              className="text-base lg:text-lg font-satoshi"
              style={{ color: "#1A1A1A", fontWeight: 400 }}
            >
              Collaborating with leading mental health professionals.
            </p>
          </div>
          {/* Mobile: Stacked Layout, Desktop: Grid Layout */}
          <div className="flex flex-col lg:flex-row lg:gap-4 lg:items-center space-y-8 lg:space-y-0">
            {/* Profile Card - Left on Desktop */}
            <div className="relative w-full max-w-[300px] mx-auto lg:mx-0">
              {/* Frame Background */}
              <div className="relative w-full h-[300px] lg:h-[350px]">
                <Image
                  src="/assets/frame.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col items-center py-12">
                {/* Profile Image */}
                <div className="relative w-[200px] h-[200px] lg:w-[240px] lg:h-[240px]">
                  <Image
                    src="/assets/arman-ahmed.svg"
                    alt="Dr. Arman Ahmed"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>

            {/* Text Section - Right on Desktop */}
            <div className="space-y-6 lg:space-y-4">
              {/* Name */}
              <h3
                className="text-2xl lg:text-3xl text-center lg:text-left text-[#1F2937] font-satoshi"
                style={{
                  fontWeight: 500,
                  color: "#001100",
                }}
              >
                Dr. Arman Ahmed
              </h3>

              {/* Title */}
              <p
                className="text-sm lg:text-base text-center lg:text-left my-2 font-satoshi"
                style={{
                  color: "#666666",
                  fontWeight: 400,
                }}
              >
                Clinical Psychologist & Wellbeing Expert
              </p>

              {/* Description */}
              <p
                className="text-sm lg:text-base text-center lg:text-left leading-relaxed font-satoshi mx-auto lg:mx-0 max-w-[280px] lg:max-w-none"
                style={{
                  color: "#1A1A1A",
                  fontWeight: 400,
                  lineHeight: "1.5",
                }}
              >
                With over 15 years of experience in workplace mental health, Dr.
                Arman Ahmed has helped thousands bring compassionate care to our
                platform. His expertise in stress management and
                resilience-building has helped thousands thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
