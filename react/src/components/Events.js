import React, { useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

import EventForm from "./EventForm";
import DeleteEvent from "./DeleteEvent";
import FindEvent from "./FindEvent";
import FavoriteEvent from "./FavoriteEvent";

const Events = () => {
  // mock State
  const event1 = {
    id: "1",
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
  };

  const event2 = {
    id: "2",
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
  };

  const event3 = {
    id: "3",
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
  };
  const [events, setEvents] = useState([event1, event2, event3]);
  const [favoriteEvents, setFavoriteEvents] = useState([]);
  const [toggleFavPage, setToggleFavPage] = useState(false);

  //add event ... this method goes to child -- child to parent update
  const handleSubmitAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  // delete event
  const handleDeleteEvent = (deleteId) => {
    const deleteEvent = events.filter((event) => event.id !== deleteId);
    setEvents(deleteEvent);
  };

  //Search Event
  const handleSearchEvent = (category, date) => {
    //debugger;
    const findEvent = events.filter(
      (event) => event.category === category || event.date === date
    );
    setEvents(findEvent);
  };

  const handleToggleFavPage = () => {
    setToggleFavPage(!toggleFavPage);
  };

  const toggleFav = (event) => {
    const eventId = event.id;
    if (favoriteEvents.includes(eventId)) {
      // remove from fav
      favoriteEvents.splice(favoriteEvents.indexOf(eventId), 1);
    } else {
      // add to fav
      favoriteEvents.push(eventId);
    }

    setFavoriteEvents([...favoriteEvents]);
  };
  // pass this to FavoriteEvent page
  //   const handleDeleteFavarite = eve =>{
  //     events.filter((event) => event.id !== evesetEvents(deleteEvent);

  //   }

  return (
    <>
      {toggleFavPage ? (
        <FavoriteEvent
          toggleFav={toggleFav}
          toggleFavPage={handleToggleFavPage}
          events={events.filter((e) => favoriteEvents.includes(e.id))}
        />
      ) : (
        <section className="event-management">
          <h2>Event Management</h2>
          <div>
            <h3>All Events</h3>
            <ul id="events-list">
              {/* Display all Events here */}
              {events.map((eve, i) => (
                <li key={i}>
                  <strong>Name:</strong> {eve.name}
                  <strong>Date:</strong> {eve.date}
                  <strong>Description:</strong> {eve.description}
                  <strong>Category:</strong> {eve.category}
                  <strong>Id:</strong> {eve.id}
                  {favoriteEvents.includes(eve.id) ? (
                    <IoIosHeart
                      onClick={() => toggleFav(eve)}
                      style={{ color: "red" }}
                    />
                  ) : (
                    <IoIosHeartEmpty
                      onClick={() => toggleFav(eve)}
                      style={{ color: "red" }}
                    />
                  )}
                </li>
              ))}
            </ul>
            <button toggleFavPage={toggleFavPage} onClick={handleToggleFavPage}>
              Click here to see favorite event
            </button>
            <EventForm handleSubmitAddEvent={handleSubmitAddEvent} />
            <DeleteEvent handleDeleteEvent={handleDeleteEvent} />
            <FindEvent handleSearchEvent={handleSearchEvent} />
            {/* */}
          </div>
        </section>
      )}
    </>
  );
};

export default Events;

// favorite  https://codesandbox.io/s/react-add-to-favorite-dprh6

// https://docs.reactjsgirls.com/tinder-for-cats/build-favorites

// https://medium.com/wesionary-team/creating-favorites-list-using-localstorage-in-react-part-ii-5f2766369c4f
