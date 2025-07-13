import { useState } from "react";
// import TimeLine from "../timeline/timeline";

const borderRadius = 22;

const buttonStyles =
  "relative w-1/2 z-10 text-lg p-1 hover:text-orange-200 cursor-pointer";

const sliderStyles = `absolute left-0 top-0 z-0 w-1/2 h-full bg-white opacity-30 transition-all duration-300`;

const Experience = () => {
  const [bar, setBar] = useState(false);

  return (
    <div
      className={`h-100 border border-white rounded-[${borderRadius}px] overflow-hidden`}
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
      <div style={{ display: bar ? "none" : "" }}>{/* <TimeLine /> */}</div>
      <div style={{ display: bar ? "" : "none" }}>education stuff</div>
    </div>
  );
};

export default Experience;
