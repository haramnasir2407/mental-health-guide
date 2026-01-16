export function MovingBanner() {
  return (
    <section
      className="relative overflow-hidden lg:py-6 py-4 border-t border-b border-gray-600"
      style={{
        background: "linear-gradient(93.75deg, #EFDBFF 30.42%, #ADC6FF 138.5%)",
      }}
    >
      <div className="flex whitespace-nowrap animate-[scroll_25s_linear_infinite]">
        {/* First set of messages */}
        <div className="flex items-center gap-12 px-8 lg:text-base text-sm font-satoshi font-light text-gray-800">
          <span>We&apos;re here to Help!</span>
          <span>You&apos;re not alone in this!</span>
          <span>We&apos;re with you every step!</span>
          <span>You don&apos;t have to face it alone!</span>
          <span>We&apos;re here to Help!</span>
          <span>You&apos;re not alone in this!</span>
          <span>We&apos;re with you every step!</span>
          <span>You don&apos;t have to face it alone!</span>
        </div>
        {/* Duplicate set for seamless infinite scroll */}
        <div className="flex items-center gap-12 px-8 lg:text-base text-sm font-satoshi font-light text-gray-800">
          <span>We&apos;re here to Help!</span>
          <span>You&apos;re not alone in this!</span>
          <span>We&apos;re with you every step!</span>
          <span>You don&apos;t have to face it alone!</span>
          <span>We&apos;re here to Help!</span>
          <span>You&apos;re not alone in this!</span>
          <span>We&apos;re with you every step!</span>
          <span>You don&apos;t have to face it alone!</span>
        </div>
      </div>
    </section>
  );
}
