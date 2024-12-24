import { useContext } from "react";
import { DogContext } from "../context/DogContext.jsx";

const AdoptionList = () => {
  const { dogs } = useContext(DogContext);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold mb-8 text-black text-center">
        Adoption List
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dogs.map((dog, index) => (
          <li
            key={index}
            className="flex flex-col p-6 border border-pink-400 rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white"
          >
            {dog.image && (
              <img
                src={URL.createObjectURL(dog.image)} // Create object URL for the image
                alt={dog.name}
                className="w-full h-48 object-cover rounded-lg border border-pink-400 mb-4"
              />
            )}
            <div className="flex flex-col justify-center flex-grow text-center">
              <h3 className="text-2xl font-bold mb-2 text-pink-600">
                {dog.name}
              </h3>
              <p className="text-lg font-semibold text-gray-700">
                Breed: {dog.breed}
              </p>
              <p className="text-lg font-semibold text-gray-700">
                Age: {dog.age}
              </p>
              <p className="text-lg font-semibold text-gray-700">
                Location: {dog.location}
              </p>
              <p className="text-lg font-semibold text-gray-700 mb-4">
                Description: {dog.description}
              </p>
            </div>
            <div className="mt-4">
              <div className="p-3 border-2 text-white border-pink-400 rounded-lg bg-gradient-to-r from-pink-400 to-pink-500 text-center font-extrabold">
                Contact: {dog.contact}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdoptionList;
