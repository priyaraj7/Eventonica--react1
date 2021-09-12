import React, { useState } from "react";
const DeleteEvent = ({ handleDeleteEvent }) => {
  const [eventId, setEventId] = useState("");

  return (
    <div>
      <h3>Delete Event</h3>
      <form
        id="delete-event"
        action="#"
        onSubmit={() => handleDeleteEvent(eventId)}
      >
        <fieldset>
          <label>Event ID</label>
          <input
            type="number"
            min="1"
            id="delete-event-id"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
          />
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  );
};

export default DeleteEvent;
