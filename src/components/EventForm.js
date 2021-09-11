import React, { useReducer } from "react";

const EventForm = ({ handleSubmitAddEvent }) => {
  const initialState = {
    id: "",
    name: "",
    // date: null,
    date: "",
    description: "",
    category: "",
    maxAttendees: 10,
    image: "",
  };

  const reducer = (state, action) => {
    console.log(action, "this is the action");
    switch (action.type) {
      case "editName":
        console.log("Logged if the editName action is being dispatched");
        return { ...state, name: action.payload };

      case "editDescription":
        return { ...state, description: action.payload };

      case "editCategory":
        return { ...state, category: action.payload };

      case "editMaxAttendees":
        return { ...state, maxAttendees: action.payload };

      case "editImage":
        return { ...state, image: action.payload };

      case "editDate":
        return { ...state, date: action.payload };

      case "editId":
        return { ...state, id: action.payload };

      default:
        return state;
    }
  };

  // const [events, setEvents] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Add Event</h3>
      <form
        id="add-event"
        action="#"
        onSubmit={(ev) => {
          ev.preventDefault();
          handleSubmitAddEvent(state);
        }}
      >
        <fieldset>
          <label>Id</label>
          <input
            type="text"
            id="add-event-id"
            value={state.id}
            onChange={(e) =>
              dispatch({
                type: "editId",
                payload: e.target.value,
              })
            }
            placeholder="Id"
          />

          <input
            type="text"
            id="add-event-name"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: "editName",
                payload: e.target.value,
              })
            }
            placeholder="Virtual corgi meetup"
          />

          <input
            type="text"
            id="add-event-date"
            value={state.date}
            onChange={(e) =>
              dispatch({
                type: "editDate",
                payload: e.target.value,
              })
            }
            placeholder="Date"
          />

          <input
            type="text"
            id="add-event-category"
            value={state.category}
            onChange={(e) =>
              dispatch({
                type: "editCategory",
                payload: e.target.value,
              })
            }
            placeholder="Category"
          />
          <input
            type="number"
            id="add-event-maxAttendees"
            value={state.maxAttendees}
            onChange={(e) =>
              dispatch({
                type: "editMaxAttendees",
                payload: e.target.value,
              })
            }
            placeholder="maxAttendees"
          />

          <input
            type="text"
            id="add-event-description"
            value={state.description}
            onChange={(e) =>
              dispatch({
                type: "editDescription",
                payload: e.target.value,
              })
            }
            placeholder="Description"
          />
        </fieldset>
        {/* Add more form fields here */}
        <input type="submit" />
      </form>
    </div>
  );
};

export default EventForm;
