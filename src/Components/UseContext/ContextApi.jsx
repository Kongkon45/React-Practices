import React from "react";
import { useState } from "react";
import Users from "./Users";
import NewUser from "./NewUser";
import { UsersContext } from "../Context/UsersContext";
const ContextApi = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Kongkon Jowarder" },
    { id: 2, name: "Dalim Kazi" },
    { id: 3, name: "Mehedi Hasan" },
  ]);
  const handleDeleteUser = (id) => {
    const filterUser = users.filter((user) => user.id !== id);
    setUsers(filterUser);
  };
  const handleNewUser = (user) => {
    setUsers((prevUser) => [...prevUser, user]);
  };
  return;
  <UsersContext.prevUser value={{ users, setUsers }}>
    <div>
      <NewUser handleNewUser={handleNewUser} />
      <Users handleDeleteUser={handleDeleteUser} />
    </div>
  </UsersContext.prevUser>;
};

export default ContextApi;
