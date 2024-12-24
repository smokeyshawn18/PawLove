import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DogContext = createContext();

export const DogProvider = ({ children }) => {
  const [dogs, setDogs] = useState([]);

  const addDog = (dogDetails) => {
    // Validate dogDetails structure before adding
    if (validateDogDetails(dogDetails)) {
      setDogs((prevDogs) => [...prevDogs, dogDetails]);
    } else {
      console.error("Invalid dog details:", dogDetails);
    }
  };

  return (
    <DogContext.Provider value={{ dogs, addDog }}>
      {children}
    </DogContext.Provider>
  );
};

// Validation function
const validateDogDetails = (dogDetails) => {
  return (
    typeof dogDetails.name === "string" &&
    typeof dogDetails.breed === "string" &&
    typeof dogDetails.age === "string" && // You can change this to number if you prefer
    typeof dogDetails.location === "string" &&
    typeof dogDetails.description === "string" &&
    typeof dogDetails.contact === "string" &&
    (dogDetails.image instanceof File || dogDetails.image === null) // Allow image to be a File or null
  );
};

// Define PropTypes for DogProvider
DogProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children are valid React nodes
};

// You can also define PropTypes for dogDetails if needed
