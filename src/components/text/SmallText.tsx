import { TextProps } from "../../types";

const SmallText = ({ text, style }: TextProps) => {
  return (
    <div className={`text-sm md:text-lg font-medium ${style}`}>{text}</div>
  );
};

export default SmallText;
