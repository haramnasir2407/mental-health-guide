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
      className="relative overflow-hidden px-6 pt-10 pb-8 sm:px-8 sm:py-16 lg:px-12 lg:py-14 xl:px-14 2xl:px-16 xl:py-16 2xl:py-18 border-t border-gray-950"
      style={{
        background: "linear-gradient(116.19deg, #FFF0F6 0%, #D6E4FF 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 items-center min-h-[calc(100vh-160px)]">
          {/* Left Content */}
          <div className="relative flex flex-col justify-center space-y-6 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
            {/* Decorative Border */}
            <div className="hidden lg:block absolute lg:-top-3 xl:-top-4 2xl:-top-5 lg:right-10 xl:right-14 2xl:right-20 lg:w-48 xl:w-52 2xl:w-60 h-50 border-t border-r border-r-gray-950 border-t-gray-950 opacity-100"></div>

            {/* Decorative Border mobile */}
            <div className="lg:hidden absolute -top-4 left-1 w-30 h-30 border-t border-l border-l-gray-950 border-t-gray-950 opacity-100"></div>

            <p
              className="text-lg tracking-wide font-satoshi lg:text-left text-center"
              style={{
                color: "#1A1A1A",
                fontWeight: 400,
              }}
            >
              For Your Well Being
            </p>

            <h1
              className={`lg:hidden text-4xl sm:text-5xl text-center leading-tight ${tenorSans.className}`}
              style={{
                fontWeight: 400,
                color: "#1A1A1A",
              }}
            >
              Mental <br /> Health Guide
            </h1>

            <h1
              className={`hidden lg:block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] ${tenorSans.className}`}
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
            <div className="relative h-[320px] lg:hidden my-8 mx-auto max-w-[400px] w-full">
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
                  width={80}
                  height={80}
                  className="opacity-100"
                />
              </div>
              <div
                className={`absolute top-[4%] right-[26%] z-20 ${bobAnimation}`}
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
                  width={90}
                  height={90}
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
                    width={60}
                    height={60}
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
                  width={80}
                  height={80}
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
              className="text-base lg:text-lg leading-relaxed lg:max-w-md xl:max-w-[480px] 2xl:max-w-lg font-satoshi text-center lg:text-left"
              style={{
                color: "#1A1A1A",
                fontWeight: 300,
                lineHeight: "1.75",
              }}
            >
              This playbook intends to equip employees with strategies and best
              practices for promoting and prioritizing mental wellbeing within
              the workplace setting. This endeavor is representative of
              Carbonteq&apos;s commitment to providing a nurturing environment
              to its employees where their mental health needs are addressed.
            </p>

            <div className="flex flex-row items-center space-x-2 lg:space-x-3 xl:space-x-2 2xl:space-x-4">
              <Link
                href="/docs"
                className="group inline-flex items-center justify-center gap-2 px-3 lg:px-6 xl:px-6 2xl:px-8 py-2 lg:py-3 xl:py-2.5 2xl:py-3.5 rounded-md text-white font-base transition-all hover:opacity-90 w-fit font-satoshi text-xs lg:text-base xl:text-sm 2xl:text-lg hover:bg-[#7A39B8] whitespace-nowrap"
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

              {/* Powered by Carbonteq - Mobile only */}
              <div className="lg:hidden flex flex-col items-end gap-1 ml-auto sm:flex-row sm:items-center sm:gap-2">
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
                />
              </div>

              <Image
                src="/assets/arrow.svg"
                alt=""
                width={8}
                height={8}
                className="ml-2 opacity-60 lg:hidden"
              />
            </div>

            {/* Powered by Carbonteq - Desktop aligned at border's vertical line */}
            <div className="hidden lg:flex items-center gap-2 absolute lg:right-10 xl:right-14 2xl:right-20 lg:top-[520px] xl:top-[600px] 2xl:top-[580px] whitespace-nowrap">
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
              />
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
          <div className="relative lg:h-[550px] xl:h-[600px] 2xl:h-[700px] hidden lg:block">
            {/* Gradient Ellipse Background */}
            <div
              className={`w-full h-full absolute lg:top-[48%] lg:left-[48%] xl:top-[48%] xl:left-[48%] 2xl:top-1/2 2xl:left-1/2 -translate-x-1/2 -translate-y-1/2 lg:scale-100 xl:scale-105 2xl:scale-110 ${pulseSlowAnimation}`}
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
              className={`absolute lg:top-[23%] lg:left-[20%] xl:top-[24%] xl:left-[20%] z-10 ${floatAnimation}`}
            >
              <Image
                src="/assets/playbook.svg"
                alt="Playbook"
                className="lg:w-[90px] lg:h-[90px] xl:w-[120px] xl:h-[120px] drop-shadow-lg"
                width={120}
                height={120}
              />
            </div>

            {/* Top Right Circle with Flower */}
            <div
              className={`absolute lg:top-[15%] lg:right-[20%] xl:top-[18%] xl:right-[28%] z-10 ${pulseSlowAnimation}`}
            >
              <Image
                src="/assets/ellipse1_2.svg"
                alt=""
                className="lg:w-[150px] lg:h-[160px] xl:w-[160px] xl:h-[180px] opacity-100"
                width={200}
                height={180}
              />
            </div>
            <div
              className={`absolute lg:top-[15%] lg:right-[20%] xl:top-[18%] xl:right-[28%] z-20 ${bobAnimation}`}
            >
              <div className="lg:w-[160px] lg:h-[160px] xl:w-[180px] xl:h-[180px] flex items-center justify-center">
                <Image
                  src="/assets/flower1.svg"
                  alt=""
                  className="lg:w-[95px] lg:h-[95px] xl:w-[100px] xl:h-[120px]"
                  width={120}
                  height={120}
                />
              </div>
            </div>

            {/* Cactus */}
            <div
              className={`absolute lg:top-[32%] lg:right-[8%] xl:top-[35%] xl:right-[20%] z-20 ${floatDelayAnimation}`}
            >
              <Image 
                src="/assets/cactus.svg" 
                alt="" 
                className="lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]"
                width={50} 
                height={50} 
              />
            </div>

            {/* Middle Right Circle with Flower (Fern) */}
            <div
              className={`absolute lg:top-[50%] lg:right-[8%] xl:top-[50%] xl:right-[16%] 2xl:top-[50%] 2xl:right-[20%] z-10 ${pulseSlowAnimation}`}
            >
              <Image
                src="/assets/ellipse3.svg"
                alt=""
                className="lg:w-[150px] lg:h-[150px] xl:w-[165px] xl:h-[165px] 2xl:w-[180px] 2xl:h-[180px] opacity-100"
                width={180}
                height={180}
              />
            </div>
            <div
              className={`absolute lg:top-[52%] lg:right-[14%] xl:top-[52%] xl:right-[21%] 2xl:top-[53%] 2xl:right-[25%] z-10 ${bobDelayAnimation}`}
            >
              <Image
                src="/assets/flower3.svg"
                alt=""
                className="lg:w-[80px] lg:h-[120px] xl:w-[90px] xl:h-[135px] 2xl:w-[100px] 2xl:h-[150px]"
                width={100}
                height={150}
              />
            </div>

            {/* Bottom Left Circle with Flower */}
            <div
              className={`absolute lg:bottom-[22%] lg:left-[16%] xl:bottom-[22%] xl:left-[18%] 2xl:bottom-[20%] 2xl:left-[15%] z-10 ${pulseSlowAnimation}`}
            >
              <Image
                src="/assets/ellipse1_2.svg"
                alt=""
                className="lg:w-[160px] lg:h-[160px] xl:w-[175px] xl:h-[170px] 2xl:w-[200px] 2xl:h-[180px] opacity-100"
                width={200}
                height={180}
              />
            </div>

            <div
              className={`absolute lg:bottom-[25%] lg:left-[20%] xl:bottom-[25%] xl:left-[22%] 2xl:bottom-[25%] 2xl:left-[20%] z-10 ${floatAnimation}`}
            >
              <Image
                src="/assets/flower2.svg"
                alt=""
                className="lg:w-[105px] lg:h-[105px] xl:w-[115px] xl:h-[115px] 2xl:w-[130px] 2xl:h-[130px]"
                width={130}
                height={130}
              />
            </div>

            {/* Cat Paw */}
            <div
              className={`absolute lg:bottom-[12%] lg:right-[34%] xl:bottom-[12%] xl:right-[38%] 2xl:bottom-[10%] 2xl:right-[40%] z-20 ${bobAnimation}`}
            >
              <Image
                src="/assets/cat-paw.svg"
                alt=""
                className="lg:w-[85px] lg:h-[85px] xl:w-[95px] xl:h-[95px] 2xl:w-[110px] 2xl:h-[110px] drop-shadow-lg"
                width={110}
                height={110}
              />
            </div>

            {/* Stars */}
            <div
              className={`absolute lg:top-[18%] lg:left-[18%] xl:top-[18%] xl:left-[16%] 2xl:top-[15%] 2xl:left-[15%] z-5 ${rotateSlowAnimation}`}
            >
              <Image
                src="/assets/hero-star.svg"
                alt=""
                className="lg:w-[24px] lg:h-[24px] xl:w-[27px] xl:h-[27px] 2xl:w-[30px] 2xl:h-[30px]"
                width={30}
                height={30}
              />
            </div>
            <div
              className={`absolute lg:top-[48%] lg:right-[10%] xl:top-[48%] xl:right-[16%] 2xl:top-[48%] 2xl:right-[20%] z-30 ${rotateSlowAnimation}`}
            >
              <Image 
                src="/assets/star2.svg" 
                alt="" 
                className="lg:w-[28px] lg:h-[28px] xl:w-[31px] xl:h-[31px] 2xl:w-[35px] 2xl:h-[35px]"
                width={30} 
                height={30} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
