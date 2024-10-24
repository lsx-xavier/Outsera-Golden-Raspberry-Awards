export function keepOnlyNumbers(number: string | number) {
  return number ? String(number).replace(/\D+/g, "") : "";
}
