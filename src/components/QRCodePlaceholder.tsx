/**
 * QR code fake, só pra ocupar o lugar visualmente.
 * Substituir pelo QR code real assim que o cliente enviar o arquivo do app.
 */
export function QRCodePlaceholder({ className = "" }: { className?: string }) {
  // padrão pseudo-aleatório fixo (determinístico, sem Math.random para não gerar hydration mismatch)
  const cells = [
    1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1,
    0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0,
    1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0,
  ];

  return (
    <div
      className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white p-4 ${className}`}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {/* Miolo pseudo-aleatório */}
        {cells.map((on, i) => {
          if (!on) return null;
          const col = i % 8;
          const row = Math.floor(i / 8);
          const x = 24 + col * 6;
          const y = 24 + row * 6;
          return <rect key={i} x={x} y={y} width={5} height={5} fill="#2a0f33" />;
        })}
        {/* Três "olhos" do QR code (cantos) */}
        {[
          [4, 4],
          [80, 4],
          [4, 80],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <rect x={x} y={y} width={16} height={16} fill="none" stroke="#2a0f33" strokeWidth={3} />
            <rect x={x + 5} y={y + 5} width={6} height={6} fill="#2a0f33" />
          </g>
        ))}
      </svg>
      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 rounded-full bg-roxo-950/85 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-champagne-200">
        Mock — QR em breve
      </span>
    </div>
  );
}
