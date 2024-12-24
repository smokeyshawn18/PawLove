import { useState, useContext } from "react";
import { DogContext } from "../context/DogContext.jsx"; // Import your context

function PostAdoption() {
  const [dogDetails, setDogDetails] = useState({
    name: "",
    breed: "",
    age: "",
    location: "",
    description: "",
    contact: "",
    image: null,
  });

  const { addDog } = useContext(DogContext); // Use context to add dog to the list
  const [errors, setErrors] = useState({}); // State for holding errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDogDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setDogDetails((prev) => ({ ...prev, image: file }));
  };

  const validateForm = () => {
    const newErrors = {};
    // Form validation logic
    if (!dogDetails.name) newErrors.name = "Dog - Cat name is required.";
    if (!dogDetails.breed) newErrors.breed = "Breed is required.";
    if (!dogDetails.age) {
      newErrors.age = "Age is required.";
    } else if (isNaN(dogDetails.age) || dogDetails.age <= 0) {
      newErrors.age = "Age must be a positive number.";
    }
    if (!dogDetails.location) newErrors.location = "Location is required.";
    if (!dogDetails.description)
      newErrors.description = "Description is required.";
    if (!dogDetails.contact) newErrors.contact = "Contact number is required.";
    if (!dogDetails.image) newErrors.image = "Image is required.";

    setErrors(newErrors); // Set errors state
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    // Create FormData for the submission
    const formData = new FormData();
    for (const key in dogDetails) {
      formData.append(key, dogDetails[key]);
    }

    addDog(dogDetails); // Call the function to add the dog to the list
    alert(`Dog "${dogDetails.name}" posted for adoption.`);

    // Reset form
    setDogDetails({
      name: "",
      breed: "",
      age: "",
      location: "",
      description: "",
      contact: "",
      image: null,
    });
    setErrors({}); // Clear errors
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">
        Post a Dog - Cat for Adoption
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Dog - Cat Name"
          value={dogDetails.name}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="text"
          name="breed"
          placeholder="Breed"
          value={dogDetails.breed}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.breed && <p className="text-red-500 text-sm">{errors.breed}</p>}

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={dogDetails.age}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={dogDetails.location}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.location && (
          <p className="text-red-500 text-sm">{errors.location}</p>
        )}

        <textarea
          name="description"
          placeholder="Description"
          value={dogDetails.description}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description}</p>
        )}

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={dogDetails.contact}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.contact && (
          <p className="text-red-500 text-sm">{errors.contact}</p>
        )}

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}

        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-200"
        >
          Post Adoption
        </button>
      </form>
    </div>
  );
}

export default PostAdoption;
