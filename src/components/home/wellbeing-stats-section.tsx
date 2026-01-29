import Image from "next/image";
import { Tenor_Sans } from "next/font/google";

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export function WellbeingStatsSection() {
  const stats = [
    {
      icon: "/assets/leaf1.svg",
      percentage: "43%",
      description:
        "Of people feel disconnected around 100 countries, have experienced workplace burnout.",
    },
    {
      icon: "/assets/leaf2.svg",
      percentage: "1 in 6",
      description: "People experience mental health problems in the workplace.",
    },
    {
      icon: "/assets/leaf3.svg",
      percentage: "82%",
      description: "Of employees in the tech industry feel close to burnout.",
    },
    {
      icon: "/assets/leaf4.svg",
      percentage: "12 Billion",
      description:
        "Working days are lost every year to depression and anxiety.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20"
      style={{
        backgroundImage: "url('/assets/Background-Pattern.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-center items-start relative">
          {/* Mobile Animated Paws - Top Center */}
          <div className="lg:hidden absolute -top-8 right-4">
            <div className="relative w-20 h-16">
              {/* Paw 3 (Top - appears last) */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 animate-[appearPaw3_5s_linear_infinite]">
                <Image src="/assets/paw3.svg" alt="" width={24} height={24} />
              </div>

              {/* Paw 1 (Bottom Left - appears first) */}
              <div className="absolute bottom-2 left-8 animate-[appearPaw1_5s_linear_infinite]">
                <Image src="/assets/paw1.svg" alt="" width={24} height={24} />
              </div>

              {/* Paw 2 (Bottom Right - appears second) */}
              <div className="absolute bottom-6 right-1 animate-[appearPaw2_5s_linear_infinite]">
                <Image src="/assets/paw2.svg" alt="" width={24} height={24} />
              </div>
            </div>
          </div>

          {/* Desktop Animated Walking Paws - Between Left and Right */}
          <div className="hidden lg:flex absolute top-0 left-[42%] xl:left-[35%] flex-col items-center">
            {/* Walking Paws Animation */}
            <div className="relative flex flex-col items-center gap-1">
              {/* Paw 5 (Top - appears last) */}
              <div className="animate-[appearPaw5_5s_linear_infinite]">
                <Image src="/assets/paw5.svg" alt="" width={30} height={30} />
              </div>

              {/* Paw 4 */}
              <div className="animate-[appearPaw4_5s_linear_infinite] -ml-6">
                <Image src="/assets/paw4.svg" alt="" width={32} height={32} />
              </div>

              {/* Paw 3 */}
              <div className="animate-[appearPaw3_5s_linear_infinite] ml-1">
                <Image src="/assets/paw3.svg" alt="" width={32} height={32} />
              </div>

              {/* Paw 2 */}
              <div className="animate-[appearPaw2_5s_linear_infinite] -ml-8">
                <Image src="/assets/paw2.svg" alt="" width={32} height={32} />
              </div>

              {/* Paw 1 (Bottom - appears first) */}
              <div className="animate-[appearPaw1_5s_linear_infinite] -ml-1">
                <Image src="/assets/paw1.svg" alt="" width={32} height={32} />
              </div>
            </div>
          </div>

          {/* Left Content */}
          <div className="lg:col-span-5 space-y-6">
            {/* Desktop Version */}
            <h2
              className={`hidden lg:block text-3xl sm:text-4xl lg:text-5xl leading-tight ${tenorSans.className}`}
              style={{
                color: "#1F2937",
                fontWeight: 400,
              }}
            >
              Why Mental{" "}
              <span className="relative inline-block">
                Wellbeing{" "}
                <Image
                  src="/assets/underline.svg"
                  alt=""
                  width={150}
                  height={5}
                  className="absolute -bottom-1 left-10"
                />
              </span>{" "}
              at Work Matters
            </h2>

            {/* Mobile Version - centered with underline under Matters */}
            <h2
              className={`lg:hidden text-3xl sm:text-4xl text-center leading-tight ${tenorSans.className}`}
              style={{
                color: "#1F2937",
                fontWeight: 400,
              }}
            >
              Why Mental Wellbeing at Work{" "}
              <span className="relative inline-block">
                Matters
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
              className="text-sm lg:text-base text-center lg:text-left leading-relaxed font-satoshi"
              style={{
                color: "#6B7280",
                fontWeight: 400,
                lineHeight: "1.75",
              }}
            >
              Mental wellbeing is a crucial predictor of general wellbeing and
              directly impacts their workplace efficacy, motivation and job
              satisfaction levels. The following statistics emphasize the
              importance of fostering mental wellbeing in the workplaces.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-7 bg-[#FFFFFF]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative p-8 border border-gray-600 transition-shadow duration-300"
                  style={{
                    boxShadow: "0px 4px 24px 0px #0000000F",
                  }}
                >
                  {/* Icon */}
                  <div className="relative w-20 h-20 mb-6 mx-auto">
                    {/* Ellipse Background */}
                    <div className="absolute inset-0">
                      <Image
                        src="/assets/ellipse-47.svg"
                        alt=""
                        width={80}
                        height={80}
                        className="w-full h-full"
                      />
                    </div>
                    {/* Leaf Icon on top */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={stat.icon}
                        alt=""
                        width={40}
                        height={40}
                        className="opacity-90"
                      />
                    </div>
                  </div>

                  {/* Percentage */}
                  <h3
                    className={`text-4xl lg:text-5xl mb-4 ${tenorSans.className}`}
                    style={{
                      color: "#1F2937",
                      fontWeight: 400,
                    }}
                  >
                    {stat.percentage}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm lg:text-base font-satoshi"
                    style={{
                      color: "#4B5563",
                      fontWeight: 400,
                      lineHeight: "1.6",
                    }}
                  >
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
