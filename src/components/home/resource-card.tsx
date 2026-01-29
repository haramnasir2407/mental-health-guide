import React from "react";
import Image from "next/image";
import { Tenor_Sans } from "next/font/google";

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface ResourceCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  number?: string;
  illustration?: string;
  decorativeIcon?: string;
  arrowIcon?: string;
  gradientStart?: string;
  gradientEnd?: string;
  backgroundColor?: string;
  onArrowClick?: () => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title = "Explore Resources",
  subtitle = "carefully curated",
  description = "Explore a carefully curated library of evidence-based tools designed to support your mental wellbeing.",
  number = "01",
  illustration = "/assets/candle.svg",
  decorativeIcon = "/assets/heart.svg",
  arrowIcon = "/assets/slider-arrow.svg",
  gradientStart = "#EFDBFF",
  gradientEnd = "#ADC6FF",
  backgroundColor = "#EFDBFF",
  onArrowClick,
}) => {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:block relative w-full max-w-[1312px] h-[421px] border border-[#1A1A1A]">
        <div className="grid grid-cols-[355px_1fr] h-full">
          {/* Left Section - Illustration with Gradient */}
          <div
            className="relative border-r border-[#1A1A1A] overflow-hidden"
            style={{
              background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[60px] h-[242px]">
                <Image
                  src={illustration}
                  alt="Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Grid Layout */}
          <div className="grid grid-cols-[1fr_187px] h-full">
            {/* Text Content - Full Height */}
            <div className="flex flex-col justify-center px-12 py-8 border-r border-[#1A1A1A]">
              <h3
                className={`text-2xl sm:text-3xl lg:text-3xl leading-tight text-[#001100] mb-2 ${tenorSans.className}`}
              >
                {title}
              </h3>
              <p className="text-xs lg:text-sm text-[#001100]/60  w-full">
                {description}
              </p>
            </div>

            {/* Right Column - Number, Heart + Empty Box, and Arrow */}
            <div className="grid grid-rows-[183px_auto_1fr]">
              {/* Number Box */}
              <div className="border-b border-[#1A1A1A] flex items-center justify-center">
                <span
                  className={`text-[72px] font-bold text-[#001100] ${tenorSans.className}`}
                >
                  {number}
                </span>
              </div>

              {/* Middle Row - Heart Icon (left) and Empty Box (right) */}
              <div className="grid grid-cols-2 border-b border-[#1A1A1A]">
                {/* Heart Icon with Gradient */}
                <div className="border-r border-[#1A1A1A] flex items-center justify-center py-4">
                  <div className="relative w-[36px] h-[45px]">
                    <Image
                      src={decorativeIcon}
                      alt="Decorative icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Empty Gradient Box */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
                  }}
                />
              </div>

              {/* Bottom Row - Arrow (left) and Empty Box (right) */}
              <div className="grid grid-cols-2">
                <div className="border-r border-[#1A1A1A]" />

                {/* Bottom Right - Arrow */}
                <div
                  className="flex items-center justify-center cursor-pointer hover:bg-[#f6f6f2] transition-colors"
                  onClick={onArrowClick}
                  role="button"
                  aria-label="Next slide"
                >
                  <div className="relative w-[50px] h-[55px]">
                    <Image
                      src={arrowIcon}
                      alt="Arrow"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden relative w-full max-w-[300px] mx-auto border border-[#1A1A1A] bg-white">
        {/* Top Section - Gradient with Illustration */}
        <div
          className="relative h-[280px] border-b border-[#1A1A1A]"
          style={{
            background: `linear-gradient(to bottom, ${gradientStart}, ${gradientEnd})`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[50px] h-[200px]">
              <Image
                src={illustration}
                alt="Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Middle Section - Title and Description */}
        <div className="border-b border-[#1A1A1A] px-6 py-6 text-center">
          <h3
            className={`text-base leading-tight text-[#001100] mb-2 ${tenorSans.className}`}
          >
            {title}
          </h3>
          <p className="text-xs text-[#001100]/60 leading-normal">
            {description}
          </p>
        </div>

        {/* Number Section */}
        <div className="border-b border-[#1A1A1A] flex items-center justify-center py-6">
          <span
            className={`text-[72px] font-bold text-[#001100] ${tenorSans.className}`}
          >
            {number}
          </span>
        </div>

        {/* Bottom Grid - 2x2 */}
        <div className="grid grid-cols-2 h-[150px]">
          {/* Top Left - Decorative Icon */}
          <div className="border-r border-b border-[#1A1A1A] flex items-center justify-center">
            <div className="relative w-[30px] h-[38px]">
              <Image
                src={decorativeIcon}
                alt="Decorative icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Top Right - Empty Gradient Box */}
          <div
            className="border-b border-[#1A1A1A]"
            style={{
              background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
            }}
          />

          {/* Bottom Left - Empty Box */}
          <div className="border-r border-[#1A1A1A]" />

          {/* Bottom Right - Arrow */}
          <div
            className="flex items-center justify-center cursor-pointer hover:bg-[#EAEAE0] transition-colors"
            onClick={onArrowClick}
            role="button"
            aria-label="Next slide"
          >
            <div className="relative w-[50px] h-[55px]">
              <Image
                src={arrowIcon}
                alt="Arrow"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
