import React, { useEffect, useState } from "react";
import CommunityProps from "./CommunityProps";
import placeholder from '../../../assets/event.jpg'; // use this if no image is returned

const Community = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const res = await fetch("/api/communities");
        const data = await res.json();
        setCommunities(data);
      } catch (error) {
        console.error("Failed to load communities", error);
      }
    };

    fetchCommunities();
  }, []);

  return (
    <>
      <div className="my-5 bg-indigo-400 flex flex-wrap justify-center font-semibold text-white p-2 text-xl text-center">
        Communities and Clubs
      </div>

      {communities.map((community) => (
        <CommunityProps
          key={community.id}
          title={community.title}
          image={community.image_url || placeholder}
          description={community.description}
        />
      ))}
    </>
  );
};

export default Community;
