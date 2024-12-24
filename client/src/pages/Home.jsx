import HomeImage from "../assets/images/home.jpg"; // Ensure this path is correct
import { FaDog, FaHeart, FaMoneyBillWave } from "react-icons/fa"; // Import React icons

function Home() {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 mb-5">
          <img
            src={HomeImage}
            alt="Happy Dogs"
            className="w-full h-auto rounded-lg shadow-lg object-cover" // Adjust the image properties
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">
            Welcome to PawLove
          </h1>
          <p className="text-xl mb-4">
            Help dogs - cats in need find a loving home, or offer support for
            injured dogs.
          </p>
        </div>
      </div>

      {/* Feature Section */}
      <h2 className="text-3xl font-bold mb-6 text-pink-600 text-center">
        What We Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaDog className="text-pink-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-pink-600">
            Adopt a Dog - Cat
          </h3>
          <p className="text-gray-700">
            Give a dog - cat a second chance at life by adopting them. Many
            loving dogs await their forever homes!
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaHeart className="text-pink-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-pink-600">Donate</h3>
          <p className="text-gray-700">
            Your donations help provide medical care, food, and shelter for dogs
            in need. Every contribution counts!
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaMoneyBillWave className="text-pink-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-pink-600">Support Us</h3>
          <p className="text-gray-700">
            Offer support for injured dogs in your area and help them receive
            the care they deserve.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
