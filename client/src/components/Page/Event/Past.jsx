// Past.jsx
import React, { useEffect, useState } from 'react';
import Pastprops from './Pastprops';
import placeholder from '../../../assets/event.jpg'; // use this if no image is returned

const Past = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchPastEvents = async () => {
      try {
        const res = await fetch('/api/pastevents');
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch past events:", error);
      }
    };
    fetchPastEvents();
  }, []);

  return (
    <>
      <div className='my-5 bg-indigo-400 flex flex-wrap justify-center font-semibold text-white p-2 text-xl'>
        Past Events
      </div>
      {events.map((event) => (
        <Pastprops
          key={event.id}
          title={event.title}
          description={event.description}
          image={event.image_url || placeholder}
        />
      ))}
    </>
  );
};

export default Past;
