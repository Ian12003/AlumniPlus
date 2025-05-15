import React from "react";
import Boards from "./Boards";
import gift from "../../../assets/icon_gift.png";
import calendar from "../../../assets/icon_calender.png";
import chat from "../../../assets/icon_chat.png";
import blog from "../../../assets/icon_blog.png";

const Board = () => {
  const features = [
    {
      image: calendar,
      name: "Events",
      description: "Let's meet once again to engage, learn and celebrate.",
    },
    {
      image: gift,
      name: "Donation",
      description: "Support using gifts for Alumni.",
    },
    {
      image: chat,
      name: "Community",
      description: "Explore Communities.",
    },
    {
      image: blog,
      name: "Blog",
      description: "Share your thoughts and ideas.",
    },
  ];

  return (
    <div className=" py-10 px-4">
      <h2 className="text-3xl text-center font-bold text-indigo-600 mb-10 ">
        Alumni Engagement
      </h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {features.map((item, index) => (
          <Boards
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
