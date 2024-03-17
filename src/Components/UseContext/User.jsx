import React from "react";

const User = ({ user,handleDeleteUser  }) => {
  const handleDelete = (id) => {
    handleDeleteUser(id);
  };
  return (
    <div className="bg-blue-400 text-white p-10 rounded-md">
      <p>{user.id}</p>
      <h1>{user.name}</h1>
      <button
        onClick={() => {
          handleDelete(user.id)
        }}
        className="bg-orange-500 p-2 mt-3 rounded-xl"
      >
        Delete
      </button>
    </div>
  );
};

export default User;
