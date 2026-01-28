import React from "react";
import Image from "next/image";

interface CardProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

export const Card = ({
  icon,
  iconAlt,
  title,
  description,
}: CardProps) => {
  return (
    <div className="border border-black p-6">
      <div className="relative w-20 h-20 mb-8">
        <Image
          src="/assets/ellipse-47.svg"
          alt="Ellipse 47"
          className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
          width={80}
          height={80}
        />
        <Image
          src={icon}
          alt={`${iconAlt} icon`}
          className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10"
          width={40}
          height={40}
        />
      </div>

      <h3 className="text-lg font-medium mb-3">{title}</h3>

      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};
