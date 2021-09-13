import React, { useState, useEffect } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

import EventForm from "./EventForm";
import DeleteEvent from "./DeleteEvent";
import FindEvent from "./FindEvent";
import FavoriteEvent from "./FavoriteEvent";

const Events = () => {
  const [events, setEvents] = useState([]);
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  // const [date, setDate] = useState("");
  // const [id, setId] = useState("");
  const [favoriteEvents, setFavoriteEvents] = useState([]);
  const [toggleFavPage, setToggleFavPage] = useState(false);

  //this code is code is to connect express
  const getEvents = async () => {
    const response = await fetch("http://localhost:3000/events");
    const event = await response.json();
    setEvents(event);
  };

  useEffect(() => {
    getEvents(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
  }, []);

  // //add event ... this method goes to child -- child to parent update
  // const handleSubmitAddEvent = (newEvent) => {
  //   setEvents([...events, newEvent]);
  // };

  const addEvent = async (newEvent) => {
    // e.preventDefault();
    //const newUser = { id: id, name: name, email: email };
    // const newEvent = { name, date, category, description, id };
    const rawResponse = await fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    });
    const content = await rawResponse.json();
    setEvents([...events, content]);
  };

  const deleteEvent = async (deleteId) => {
    const response = await fetch(
      `http://localhost:3000/events/${deleteId}/delete`,
      {
        method: "POST",
      }
    );
    if (response.status !== 200) {
      alert("delete failed");
    } else {
      const updatedEvents = events.filter((i) => i.id !== deleteId);
      setEvents(updatedEvents);
    }
  };

  //Search Event
  const handleSearchEvent = (category, date) => {
    //debugger;
    const findEvent = events.filter(
      (event) => event.category === category || event.date === date
    );
    setEvents(findEvent);
  };

  // pass this to FavoriteEvent page
  //   const handleDeleteFavarite = eve =>{
  //     events.filter((event) => event.id !== evesetEvents(deleteEvent);
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
                  <button onClick={() => deleteEvent(eve.id)}>Delete</button>
                </li>
              ))}
            </ul>
            <button toggleFavPage={toggleFavPage} onClick={handleToggleFavPage}>
              Click here to see favorite event
            </button>
            <EventForm addEvent={addEvent} />

            <FindEvent handleSearchEvent={handleSearchEvent} />
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
