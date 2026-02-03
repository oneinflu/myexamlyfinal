
export function BackgroundDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div 
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#FFF6D2] opacity-50 blur-[100px]"
        aria-hidden="true"
      />
      <div 
        className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#FFF6D2] opacity-40 blur-[100px]"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#FFF6D2] opacity-40 blur-[100px]"
        aria-hidden="true"
      />
    </div>
  );
}
