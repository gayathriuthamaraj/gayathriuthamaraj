import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "muted" | "live" | "soon" | "wip";
};

const variantStyles: Record<string, string> = {
  default: "bg-moss/40 border-sage/20 text-sage-light",
  accent: "bg-walnut/30 border-walnut/40 text-beige",
  muted: "bg-forest-800/50 border-forest-600/20 text-beige-muted",
  live: "bg-sage-dark/30 border-sage/40 text-sage",
  soon: "bg-forest-800/40 border-forest-600/20 text-beige-muted",
  wip: "bg-walnut/20 border-walnut/30 text-beige-dark",
};

export default function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border tracking-wide transition-all duration-200",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
