import { RefCallBack } from "react-hook-form";

type RenderProps = {
  value: any;
  ref: RefCallBack;
  name: string;
  error?: string;
  messageError?: string;
  onBlur: () => void;
  onChange: (value: any) => void;
};

export type RegisterProps = {
  name: string;
  render: (props: RenderProps) => React.ReactElement;
};
