import Link from "next/link";
import Image from "next/image";
import { Tenor_Sans } from "next/font/google";

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden min-h-screen px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20"
        style={{
          background: "linear-gradient(116.19deg, #FFF0F6 0%, #D6E4FF 100%)",
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-160px)]">
            {/* Left Content */}
            <div className="relative flex flex-col justify-center space-y-6 lg:space-y-8 lg:pr-8">
              {/* Decorative Border */}
              <div className="absolute -top-5 right-20 w-60 h-50 border-t border-r border-r-gray-950 border-t-gray-950 opacity-100"></div>

              <p
                className="text-base lg:text-lg tracking-wide font-satoshi"
                style={{
                  color: "#6B7280",
                  fontWeight: 400,
                }}
              >
                For Your Well Being
              </p>

              <h1
                className={`text-6xl lg:text-7xl xl:text-8xl leading-[1.1] ${tenorSans.className}`}
                style={{
                  fontWeight: 400,
                  color: "#000000",
                  letterSpacing: "-0.02em",
                }}
              >
                Mental
                <br />
                Health
                <br />
                Guide
              </h1>

              <p
                className="text-sm lg:text-base leading-relaxed max-w-lg font-satoshi"
                style={{
                  color: "#6B7280",
                  fontWeight: 400,
                  lineHeight: "1.75",
                }}
              >
                This playbook intends to equip employees with strategies and
                best practices for promoting and prioritizing mental wellbeing
                within the workplace setting. This endeavor is representative of
                Carbonteq&apos;s commitment to providing a nurturing environment
                to its employees where their mental health needs are addressed.
              </p>

              <div className="flex flex-col space-y-6 mt-2">
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-medium transition-all hover:opacity-90 w-fit font-satoshi"
                  style={{
                    background: "#9254DE",
                    fontSize: "15px",
                  }}
                >
                  Get Started
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <div className="flex items-center gap-2">
                  <span
                    className="text-xs lg:text-sm font-satoshi"
                    style={{
                      color: "#9CA3AF",
                    }}
                  >
                    Powered by
                  </span>
                  <Image
                    src="/assets/carbonteq.svg"
                    alt="Carbonteq"
                    width={110}
                    height={22}
                    className="opacity-60"
                  />
                </div>
              </div>
            </div>

            {/* Right Decorative Elements */}
            <div className="relative h-[700px] hidden lg:block">
              {/* Gradient Ellipse Background */}
              <div className="w-full h-full absolute lg:top-[45%] lg:left-[45%] xl:top-1/2 xl:left-1/2 top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2 scale-110">
                <Image
                  src="/assets/gradient-ellipse.svg"
                  alt=""
                  fill
                  className="object-contain opacity-100"
                />
              </div>

              {/* Playbook */}
              <div className="absolute lg:top-[15%] lg:left-[8%] xl:top-[20%] xl:left-[10%] top-[10%] left-[5%] z-10">
                <Image
                  src="/assets/playbook.svg"
                  alt="Playbook"
                  width={120}
                  height={120}
                  className="drop-shadow-lg"
                />
              </div>

              {/* Top Right Circle with Flower */}
              <div className="absolute lg:top-[12%] lg:right-[20%] xl:top-[20%] xl:right-[35%] top-[5%] right-[5%] z-10">
                <Image
                  src="/assets/ellipse1_2.svg"
                  alt=""
                  width={200}
                  height={180}
                  className="opacity-100"
                />
              </div>
              <div className="absolute lg:top-[12%] lg:right-[20%] xl:top-[20%] xl:right-[35%] top-[5%] right-[5%] z-20">
                <div className="w-[200px] h-[200px] flex items-center justify-center">
                  <Image
                    src="/assets/flower1.svg"
                    alt=""
                    width={120}
                    height={120}
                  />
                </div>
              </div>

              {/* Cactus */}
              <div className="absolute lg:top-[30%] lg:right-[5%] xl:top-[28%] xl:right-[25%] top-[28%] right-[20%] z-20">
                <Image src="/assets/cactus.svg" alt="" width={50} height={50} />
              </div>

              {/* Middle Right Circle with Flower (Fern) */}
              <div className="absolute lg:top-[45%] lg:right-[5%] xl:top-[50%] xl:right-[20%] top-[50%] right-[20%] z-10">
                <Image
                  src="/assets/ellipse3.svg"
                  alt=""
                  width={180}
                  height={180}
                  className="opacity-100"
                />
              </div>
              <div className="absolute lg:top-[48%] lg:right-[12%] xl:top-[53%] xl:right-[25%] top-[53%] right-[25%] z-10">
                <Image
                  src="/assets/flower3.svg"
                  alt=""
                  width={100}
                  height={150}
                />
              </div>

              {/* Bottom Left Circle with Flower */}
              <div className="absolute lg:bottom-[22%] lg:left-[5%] xl:bottom-[20%] xl:left-[15%] bottom-[20%] left-[15%] z-10">
                <Image
                  src="/assets/ellipse1_2.svg"
                  alt=""
                  width={200}
                  height={180}
                  className="opacity-100"
                />
              </div>

              <div className="absolute lg:bottom-[25%] lg:left-[15%] xl:bottom-[22%] xl:left-[20%] bottom-[22%] left-[20%] z-10">
                <Image
                  src="/assets/flower2.svg"
                  alt=""
                  width={130}
                  height={130}
                />
              </div>

              {/* Cat Paw */}
              <div className="absolute lg:bottom-[13%] lg:right-[35%] xl:bottom-[10%] xl:right-[40%] bottom-[10%] right-[40%] z-20">
                <Image
                  src="/assets/cat-paw.svg"
                  alt=""
                  width={110}
                  height={110}
                  className="drop-shadow-lg"
                />
              </div>

              {/* Stars */}
              {/* <div className="absolute top-[3%] left-[28%] z-5">
                <Image
                  src="/assets/hero-star.svg"
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
              <div className="absolute top-[48%] right-[2%] z-5">
                <Image
                  src="/assets/hero-star.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <div className="absolute bottom-[20%] left-[2%] z-5">
                <Image
                  src="/assets/hero-star.svg"
                  alt=""
                  width={26}
                  height={26}
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
