import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

// Custom SVG icon component for list items
const CheckIcon = () => (
  <svg 
    width="20" 
    height="24" 
    viewBox="0 0 20 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    style={{ marginRight: "12px" }}
  >
    <path 
      d="M18.1669 12.3333C18.5474 14.2011 18.2762 16.1428 17.3984 17.8348C16.5206 19.5268 15.0893 20.8667 13.3431 21.6311C11.597 22.3955 9.64154 22.5381 7.80293 22.0353C5.96433 21.5325 4.35368 20.4145 3.23958 18.8678C2.12548 17.3212 1.57529 15.4394 1.68074 13.5361C1.78619 11.6329 2.54092 9.8234 3.81906 8.4093C5.0972 6.9952 6.8215 6.06202 8.7044 5.76537C10.5873 5.46872 12.515 5.82654 14.166 6.77916" 
      stroke="#B37FEB" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M7.5 13.1667L10 15.6667L18.3333 7.33337" 
      stroke="#B37FEB" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    // Customize default markdown elements
    h2: (props) => (
      <h2 className="text-2xl lg:text-3xl leading-tight font-satoshi mt-4" style={{
        color: "#1F2937",
        fontWeight: 400,
      }} {...props} />
    ),
    ul: (props) => (
      <ul className="list-none space-y-3 my-4" {...props} />
    ),
    li: ({ children, ...props }) => (
      <li className="flex items-start" {...props}>
        <CheckIcon />
        <span className="flex-1">{children}</span>
      </li>
    ),
    ...components,
  };
}
