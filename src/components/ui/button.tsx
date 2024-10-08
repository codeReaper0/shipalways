import {cn} from "@/lib/utils";
import {VariantProps, cva} from "class-variance-authority";
import {Loader} from "icons/index";
import {ButtonHTMLAttributes, FC} from "react";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center font-medium rounded-[40px] text-sm transition-color focus:outline-none disabled:pointer-events-none disabled:opacity-30",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        outlined: "bg-transparent border border-primary text-primary",
      },
      size: {
        default: "py-4 px-6",
        sm: "p-[10px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({variant, size, className}))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="mr-2 animate-spin">
          <Loader />
        </span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
