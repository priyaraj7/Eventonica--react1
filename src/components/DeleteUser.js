import React, { useState } from "react";

const DeleteUser = ({ deleteUser }) => {
  const [userId, setUserId] = useState("");
  return (
    <div>
      <h3>Delete User</h3>
      <form id="delete-user" action="#" onSubmit={() => deleteUser(userId)}>
        <fieldset>
          <label>User ID</label>
          <input
            type="text"
            id="delete-user-id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  );
};

export default DeleteUser;