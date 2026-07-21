// Very subtle ambient background: grid, radial blobs, grain.
export default function Background() {
  return (
    <>
      {/* Grid pattern */}
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 90% 60% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      {/* Soft accent blobs */}
      <div
        aria-hidden
        className="fixed left-1/2 top-[-10%] z-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full pointer-events-none blur-[120px]"
        style={{ background: "rgba(34,211,238,0.06)" }}
      />
      <div
        aria-hidden
        className="fixed right-[-10%] top-[40%] z-0 h-[400px] w-[400px] rounded-full pointer-events-none blur-[130px]"
        style={{ background: "rgba(99,102,241,0.05)" }}
      />
      {/* Grain */}
      <div className="grain-overlay animate-grain" aria-hidden />
    </>
  );
}
