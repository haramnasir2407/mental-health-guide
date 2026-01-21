import Link from "next/link";
import Image from "next/image";
import { Tenor_Sans } from "next/font/google";

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Animation styles
const floatAnimation = "animate-[float_6s_ease-in-out_infinite]";
const floatDelayAnimation = "animate-[float_6s_ease-in-out_infinite_2s]";
const pulseSlowAnimation = "animate-[pulse_4s_ease-in-out_infinite]";
const rotateSlowAnimation = "animate-[rotate_20s_linear_infinite]";
const bobAnimation = "animate-[bob_4s_ease-in-out_infinite]";
const bobDelayAnimation = "animate-[bob_4s_ease-in-out_infinite_1s]";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden min-h-screen px-6 pt-10 pb-8 sm:px-8 sm:py-16"
      style={{
        background: "linear-gradient(116.19deg, #FFF0F6 0%, #D6E4FF 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-160px)]">
          {/* Left Content */}
          <div className="relative flex flex-col justify-center space-y-6 lg:space-y-8">
            {/* Decorative Border */}
            <div className="hidden lg:block absolute -top-5 right-20 w-60 h-50 border-t border-r border-r-gray-950 border-t-gray-950 opacity-100"></div>
            
            {/* Decorative Border mobile */}
            <div className="lg:hidden absolute -top-6 left-1 w-30 h-30 border-t border-l border-l-gray-950 border-t-gray-950 opacity-100"></div>

            <p
              className="text-lg tracking-wide font-satoshi sm:text-left text-center"
              style={{
                color: "#6B7280",
                fontWeight: 400,
              }}
            >
              For Your Well Being
            </p>

            <h1
              className={`lg:hidden text-4xl sm:text-5xl text-center leading-tight ${tenorSans.className}`}
              style={{
                fontWeight: 400,
                color: "#000000",
              }}
            >
              Mental <br /> Health Guide
            </h1>

            <h1
              className={`hidden lg:block text-4xl sm:text-5xl lg:text-7xl xl:text-8xl leading-[1.1] ${tenorSans.className}`}
              style={{
                fontWeight: 400,
                color: "#000000",
              }}
            >
              Mental
              <br />
              Health
              <br />
              Guide
            </h1>

            {/* Mobile Decorative Elements */}
            <div className="relative h-[280px] lg:hidden my-8 mx-auto max-w-[400px] w-full">
              {/* Gradient Ellipse Background */}
              <div
                className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-140 ${pulseSlowAnimation}`}
              >
                <Image
                  src="/assets/gradient-ellipse.svg"
                  alt=""
                  width={300}
                  height={300}
                  className="object-contain opacity-100"
                />
              </div>

              {/* Top Left - Star */}
              <div
                className={`absolute top-[5%] left-[13%] z-10 ${rotateSlowAnimation}`}
              >
                <Image
                  src="/assets/hero-star.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>

              {/* Top Center - Playbook */}
              <div
                className={`absolute top-[10%] left-[20%] z-10 ${floatAnimation}`}
              >
                <Image
                  src="/assets/playbook.svg"
                  alt="Playbook"
                  width={60}
                  height={60}
                  className="drop-shadow-lg"
                />
              </div>

              {/* Top Right - Flower in Circle */}
              <div
                className={`absolute top-[5%] right-[28%] z-10 ${pulseSlowAnimation}`}
              >
                <Image
                  src="/assets/ellipse1_2.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="opacity-100"
                />
              </div>
              <div
                className={`absolute top-[5%] right-[28%] z-20 ${bobAnimation}`}
              >
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/assets/flower1.svg"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
              </div>

              {/* Middle Right - Cactus */}
              <div
                className={`absolute top-[30%] right-[18%] z-20 ${floatDelayAnimation}`}
              >
                <Image src="/assets/cactus.svg" alt="" width={30} height={30} />
              </div>

              {/* Center Left - Flower in Circle */}
              <div
                className={`absolute top-[45%] left-[10%] z-10 ${pulseSlowAnimation}`}
              >
                <Image
                  src="/assets/ellipse1_2.svg"
                  alt=""
                  width={110}
                  height={110}
                  className="opacity-100"
                />
              </div>
              <div
                className={`absolute top-[45%] left-[10%] z-20 ${bobAnimation}`}
              >
                <div className="w-[110px] h-[110px] flex items-center justify-center">
                  <Image
                    src="/assets/flower2.svg"
                    alt=""
                    width={70}
                    height={70}
                  />
                </div>
              </div>

              {/* Center - Fern in Circle */}
              <div
                className={`absolute top-[52%] right-[18%] z-10 ${pulseSlowAnimation}`}
              >
                <Image
                  src="/assets/ellipse3.svg"
                  alt=""
                  width={90}
                  height={90}
                  className="opacity-100"
                />
              </div>
              <div
                className={`absolute top-[55%] right-[23%] z-15 ${bobDelayAnimation}`}
              >
                <Image
                  src="/assets/flower3.svg"
                  alt=""
                  width={50}
                  height={75}
                />
              </div>

              {/* Bottom Center - Cat Paw */}
              <div
                className={`absolute bottom-[8%] right-[35%] -translate-x-1/2 z-20 ${bobAnimation}`}
              >
                <Image
                  src="/assets/cat-paw.svg"
                  alt=""
                  width={60}
                  height={60}
                  className="drop-shadow-lg"
                />
              </div>

              {/* Bottom Left - Star */}
              <div
                className={`absolute bottom-[40%] right-[10%] z-30 ${rotateSlowAnimation}`}
              >
                <Image src="/assets/star2.svg" alt="" width={22} height={22} />
              </div>
            </div>

            <p
              className="text-sm lg:text-base leading-relaxed max-w-lg font-satoshi text-center lg:text-left"
              style={{
                color: "#6B7280",
                fontWeight: 400,
                lineHeight: "1.75",
              }}
            >
              This playbook intends to equip employees with strategies and best
              practices for promoting and prioritizing mental wellbeing within
              the workplace setting. This endeavor is representative of
              Carbonteq&apos;s commitment to providing a nurturing environment
              to its employees where their mental health needs are addressed.
            </p>

            <div className="flex flex-row items-center space-x-2 lg:space-x-4">
              <Link
                href="/docs"
                className="group inline-flex items-center justify-center gap-2 lg:px-8 px-3 lg:py-3.5 py-2 rounded-md sm:rounded-lg text-white font-base transition-all hover:opacity-90 w-fit font-satoshi text-xs lg:text-lg hover:bg-[#7A39B8]"
                style={{
                  background: "#9254DE",
                }}
              >
                Get Started
                {/* Arrow translates right on hover/press */}
                <Image
                  src="/assets/ArrowRightOutlined.svg"
                  alt="Arrow Right"
                  width={15}
                  height={15}
                  className="transition-transform duration-200 ease-out group-hover:translate-x-1 group-active:translate-x-1"
                />
              </Link>

              {/* Powered by Carbonteq - Desktop aligned at border end */}
              <div className="hidden lg:flex items-center gap-2">
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

              {/* Powered by Carbonteq - Mobile only */}
              <div className="lg:hidden flex items-center gap-2 ml-auto">
                <span
                  className="text-xs font-satoshi"
                  style={{
                    color: "#9CA3AF",
                  }}
                >
                  Powered by
                </span>
                <Image
                  src="/assets/carbonteq.svg"
                  alt="Carbonteq"
                  width={80}
                  height={18}
                  className="opacity-60"
                />
              </div>

              <Image
                src="/assets/arrow.svg"
                alt=""
                width={8}
                height={8}
                className="ml-2 opacity-60"
              />
            </div>
          </div>

          {/* Right Decorative Elements */}
          <div className="relative h-[700px] hidden lg:block">
            {/* Gradient Ellipse Background */}
            <div
              className={`w-full h-full absolute lg:top-[45%] lg:left-[45%] xl:top-1/2 xl:left-1/2 top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2 scale-110 ${pulseSlowAnimation}`}
            >
              <Image
                src="/assets/gradient-ellipse.svg"
                alt=""
                fill
                className="object-contain opacity-100"
              />
            </div>

            {/* Playbook */}
            <div
              className={`absolute lg:top-[15%] lg:left-[5%] xl:top-[20%] xl:left-[20%] top-[10%] left-[5%] z-10 ${floatAnimation}`}
            >
              <Image
                src="/assets/playbook.svg"
                alt="Playbook"
                width={120}
                height={120}
                className="drop-shadow-lg"
              />
            </div>

            {/* Top Right Circle with Flower */}
            <div
              className={`absolute lg:top-[12%] lg:right-[15%] xl:top-[18%] xl:right-[32%] top-[5%] right-[5%] z-10 ${pulseSlowAnimation}`}
            >
              <Image
                src="/assets/ellipse1_2.svg"
                alt=""
                width={200}
                height={180}
                className="opacity-100"
              />
            </div>
            <div
              className={`absolute lg:top-[12%] lg:right-[15%] xl:top-[18%] xl:right-[32%] top-[5%] right-[5%] z-20 ${bobAnimation}`}
            >
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
            <div
              className={`absolute lg:top-[30%] lg:right-[2%] xl:top-[32%] xl:right-[22%] top-[28%] right-[20%] z-20 ${floatDelayAnimation}`}
            >
              <Image src="/assets/cactus.svg" alt="" width={50} height={50} />
            </div>

            {/* Middle Right Circle with Flower (Fern) */}
            <div
              className={`absolute lg:top-[45%] lg:right-[0%] xl:top-[50%] xl:right-[20%] top-[50%] right-[20%] z-10 ${pulseSlowAnimation}`}
            >
              <Image
                src="/assets/ellipse3.svg"
                alt=""
                width={180}
                height={180}
                className="opacity-100"
              />
            </div>
            <div
              className={`absolute lg:top-[48%] lg:right-[8%] xl:top-[53%] xl:right-[25%] top-[53%] right-[25%] z-10 ${bobDelayAnimation}`}
            >
              <Image
                src="/assets/flower3.svg"
                alt=""
                width={100}
                height={150}
              />
            </div>

            {/* Bottom Left Circle with Flower */}
            <div
              className={`absolute lg:bottom-[25%] lg:left-[5%] xl:bottom-[20%] xl:left-[15%] bottom-[20%] left-[15%] z-10 ${pulseSlowAnimation}`}
            >
              <Image
                src="/assets/ellipse1_2.svg"
                alt=""
                width={200}
                height={180}
                className="opacity-100"
              />
            </div>

            <div
              className={`absolute lg:bottom-[28%] lg:left-[15%] xl:bottom-[25%] xl:left-[20%] bottom-[25%] left-[20%] z-10 ${floatAnimation}`}
            >
              <Image
                src="/assets/flower2.svg"
                alt=""
                width={130}
                height={130}
              />
            </div>

            {/* Cat Paw */}
            <div
              className={`absolute lg:bottom-[13%] lg:right-[30%] xl:bottom-[10%] xl:right-[40%] bottom-[10%] right-[40%] z-20 ${bobAnimation}`}
            >
              <Image
                src="/assets/cat-paw.svg"
                alt=""
                width={110}
                height={110}
                className="drop-shadow-lg"
              />
            </div>

            {/* Stars */}
            <div
              className={`absolute top-[15%] left-[15%] z-5 ${rotateSlowAnimation}`}
            >
              <Image
                src="/assets/hero-star.svg"
                alt=""
                width={30}
                height={30}
              />
            </div>
            <div
              className={`absolute top-[48%] right-[20%] z-30 ${rotateSlowAnimation}`}
            >
              <Image src="/assets/star2.svg" alt="" width={35} height={35} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
