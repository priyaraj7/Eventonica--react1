import React, { useState } from "react";

const FindEvent = ({ handleSearchEvent }) => {
  const [eventCategory, setEventCategory] = useState("");
  const [eventDate, setEventDate] = useState("");

  return (
    <aside className="search-toolbar">
      <div>
        <h3>Find Events</h3>
        <form
          id="search"
          action="#"
          onSubmit={() => handleSearchEvent(eventCategory, eventDate)}
        >
          <fieldset>
            <label htmlFor="date-search">Date</label>
            <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
          </fieldset>
          <fieldset>
            <label htmlFor="category-search">Category</label>
            <input
              type="text"
              id="category-search"
              value={eventCategory}
              onChange={(e) => setEventCategory(e.target.value)}
            />
          </fieldset>

          <input type="submit" value="Search" />
        </form>
      </div>
    </aside>
  );
};

export default FindEvent;
