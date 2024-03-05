import { WrapperProps } from "../../types";
import { useTheme } from "../../context/ThemeContext";

const BoxWrapper = ({ children }: WrapperProps) => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full rounded-lg p-8 ${
        theme === "dark"
          ? "hover:bg-gray-800 bg-gray-700"
          : "hover:bg-gray-300 bg-gray-200"
      }`}
    >
      {children}
    </div>
  );
};

export default BoxWrapper;
