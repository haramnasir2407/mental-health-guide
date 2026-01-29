"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tenor_Sans } from "next/font/google";

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const CTASection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20"
      style={{
        background: "linear-gradient(93.75deg, #EFDBFF 30.42%, #ADC6FF 138.5%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center space-y-6 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:text-left lg:space-y-0">
          <div className="space-y-6 lg:space-y-3">
            {/* Heading */}
            <h2
              className={`text-3xl lg:text-4xl leading-tight ${tenorSans.className}`}
              style={{
                color: "#001100",
                fontWeight: 400,
              }}
            >
              Ready to start your journey?
            </h2>

            {/* Subtext */}
            <p
              className="text-sm sm:text-base lg:text-lg font-satoshi max-w-[350px] mx-auto lg:mx-0 lg:max-w-[520px]"
              style={{
                color: "#1A1A1A",
                fontWeight: 400,
                lineHeight: "1.75",
              }}
            >
              Join thousands who&apos;ve found support, clarity, and peace.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-end lg:shrink-0">
            <Link
              href="/docs"
              className="group inline-flex items-center justify-center gap-2 px-6 py-2 rounded-md font-satoshi text-base lg:text-lg transition-all hover:opacity-90 text-[#1F2937]"
              style={{
                background: "#FFFFFF",
                fontWeight: 400,
              }}
            >
              Explore the Playbook
              <Image
                src="/assets/Vector.svg"
                alt=""
                width={10}
                height={10}
                className="transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
