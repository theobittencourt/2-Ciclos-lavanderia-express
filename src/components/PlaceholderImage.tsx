import { ImageIcon } from "lucide-react";

/**
 * Placeholder visual para substituir por foto real depois.
 * Uso: <PlaceholderImage label="Interior da loja - vista frontal" className="aspect-video" />
 */
export function PlaceholderImage({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-roxo-800 via-roxo-700 to-roxo-900 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--color-champagne-400) 0, var(--color-champagne-400) 1px, transparent 1px, transparent 12px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <ImageIcon className="h-8 w-8 text-champagne-300/80" strokeWidth={1.5} />
        <span className="max-w-[220px] text-xs font-medium tracking-wide text-champagne-100/90">
          {label}
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-champagne-300/60">
          Substituir por foto real
        </span>
      </div>
    </div>
  );
}
