import { cva } from "class-variance-authority";
import { cn } from "../../lib/cn";

export const buttonVariants = cva("font-medium", {
  variants: {
    variant: {
      default: "bg-[#EDEDED] text-black",
      primary: "bg-primary text-black",
      secondary: "bg-black/30 text-white",
      link: "text-white flex items-center gap-[8px]",
      outline: "bg-transparent text-black border border-black",
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

export default function Button({ children, variant, className }) {
  return (
    <button className={cn(buttonVariants({ variant, className }))}>
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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
