import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="max-w-[1250px] mx-auto text-end py-8 px-4">
      <button
        className="text-2xl duration-500 ease-in-out"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </div>
  );
};

export default ToggleButton;
