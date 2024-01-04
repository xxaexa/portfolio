import { portfolios } from "../../constant";
import Portfolio from "./Portfolio";
interface PortfoliosProps {
  dark: boolean;
}

const Portfolios = (props: PortfoliosProps) => {
  return (
    <section
      id="portfolio"
      className="mt-12 md:mt-32 md:max-w-7xl mx-auto  duration-500 ease-in-out "
    >
      <h2 className="mb-4 lg:mt-0 text-center medium-text">PORTFOLIO</h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {portfolios.map((portfolio, index) => (
          <div key={index}>
            <Portfolio {...portfolio} dark={props.dark} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Portfolios;
