import React, { useState } from "react";

const Users = () => {
  //variables
  const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
  const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
  const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };

  const [users, setUsers] = useState([marlin, nemo, dory]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // id, name, and email are states that store what values the user types in those fields
  // users is an array of user objects
  // All of these states can be defined in the component
  const onSubmit = (e) => {
    e.preventDefault();
    //const newUser = { id: id, name: name, email: email };
    const newUser = { name, email };
    setUsers([...users, newUser]);
  };
  return (
    <>
      <section className="user-management">
        <h2>User Management</h2>

        <ul id="users-list">
          {/* display all existing Users here */}
          {/* iterating through users */}
          {users.map((u, i) => (
            <li key={i}>
              {u.name} and {u.email}
            </li>
          ))}
        </ul>

        <div>
          <h3>Add User</h3>
          <form id="add-user" action="#" onSubmit={onSubmit}>
            <fieldset>
              <label>Name</label>
              <input
                type="text"
                id="add-user-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                id="add-user-email"
                value={email}
                onChange={(e) => setName(e.target.value)}
              />
            </fieldset>
            {/* Add more form fields here */}
            <input type="submit" value="Add" />
          </form>
        </div>

        <div>
          <h3>Delete User</h3>
          <form id="delete-user" action="#">
            <fieldset>
              <label>User ID</label>
              <input type="text" id="delete-user-id" />
            </fieldset>
            <input type="submit" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Users;
