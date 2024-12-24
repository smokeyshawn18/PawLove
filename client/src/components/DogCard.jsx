import PropTypes from "prop-types";

function DogCard({ dog }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold">{dog.name}</h2>
      <p>
        <strong>Breed:</strong> {dog.breed}
      </p>
      <p>
        <strong>Age:</strong> {dog.age} years
      </p>
      <p>
        <strong>Location:</strong> {dog.location}
      </p>
      <p className="mt-2">{dog.description}</p>
      <p className="mt-2">
        <strong>Contact:</strong> {dog.contact}
      </p>
    </div>
  );
}

DogCard.propTypes = {
  dog: PropTypes.shape({
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string,
    contact: PropTypes.string.isRequired,
  }).isRequired,
};

export default DogCard;
