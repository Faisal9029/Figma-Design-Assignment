export default function Section() {
  return (
    <div className="container mx-auto flex flex-col items-center px-4 md:px-6 lg:px-0 w-full lg:w-[1322px]">
      <div className="main-content w-full sm:w-[80%] md:w-[601px] h-auto pt-10 pb-10 md:pt-[40px] md:pb-[40px] text-center">
        <h3 className="text-[#23A6F0] text-[16px] font-bold">Welcome</h3>
        <h1 className="text-[32px] sm:text-[40px] md:text-[58px] font-bold text-white leading-[40px] sm:leading-[50px] md:leading-[80px] mt-4">
          Selling on the <br /> internet like a Pro
        </h1>
        <p className="text-white mt-4 text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[25px] md:leading-[30px]">
          We know how large objects will act, but things on a <br /> small scale
          just do not act that way.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-[20px] sm:mt-[30px] md:mt-[40px] justify-center items-center">
          <button className="bg-[#35A6F0] text-white font-bold px-6 py-3 md:px-10 md:py-4 rounded border border-white hover:bg-white hover:text-black hover:border-black transition-colors">
            Get Quote Now
          </button>
          <button className="border border-[#35A6F0] text-[#35A6F0] px-10 py-3 md:px-10 md:py-4 rounded hover:bg-[#35A6F0] hover:text-white hover:border-white transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
