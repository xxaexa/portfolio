import { TextProps } from "../../types";

const LargeText = ({ text, style }: TextProps) => {
  return (
    <div className={`mb-2 text-center text-xl md:text-2xl ${style}`}>
      {text}
    </div>
  );
};

export default LargeText;
