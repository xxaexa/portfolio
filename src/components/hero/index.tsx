import Greeting from "./Greeting";
import Skills from "./Skills";
import Work from "./Work";
interface HeroProps {
  dark: boolean;
}
const index = (props: HeroProps) => {
  return (
    <div className="px-4 md:max-w-7xl mx-auto">
      <Greeting />
      <Skills dark={props.dark} />
      <Work dark={props.dark} />
    </div>
  );
};

export default index;
