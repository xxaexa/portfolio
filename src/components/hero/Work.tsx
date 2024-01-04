interface HeroProps {
  dark: boolean;
}

const Work = (props: HeroProps) => {
  console.log(props.dark === true);
  return (
    <div className="mt-12 md:my-52  duration-500 ease-in-out ">
      <div className="mx-auto">
        <h2 className="mb-4 lg:mt-0 text-center medium-text">
          WORK EXPERIENCE
        </h2>
        <div
          className={`flex small-text p-2 rounded-lg ${
            props.dark
              ? "hover:bg-gray-300 bg-gray-200"
              : "hover:bg-gray-800 bg-gray-700"
          }`}
        >
          <div className="w-1/2">
            <p>Frontend Web Developer</p>
            <p>PT. Cerise</p>
          </div>
          <div className="w-1/2 flex flex-col justify-end">
            <p className="text-right">Sept 2023</p>
            <p className="text-right">Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
