import { ArrowRight } from "lucide-react";

function Banner() {
  return (
    <div className="w-full max-w-[956px] flex h-12 items-center justify-between px-6 font-semibold bg-gray-200 rounded-2xl">
      <div className="flex items-center gap-4">
        <img className="w-10 rounded-full" src="img.jpg" alt="" />
        <p>#럭키위크 #마지막 캐시 선물!</p>
      </div>
      <button className="right">
        <ArrowRight />
      </button>
    </div>
  );
}

export default Banner;
