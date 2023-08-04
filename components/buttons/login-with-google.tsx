import React from "react";
import { FcGoogle } from "react-icons/fc";
import { cn } from "@/utils/cn";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const LoginWithGoogle: React.FC<Props> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "font-medium border-2 border-greyish-1 hover:bg-greyish-1/30 transition-colors rounded px-6 py-3 w-full",
        className
      )}
      {...props}
    >
      <FcGoogle className="inline-block mr-2.5 w-5 h-5" />
      Login with Google
    </button>
  );
};
