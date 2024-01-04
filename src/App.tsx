import Footer from "./components/footer";
import Hero from "./components/hero";
import Portfolios from "./components/contents/Portfolios";
import Toggle from "./components/toggle/";
import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? "bg-white" : "bg-slate-900 text-white"} `}>
      <Toggle handleClick={handleClick} dark={isDark} />
      <Hero dark={isDark} />
      <Portfolios dark={isDark} />
      <Footer />
    </div>
  );
};

export default App;
