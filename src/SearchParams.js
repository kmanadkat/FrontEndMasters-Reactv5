import React, { useState, useEffect } from "react";
import pet, {ANIMALS} from '@frontendmasters/pet';
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({breeds: apiBreedsData}) => {
      const breedStrings = apiBreedsData.map(({name}) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreeds, setBreed])
  // Pass empty array if want to run only once (similar to componentDidMount treatment)

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
