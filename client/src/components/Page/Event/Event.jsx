import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/event.jpg";

const Event = () => {
  return (
    <div className="bg-indigo-100 p-5 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center md:justify-end">
          <img
            className="w-full md:w-auto p-2 rounded-xl"
            src={image}
            alt="Cultural Image"
          />
        </div>
        <div>
          <div className="mt-5 md:mt-15 text-center">
            <p className="font-semibold text-xl">
              Register for the events you would <br />
              <span className="text-red-600 font-bold text-2xl">LOVE</span> to attend
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <ul className="list-disc">
              <li>
                <Link className="underline" to="./pastevents">
                  Past Events
                </Link>
              </li>
              <li>
                <Link className="underline" to="./upcomingevents">
                  Upcoming Events
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-purple-200 mt-10 text-xl p-5 md:p-10 font-semibold text-center rounded-sm">
            <p>Calling all alumni! We are excited to hear from you about the events you'd love to see on our calendar.</p>
            <p>Join us in making every alumni event a memorable experience!</p>
            <div className="flex justify-center mt-4">
              <button className="bg-black text-white px-4 py-2 rounded-2xl hover:bg-indigo-400 hover:text-white">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
