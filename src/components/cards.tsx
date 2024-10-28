export default function Cards() {
  return (
    <main>
      <div className="lg:mt-14 flex flex-col sm:flex-row md:flex-wrap lg:flex-row space-y-7 sm:space-y-0 sm:space-x-7 md:gap-2.5 lg:space-x-7 my-8 justify-center items-center">
        <div className="card w-[90%] sm:w-[45%] md:w-[328px] h-[292px] px-6 py-8 sm:px-10 sm:py-9 bg-white flex flex-col justify-center gap-5 hover:cursor-pointer shadow-lg shadow-slate-300/20 hover:shadow-none hover:-translate-y-6 ">
          <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded-[10px]"></div>
          <h2 className="font-bold text-[#252B42]">Training Courses</h2>
          <div className="h-[2px] w-[50px] bg-[#E74040]"></div>
          <p className="text-[#737373] text-[14px] w-[222px] tracking-wide">
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </p>
        </div>

        <div className="card w-[90%] sm:w-[45%] md:w-[328px] h-[292px] px-6 py-8 sm:px-10 sm:py-9 bg-white flex flex-col justify-center gap-5 hover:cursor-pointer shadow-lg shadow-slate-300/20 hover:shadow-none hover:-translate-y-6">
          <div className="w-[70px] h-[76px] bg-[#B9EAA8] rounded-[10px]"></div>
          <h2 className="font-bold text-[#252B42]">2,769 Online Courses</h2>
          <div className="h-[2px] w-[50px] bg-[#E74040]"></div>
          <p className="text-[#737373] text-[14px] w-[222px] tracking-wide">
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </p>
        </div>

        <div className="card w-[90%] sm:w-[45%] md:w-[328px] h-[292px] md:mt-10 px-6 py-8 sm:px-10 sm:py-9 bg-[#23A6F0] flex flex-col justify-center gap-5 hover:cursor-pointer shadow-lg shadow-slate-300/20 hover:shadow-none hover:-translate-y-6">
          <div className="w-[70px] h-[76px] bg-white rounded-[10px]"></div>
          <h2 className="font-bold text-white">Training Courses</h2>
          <div className="h-[2px] w-[50px] bg-[#E74040]"></div>
          <p className="text-white text-[14px] w-[222px] tracking-wide">
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </p>
        </div>
      </div>
    </main>
  );
}
