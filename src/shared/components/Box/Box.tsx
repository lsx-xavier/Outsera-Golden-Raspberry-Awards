import { boxStyles } from "./styles/Box";
import { BoxProps } from "./types/Box";

export function Box({ children, className }: BoxProps) {
  return <div className={boxStyles({ className })}>{children}</div>;
}
