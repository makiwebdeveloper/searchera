import { cn } from "../../lib/cn";

export default function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={cn(
        "bg-black/30 p-[16px] rounded-[20px] outline-none",
        className
      )}
    />
  );
}
