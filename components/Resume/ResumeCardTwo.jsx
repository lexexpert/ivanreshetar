import { useTheme } from "next-themes";
import resumeData from "../../data/resumeData";

const ResumeCardTwo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {resumeData.slice(0, 4).map((item, index) => (
        <a href={item.url || ""} key={item.title}>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-6xl text-[#F95054]">{item.icon}</div>
            <h4 className="text-5xl dark:text-white font-medium">
              {item.title}
            </h4>
          </div>
          {/* end flex */}

          {item.items.map((singleItem) => (
            <div
              className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
              style={{
                background: `${
                  theme === "dark" ? "transparent" : singleItem?.bg
                }`,
              }}
              key={singleItem.title}
            >
              <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                {singleItem.date}
              </span>
              <h3 className="text-xl dark:text-white"> {singleItem.title} </h3>
              <p className="dark:text-[#b7b7b7]">{singleItem.place}</p>
            </div>
          ))}
        </a>
      ))}
    </>
  );
};

export default ResumeCardTwo;