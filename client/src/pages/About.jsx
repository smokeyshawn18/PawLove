import Dog from "../assets/images/ily.jpg"; // Ensure this path is correct

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold mb-6 text-center text-black">
        About Us
      </h2>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Welcome to <span className="font-bold text-pink-600">PawLove</span>! We
        are dedicated to helping dogs - cats find loving homes and connecting
        them with caring individuals and families.
      </p>
      <p className="text-lg text-gray-700 mb-4 text-center">
        PawLove was established in{" "}
        <span className="font-bold text-pink-600">January 2025</span>, with the
        mission of promoting dog - cat adoption and raising awareness about the
        importance of rescuing dogs - cats in need.
      </p>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Our team is passionate about animals and works tirelessly to ensure that
        every dog - cat gets the chance to find a forever home. We provide
        resources and support to both adopters and those looking to rehome their
        pets.
      </p>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Join us in making a difference in the lives of dogs - cats and their
        future families. Together, we can create a world where every dog - cats
        is loved and cherished!
      </p>
      <div className="mt-6 flex justify-center">
        <div className="relative w-full max-w-md">
          <img
            src={Dog} // Your image
            alt="Happy Dogs"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-transparent rounded-lg opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <h3 className="text-xl font-bold text-white">
              Happy Dogs, Happy Homes
            </h3> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
