import React from 'react';

export default function ContactCart({ users, deleteContact }) {
  return (
    <div className="flex flex-wrap gap-6 mt-6 p-6 justify-center">
      {users.map((user) => (
        <div
          key={user.id}
          className="min-w-[320px] max-w-sm bg-white shadow-md rounded-lg p-4 border border-gray-300"
        >
          <ul className="space-y-2 text-gray-800">
            <li className="font-semibold">ID: <span className="font-normal">{user.id}</span></li>
            <li className="font-semibold">Name: <span className="font-normal">{user.name}</span></li>
            <li className="font-semibold">Email: <span className="font-normal">{user.email}</span></li>
          </ul>
          <button
            onClick={() => deleteContact(user.id)}
            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
