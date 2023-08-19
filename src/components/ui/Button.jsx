import { cva } from "class-variance-authority";
import { cn } from "../../lib/cn";

export const buttonVariants = cva("font-medium transition", {
  variants: {
    variant: {
      default: "bg-[#EDEDED] text-black hover:bg-[#FFFFFF]",
      primary: "bg-primary text-black",
      secondary: "bg-black/30 text-white",
      link: "text-white flex items-center gap-[8px]",
      outline:
        "bg-transparent text-black border border-black hover:bg-black hover:text-white",
    },
    size: {
      lg: "px-[16px] py-[24px] rounded-[20px]",
      sm: "px-[16px] py-[12px] rounded-[12px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "lg",
  },
});

export default function Button({
  children,
  variant,
  size,
  className,
  ...props
}) {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children} {variant === "link" && <LinkIcon />}
    </button>
  );
}

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 6L18 18M18 18V10M18 18H10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
