import { CommonProps } from "./types/Titles";

export function Title({ text, className }: CommonProps) {
  return (
    <h1 className={`text-3xl text-gray-950 font-bold ${className}`}>{text}</h1>
  );
}

export function Subtitle({ text, className }: CommonProps) {
  return (
    <h2 className={`text-xl text-gray-700 font-semibold ${className}`}>
      {text}
    </h2>
  );
}

export function Legend({ text, className }: CommonProps) {
  return (
    <h3 className={`text-xl text-gray-60000 font-medium ${className}`}>
      {text}
    </h3>
  );
}
