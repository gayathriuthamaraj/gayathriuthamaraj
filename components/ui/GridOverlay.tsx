export default function GridOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(122,155,118,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(122,155,118,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(46,74,61,0.15) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
