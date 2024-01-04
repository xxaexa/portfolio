import { social } from "../../constant";

const index = () => {
  return (
    <div className="w-full h-12 mt-24 pb-12 items-center flex flex-col justify-center">
      <h1>Connect With Me</h1>
      <div className="flex justify-center space-x-6 my-4">
        {social.map((s) => (
          <a
            href={s.link}
            key={s.id}
            target="_blank"
            className="text-3xl hover:text-indigo-500 duration-500 ease-in-out"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
export default index;
