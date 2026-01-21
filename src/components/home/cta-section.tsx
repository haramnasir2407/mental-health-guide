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
      className="relative overflow-hidden px-6 py-8 sm:py-1 lg:py-20"
      style={{
        background: "linear-gradient(93.75deg, #EFDBFF 30.42%, #ADC6FF 138.5%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[300px] lg:max-w-[800px] mx-auto text-center space-y-6">
          {/* Heading */}
          <h2
            className={`text-3xl lg:text-4xl leading-tight ${tenorSans.className}`}
            style={{
              color: "#1F2937",
              fontWeight: 400,
            }}
          >
            Ready to start your journey?
          </h2>

          {/* Subtext */}
          <p
            className="text-sm sm:text-base lg:text-lg font-satoshi max-w-[350px] mx-auto"
            style={{
              color: "#4B5563",
              fontWeight: 400,
              lineHeight: "1.75",
            }}
          >
            Join thousands who&apos;ve found support, clarity, and peace.
          </p>

          {/* CTA Button */}

          <Link
            href="/docs"
            className="group inline-flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-satoshi text-base lg:text-lg transition-all hover:opacity-90 color-[#1F2937]"
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

    </section>
  );
};
