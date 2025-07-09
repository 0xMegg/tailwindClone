import { Clock } from "lucide-react";

function Second({ n }: { n: number }) {
  const randomArr: number[] = Array.from({ length: n }, () => {
    return Math.floor(Math.random() * 3);
  });

  // grid로 바꾸기
  return (
    <div className="w-full max-w-[956px] flex gap-2 items-center">
      {Array.from({ length: n }, (_, i) => (
        <div key={i} className="relative w-[16%]">
          <img
            className="w-full h-[260px] object-cover rounded-2xl"
            src={`https://picsum.photos/470?random=${i + 3}`}
          />
          <div className="absolute top-1 left-1 flex items-center justify-center gap-1">
            <Clock className="text-white" size={20} />
            {randomArr[i] === 0 && (
              <p className="w-8 h-6 text-white border bg-red-500 rounded-md flex items-center justify-center text-xs">
                신작
              </p>
            )}
            {randomArr[i] === 1 && (
              <p className="w-8 h-6 text-white border bg-red-500 rounded-md flex items-center justify-center text-xs">
                UP
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Second;
