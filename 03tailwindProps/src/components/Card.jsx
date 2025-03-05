import React from "react";

function Card({username, btnText}){
  console.log(username);
  
  
    return(
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-800 text-white p-4">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src="https://images.pexels.com/photos/15239707/pexels-photo-15239707/free-photo-of-photo-of-a-chapel-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Card Image"
      />
      <div className="py-4">
        <h2 className="text-xl font-bold">{username} </h2>
        <p className="text-gray-400 mt-2">
          This is a simple card component with Tailwind CSS.
        </p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
          {btnText || "visit me"}
        </button>
        <span className="text-gray-400 text-sm">{username}</span>
      </div>
    </div>
    )
}

export default Card