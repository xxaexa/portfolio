import { WrapperProps } from "../../types";

const ContentWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="max-w-[1250px] flex flex-col justify-center mx-auto px-4 py-16">
      {children}
    </div>
  );
};

export default ContentWrapper;
