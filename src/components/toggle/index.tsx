import { MdDarkMode, MdLightMode } from "react-icons/md";
interface ToggleProps {
  handleClick: () => void;
  dark: boolean;
}

const index = (props: ToggleProps) => {
  return (
    <div className="max-w-7xl px-4 mx-auto flex justify-end">
      <button className="text-xl md:text-2xl mt-2" onClick={props.handleClick}>
        {props.dark ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default index;
