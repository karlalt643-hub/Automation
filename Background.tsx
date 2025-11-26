export function Background() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-[#0A0A0A] to-[#0A0A0A]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <FloatingOrbs />
    </>
  );
}

function FloatingOrbs() {
  return (
    <>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-[#FFEB3B]/20 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-xl animate-float"></div>
    </>
  );
}
