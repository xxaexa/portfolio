interface PortfolioProps {
  title: string;
  description: string;
  tags: JSX.Element[];
  live: string;
  code?: string;
  dark: boolean;
  android?: string;
}

const Portfolio = ({
  title,
  description,
  tags,
  live,
  dark,
  android,
}: PortfolioProps) => {
  return (
    <section className="flex justify-between mx-auto bg-opacity-10  hover:bg-opacity-40 overflow-hidden px-4 my-6 md:my-0">
      <div
        className={`w-full p-2 rounded-lg ${
          dark
            ? "hover:bg-gray-300 bg-gray-200"
            : "hover:bg-gray-800 bg-gray-700"
        }`}
      >
        <div className="flex flex-col">
          <h3 className="medium-text">{title}</h3>
          <p className="mt-2 small-text">{description}</p>

          <div className="flex flex-row gap-4">
            <div className="flex space-x-2">
              <a
                href={live}
                target="_blank"
                className="w-fit rounded-lg  bg-indigo-500 text-center px-3 py-1 text-white hover:bg-indigo-100 hover:text-black tracking-widest duration-500 ease-in-out my-4 small-text"
              >
                WEB
              </a>
            </div>

            {android && (
              <div className="flex  space-x-2">
                <a
                  href={android}
                  target="_blank"
                  className="w-fit rounded-lg  bg-indigo-500 text-center px-3 py-1 text-white hover:bg-indigo-100 hover:text-black tracking-widest duration-500 ease-in-out my-4 small-text"
                >
                  ANDROID
                </a>
              </div>
            )}
          </div>
        </div>

        <ul className="flex gap-2">
          {tags.map((tag, index) => (
            <li className="header-text" key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Portfolio;
