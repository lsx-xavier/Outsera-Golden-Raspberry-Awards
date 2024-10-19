export type OptionItemDto = {
  text: string;
  value: string | boolean | undefined;
};
export type OptionItemBySectionProps = {
  textSection?: string;
  options: OptionItemDto[];
};
