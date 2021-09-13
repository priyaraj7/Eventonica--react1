import React, { useState, useEffect } from "react";
import DeleteUser from "./DeleteUser";

const Users = () => {
  //new code
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/users");
    const user = await response.json();
    setUsers(user);
  };

  useEffect(() => {
    getUsers(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState();

  // id, name, and email are states that store what values the user types in those fields
  // users is an array of user objects
  // All of these states can be defined in the component

  //Add new user
  const addUser = async (e) => {
    e.preventDefault();
    //const newUser = { id: id, name: name, email: email };
    const newUser = { name, email };
    const rawResponse = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const content = await rawResponse.json();
    setName("");
    setEmail("");
    setId("");
    setUsers([...users, content]);
  };
  //Delete User
  const deleteUser = async (deleteId) => {
    const response = await fetch(
      `http://localhost:3000/users/${deleteId}/delete`,
      {
        method: "POST",
      }
    );
    if (response.status !== 200) {
      alert("delete failed");
    } else {
      const updatedUsers = users.filter((i) => i.id !== deleteId);
      setUsers(updatedUsers);
    }
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
              <strong>Name</strong>: {u.name} <strong>Email</strong>: {u.email}{" "}
              {/* <strong>Id</strong>: {u.id} */}
              <button onClick={() => deleteUser(u.id)}>Delete</button>
            </li>
          ))}
        </ul>

        <div>
          <h3>Add User</h3>
          <form id="add-user" action="#" onSubmit={addUser}>
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
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <label>User ID</label>
              <input
                type="text"
                id="add-user-id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              /> */}
            </fieldset>
            {/* Add more form fields here */}
            <input type="submit" value="Add" />
          </form>
        </div>

        {/* <DeleteUser deleteUser={deleteUser} /> */}
      </section>
    </>
  );
};

export default Users;
