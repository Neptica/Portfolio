import { useState } from "react";
import TimeLine from "../timeline/timeline";

const borderRadius = 22;

const buttonStyles =
  "relative w-1/2 z-10 text-lg p-1 hover:text-orange-200 cursor-pointer";

const sliderStyles = `absolute left-0 top-0 z-0 w-1/2 h-full bg-white opacity-30 transition-all duration-300`;

type contentDatum = (string | string[])[][];

const workExp: contentDatum = [
  ["Summer 2025", ["Concordia Plans", "Junior Software Developer"]],
];

const education: contentDatum = [
  ["2023-2025", ["Bethany Lutheran College", "Mankato, Minnesota - GPA 3.91"]],
  [
    "2021-2023",
    ["Waubonsee Community College", "Sugar Grove, Illinois - GPA 4.0"],
  ],
];

const Experience = () => {
  const [bar, setBar] = useState(false);

  return (
    <div
      className={`border border-white rounded-[${borderRadius}px] overflow-hidden`}
    >
      <div className={`outline outline-white`}>
        <div className="relative">
          <button className={buttonStyles} onClick={() => setBar(false)}>
            Work
          </button>
          <button className={buttonStyles} onClick={() => setBar(true)}>
            Education
          </button>
          <div
            className={sliderStyles}
            style={{ transform: `translateX(${bar ? 100 : 0}%)` }} // shifts to second button
          ></div>
        </div>
      </div>
      <div className="flex justify-start w-full pt-4">
        <div style={{ display: bar ? "none" : "", width: "100%" }}>
          <TimeLine data={workExp} />
        </div>
        <div style={{ display: bar ? "" : "none", width: "100%" }}>
          <TimeLine data={education} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
