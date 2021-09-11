import React, { useState } from "react";
import EventForm from "./EventForm";
import DeleteEvent from "./DeleteEvent";
import FindEvent from "./FindEvent";

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

  //add event ... this method goes to child -- child to parent update
  const handleSubmitAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  // delete event
  const handleDeleteEvent = (deleteId) => {
    //debugger;
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

  return (
    <>
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
              </li>
            ))}
          </ul>
          <EventForm handleSubmitAddEvent={handleSubmitAddEvent} />
          <DeleteEvent handleDeleteEvent={handleDeleteEvent} />
          <FindEvent handleSearchEvent={handleSearchEvent} />
          {/* */}
        </div>
      </section>
    </>
  );
};

export default Events;
