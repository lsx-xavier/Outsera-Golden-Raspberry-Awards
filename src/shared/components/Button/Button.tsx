import { buttonStyle } from "./styles/Button";
import { ButtonsProps } from "./types/Buttons";

export function Button({ children, className, ...props }: ButtonsProps) {
  return (
    <button
      {...props}
      className={buttonStyle({
        className,
      })}
    >
      {children}
    </button>
  );
}
