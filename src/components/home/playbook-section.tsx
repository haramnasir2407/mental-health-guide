import Image from "next/image";

import { Tenor_Sans } from "next/font/google";

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export function PlaybookSection() {
  return (
    <section
      className="w-full py-12 lg:py-20 px-6 lg:px-8"
      style={{ background: "var(--Colors-Base-Geekblue-50, #F0F5FF)" }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Mobile Heading - Centered */}
        <div className="lg:hidden text-center mb-8">
          <h2
            className={`text-2xl sm:text-3xl leading-tight ${tenorSans.className}`}
          >
            What You Will{" "}
            <span className="relative inline-block">
              Find
              <Image
                src="/assets/underline.svg"
                alt=""
                width={120}
                height={10}
                className="absolute -bottom-1 left-0"
              />
            </span>
            <br />
            in this Playbook
          </h2>
        </div>

        {/* Mobile Cat Illustration - Centered */}
        <div className="lg:hidden flex justify-center mb-8">
          <div className="relative w-48 h-48">
            <Image
              src="/assets/cat.svg"
              alt="Playbook illustration"
              width={192}
              height={192}
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Desktop Left Side - Title and Illustration */}
          <div className="hidden lg:flex flex-col items-start">
            <div className="relative mb-8">
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl leading-tight ${tenorSans.className}`}
              >
                What You Will{" "}
                <span className="relative inline-block">
                  Find
                  <Image
                    src="/assets/underline.svg"
                    alt=""
                    width={150}
                    height={12}
                    className="absolute -bottom-1 left-0"
                  />
                </span>
                <br />
                in this Playbook
              </h2>
            </div>

            {/* Cat Illustration */}
            <div className="relative w-64 h-64 mt-8">
              <Image
                src="/assets/cat.svg"
                alt="Playbook illustration"
                width={256}
                height={256}
                className="object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Description */}
            <p className="text-gray-700 text-xs sm:text-sm lg:text-lg leading-relaxed font-satoshi text-center lg:text-left px-4 lg:px-0">
              Mental wellbeing is a crucial predictor of general wellbeing and
              directly impacts their workplace efficacy, motivation and job
              satisfaction levels. The following statistics emphasize the
              importance of fostering mental wellbeing in the workplaces.
            </p>

            {/* Horizontal Separator */}
            <hr className="lg:hidden border-t border-gray-400 w-full" />

            {/* Bullet Points */}
            <div className="flex flex-col gap-8 lg:gap-6 font-satoshi">
              {/* Point 1 */}
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center lg:items-start text-center lg:text-left">
                {/* Mobile Icon */}
                <div className="lg:hidden w-6 h-6 flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/clipart-1.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                {/* Desktop Icon */}
                <div className="hidden lg:flex w-8 h-8 items-center justify-center shrink-0">
                  <Image
                    src="/assets/clipart-1.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xs lg:max-w-none px-4 lg:px-0">
                  Deeper insight into the impact of mental health on workplace
                  productivity and developing a harmonious work-life
                  integration.
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center lg:items-start text-center lg:text-left">
                {/* Mobile Icon */}
                <div className="lg:hidden w-6 h-6 flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/clipart-2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                {/* Desktop Icon */}
                <div className="hidden lg:flex w-8 h-8 items-center justify-center shrink-0">
                  <Image
                    src="/assets/clipart-2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xs lg:max-w-none px-4 lg:px-0">
                  Measures for assessing mental health challenges in the
                  workplace and gaining greater emotional self awareness.
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center lg:items-start text-center lg:text-left">
                {/* Mobile Icon */}
                <div className="lg:hidden w-6 h-6 flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/clipart-3.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                {/* Desktop Icon */}
                <div className="hidden lg:flex w-8 h-8 items-center justify-center shrink-0">
                  <Image
                    src="/assets/clipart-3.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xs lg:max-w-none px-4 lg:px-0">
                  Empirically proven strategies, tools and resources for
                  contending with the multifarious mental health challenges
                  faced by employees at the workplace.
                </p>
              </div>

              {/* Point 4 */}
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center lg:items-start text-center lg:text-left">
                {/* Mobile Icon */}
                <div className="lg:hidden w-6 h-6 flex items-center justify-center shrink-0">
                  <Image
                    src="/assets/clipart-4.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                {/* Desktop Icon */}
                <div className="hidden lg:flex w-8 h-8 items-center justify-center shrink-0">
                  <Image
                    src="/assets/clipart-4.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xs lg:max-w-none px-4 lg:px-0">
                  Strategies for fostering workplace resilience and enabling
                  optimum performance in the professional and personal spheres
                  of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
