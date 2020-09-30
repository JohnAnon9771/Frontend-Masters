import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

function SearchParams() {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed('');
    pet.breeds(animal).then(
      ({ breeds }) => {
        const breedsName = breeds.map(({ name }) => name);
        setBreeds(breedsName);
      },
      (error) => console.error(error),
    );
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            type="text"
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
