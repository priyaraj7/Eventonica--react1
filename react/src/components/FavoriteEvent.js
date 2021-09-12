import React from "react";

const FavoriteEvent = ({ events, toggleFav, toggleFavPage }) => {
  //const handleDeleteFavorite = (eve) =>

  return (
    <div>
      <h2>Favorite Events</h2>
      <ul id="events-list">
        {/* Display all Events here */}
        {events.map((eve, i) => (
          <li key={i}>
            <strong>Name:</strong> {eve.name}
            <strong>Date:</strong> {eve.date}
            <strong>Description:</strong> {eve.description}
            <strong>Category:</strong> {eve.category}
            <strong>Id:</strong> {eve.id}
            <button onClick={() => toggleFav(eve)}>Delete from Favorite</button>
          </li>
        ))}
      </ul>
      <button onClick={toggleFavPage}>Click here to see all event</button>
    </div>
  );
};

export default FavoriteEvent;
