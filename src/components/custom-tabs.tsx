"use client";

import React from "react";
import Image from "next/image";

interface CustomTabsProps {
  items: Array<{ label: string; icon: string }>;
  children: React.ReactNode;
}

export const CustomTabs = ({ items, children }: CustomTabsProps) => {
  const [activeTab, setActiveTab] = React.useState(items[0]?.label || "");

  return (
    <div className="my-8">
      <div className="flex gap-0 mb-6 bg-[#e8e6e6] p-1">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveTab(item.label)}
            className={`flex items-center gap-2 px-4 h-10 rounded border transition-all ${
              activeTab === item.label
                ? "bg-linear-to-br from-[#FFF0F6] to-[#D6E4FF] border-[#1A1A1A]"
                : "bg-white border-[#E5E7EB]"
            }`}
            style={{ fontSize: "16px", fontWeight: 400 }}
          >
            <Image src={item.icon} alt="" width={18} height={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <div>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const props = child.props as TabProps;
            if (props.value === activeTab) {
              return child;
            }
          }
          return null;
        })}
      </div>
    </div>
  );
};

interface TabProps {
  value: string;
  children: React.ReactNode;
}

export const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};
