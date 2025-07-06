import React from "react";
import FadeInSection from "./FadeInSection";

const timelineData = [
  { title: "1st Prize at MET Enthusia Project Competition", content: "Secured 1st Prize 🏆", side: "left" },
  { title: "1st Prize at IEEE Project Competition", content: "Secured 1st Prize at IEEE Project competition among 91 teams 🏆", side: "right" },
];

const TimelineItem = ({ title, content, side }) => {
  const isLeft = side === "left";

  // Mobile timeline is always vertical with content on right
  return (
    <div className="relative flex w-full my-8">
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full">
        {/* Left side */}
        {isLeft && (
          <>
            <div className="w-1/2 pr-8 flex justify-end">
              <div className="bg-white border border-orange-500 p-4 rounded-xl shadow-md max-w-md">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-sm text-gray-600 mt-2">{content}</p>
              </div>
            </div>
            <div className="w-1/2"></div>
          </>
        )}

        {/* Right side */}
        {!isLeft && (
          <>
            <div className="w-1/2"></div>
            <div className="w-1/2 pl-8 flex justify-start">
              <div className="bg-white border border-orange-500 p-4 rounded-xl shadow-md max-w-md">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-sm text-gray-600 mt-2">{content}</p>
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Mobile Layout - Always vertical with content on right */}
      <div className="flex md:hidden w-full pl-6">
        <div className="w-full">
          <div className="bg-white border border-orange-500 p-4 rounded-xl shadow-md">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">{content}</p>
          </div>
        </div>
      </div>

      {/* The floating circle on center line */}
      <span className="absolute top-6 md:top-1/2 left-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow z-10"></span>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform md:-translate-x-1/2"></div>

      {timelineData.map((item, index) => (
        <FadeInSection key={index}>
          <TimelineItem
            title={item.title}
            content={item.content}
            side={index % 2 === 0 ? "left" : "right"}
          />
        </FadeInSection>
      ))}
    </div>
  );
};

export default Timeline;