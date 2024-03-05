import { WrapperProps } from "../../types";
import { useTheme } from "../../context/ThemeContext";

const MainWrapper = ({ children }: WrapperProps) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen duration-500 ease-linear ${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-white"
      }`}
    >
      {children}
    </div>
  );
};

export default MainWrapper;
