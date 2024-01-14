import { MdDarkMode, MdLightMode } from "react-icons/md";
interface ToggleProps {
  handleClick: () => void;
  dark: boolean;
}

const index = (props: ToggleProps) => {
  return (
    <div className="absolute top-0 right-[10px] md:right-[20%] max-w-7xl mx-auto">
      <button className="text-xl md:text-2xl py-4" onClick={props.handleClick}>
        {props.dark ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default index;
