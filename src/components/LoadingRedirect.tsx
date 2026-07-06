import { useEffect } from "react";

export const LoadingRedirect = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace("https://www.gopancham.com/");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#01224B] text-white">
      <div className="text-center px-6">
        <div className="mb-8">
          <div className="w-16 h-16 border-4 border-[#FFB002] border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
          Loading...
        </h1>
        <p className="text-white/70 text-sm md:text-base">
          Redirecting you to GoPancham
        </p>
      </div>
    </div>
  );
};

export default LoadingRedirect;
