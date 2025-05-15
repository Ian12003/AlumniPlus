import React, { useEffect, useState } from 'react';
import Upcomingprops from './Upcomingprops';
import placeholder from '../../../assets/event.png';
import locationIcon from '../../../assets/location.png';

const Upcoming = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/upcomingevents');
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch upcoming events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <div className='my-5 bg-indigo-400 flex flex-wrap justify-center font-semibold text-white p-2 text-xl'>
        Upcoming Events
      </div>
      {events.map((event) => {
        const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        const formattedTime = new Date(event.date).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        });

        return (
          <Upcomingprops
            key={event.id}
            title={event.title}
            description={event.description}
            eventImage={event.image_url || placeholder}
            location={locationIcon}
            venue={event.venue}
            time={formattedTime}
            date={formattedDate}
          />
        );
      })}
    </>
  );
};

export default Upcoming;
