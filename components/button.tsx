import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "lime" | "ink" | "outline" | "outline-light";
  size?: "md" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  lime: "bg-lime text-ink hover:bg-brand-300",
  ink: "bg-ink text-canvas hover:bg-neutral-700 dark:bg-canvas dark:text-ink dark:hover:bg-neutral-200",
  outline:
    "border border-line text-foreground hover:border-foreground hover:bg-neutral-100 dark:hover:bg-neutral-900",
  "outline-light":
    "border border-white/25 text-canvas hover:border-lime hover:text-lime",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function Button({
  children,
  variant = "lime",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </a>
  );
}
