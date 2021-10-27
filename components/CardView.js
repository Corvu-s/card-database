import React from "react";

export default function CardView({ message }) {
  console.log(message);
  return (
    <div className="flex flex-wrap justify-center space-x-4">
      {message.cards.map((item, index) => (
        <div
          key={index}
          className="max-w-md px-8 py-4 my-20 bg-white rounded-lg shadow-lg"
        >
          <div className="text-center ">
            <h2 className="text-3xl font-semibold text-gray-800 ">
              {item.name}
            </h2>
            <img className="max-w-md " src={item.imageUrl} alt="card image" />
          </div>

          <div className="px-6 pt-4 pb-2">
            {item.colors != undefined ? (
              item.colors.map((color, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {color}
                </span>
              ))
            ) : (
              <p>no colour</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
